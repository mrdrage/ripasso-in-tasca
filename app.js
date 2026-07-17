(function () {
  "use strict";

  const DATA = window.STUDY_DATA;
  const STORAGE_KEY = "ripasso-in-tasca-stats-v4";
  const LEGACY_STORAGE_KEYS = ["ripasso-in-tasca-stats-v3", "ripasso-in-tasca-stats-v2", "ripasso-in-tasca-progress-v1"];
  const MAX_SESSIONS = 20;
  const MAX_SESSION_MISTAKES = 30;
  const DAY = 24 * 60 * 60 * 1000;
  const views = [...document.querySelectorAll(".view")];
  const toast = document.getElementById("toast");
  let toastHandle;
  let deferredInstallPrompt = null;
  let activeSubject = "history";
  let quizSession = null;
  let quizPreset = null;

  const emptyStats = () => ({ chapters: {}, errors: {}, questions: {}, sessions: [] });

  function isRecord(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function mergeQuestionBanks() {
    const banks = [window.EXTRA_QUESTIONS, window.DOUBLE_QUESTIONS].filter(isRecord);
    if (!banks.length) return;
    ["history", "geography"].forEach((subjectId) => {
      const subject = DATA.subjects[subjectId];
      if (!subject || !Array.isArray(subject.questions)) return;
      const chapterIds = new Set(subject.chapters.map((chapter) => chapter.id));
      const knownIds = new Set(subject.questions.map((question) => question.id));
      banks.forEach((bank) => {
        const questions = bank[subjectId];
        if (!Array.isArray(questions)) return;
        questions.forEach((question) => {
          const valid = isRecord(question)
            && typeof question.id === "string"
            && question.id.length > 0
            && typeof question.prompt === "string"
            && question.prompt.length > 0
            && chapterIds.has(question.chapter)
            && Array.isArray(question.options)
            && question.options.length >= 2
            && question.options.every((option) => typeof option === "string" && option.length > 0)
            && Number.isInteger(question.answer)
            && question.answer >= 0
            && question.answer < question.options.length;
          if (!valid || knownIds.has(question.id)) return;
          subject.questions.push(question);
          knownIds.add(question.id);
        });
      });
    });
  }

  function normalizeStats(value) {
    const normalized = emptyStats();
    if (!isRecord(value)) return normalized;

    const storedChapters = isRecord(value.chapters) ? value.chapters : {};
    allChapters().forEach((chapter) => {
      const stored = storedChapters[chapter.id];
      if (!isRecord(stored)) return;
      const total = Math.max(0, Math.floor(Number(stored.total) || 0));
      const oralTotal = Math.max(0, Math.floor(Number(stored.oralTotal) || 0));
      normalized.chapters[chapter.id] = {
        correct: Math.min(total, Math.max(0, Math.floor(Number(stored.correct) || 0))),
        total,
        oralScore: Math.min(oralTotal * 2, Math.max(0, Number(stored.oralScore) || 0)),
        oralTotal
      };
    });

    const questionIds = new Set(Object.values(DATA.subjects).flatMap((subject) => subject.questions.map((item) => item.id)));
    if (isRecord(value.errors)) {
      Object.entries(value.errors).forEach(([id, stored]) => {
        if (!questionIds.has(id) || !isRecord(stored) || !findChapter(stored.chapter)) return;
        const due = new Date(stored.due);
        if (Number.isNaN(due.getTime())) return;
        normalized.errors[id] = {
          chapter: stored.chapter,
          stage: Math.min(4, Math.max(0, Math.floor(Number(stored.stage) || 0))),
          due: due.toISOString()
        };
      });
    }

    if (isRecord(value.questions)) {
      Object.entries(value.questions).forEach(([id, stored]) => {
        if (!questionIds.has(id) || !isRecord(stored)) return;
        normalized.questions[id] = {
          correct: Math.max(0, Math.floor(Number(stored.correct) || 0)),
          wrong: Math.max(0, Math.floor(Number(stored.wrong) || 0))
        };
      });
    }

    if (Array.isArray(value.sessions)) {
      normalized.sessions = value.sessions.map((stored, index) => {
        if (!isRecord(stored) || !DATA.subjects[stored.subject]) return null;
        const completedAt = new Date(stored.completedAt || stored.date);
        if (Number.isNaN(completedAt.getTime())) return null;
        const validChapterIds = new Set(DATA.subjects[stored.subject].chapters.map((chapter) => chapter.id));
        const chapters = Array.isArray(stored.chapters)
          ? [...new Set(stored.chapters.filter((id) => validChapterIds.has(id)))]
          : [];
        if (!chapters.length) return null;
        const total = Math.max(1, Math.floor(Number(stored.total) || Number(stored.count) || 0));
        const correct = Math.min(total, Math.max(0, Math.floor(Number(stored.correct) || 0)));
        const calculatedScore = Math.round((correct / total) * 100);
        const storedScore = Math.max(0, Math.min(100, Math.round(Number(stored.score))));
        const mode = ["training", "challenge", "written", "oral"].includes(stored.mode) ? stored.mode : "training";
        const difficulty = ["easy", "hard", "mixed"].includes(stored.difficulty) ? stored.difficulty : "mixed";
        const mistakes = Array.isArray(stored.mistakes) ? stored.mistakes.map((entry) => {
          if (!Array.isArray(entry) || entry.length < 2 || typeof entry[0] !== "string") return null;
          const found = findQuestion(entry[0]);
          if (!found || found.subjectId !== stored.subject) return null;
          const selected = Math.floor(Number(entry[1]));
          if (!Number.isInteger(selected) || selected < -1 || selected >= found.question.options.length) return null;
          if (selected === found.question.answer) return null;
          return [entry[0], selected];
        }).filter(Boolean).slice(0, MAX_SESSION_MISTAKES) : [];
        return {
          id: typeof stored.id === "string" && stored.id ? stored.id : `${completedAt.getTime()}-${index}`,
          completedAt: completedAt.toISOString(),
          subject: stored.subject,
          difficulty,
          score: Number.isFinite(storedScore) ? storedScore : calculatedScore,
          correct,
          total,
          chapters,
          mode,
          mistakes
        };
      }).filter(Boolean).sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt)).slice(0, MAX_SESSIONS);
    }
    return normalized;
  }

  function loadStats() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
        || LEGACY_STORAGE_KEYS.map((key) => localStorage.getItem(key)).find(Boolean)
        || "{}";
      return normalizeStats(JSON.parse(stored));
    } catch (_error) {
      return emptyStats();
    }
  }

  mergeQuestionBanks();
  let stats = loadStats();

  function saveStats() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  }

  saveStats();
  localStorage.removeItem("ripasso-in-tasca-subject");

  function todayKey() {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Rome",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());
  }

  function chapterStats(id, create = false) {
    if (stats.chapters[id]) return stats.chapters[id];
    const empty = {
      correct: 0,
      total: 0,
      oralScore: 0,
      oralTotal: 0
    };
    if (create) stats.chapters[id] = empty;
    return empty;
  }

  function subjectData(subject = activeSubject) {
    return DATA.subjects[subject];
  }

  function allChapters() {
    return Object.values(DATA.subjects).flatMap((subject) => subject.chapters);
  }

  function findChapter(id) {
    for (const [subjectId, subject] of Object.entries(DATA.subjects)) {
      const chapter = subject.chapters.find((item) => item.id === id);
      if (chapter) return { chapter, subjectId, subject };
    }
    return null;
  }

  function findQuestion(id) {
    for (const [subjectId, subject] of Object.entries(DATA.subjects)) {
      const question = subject.questions.find((item) => item.id === id);
      if (question) return { question, subjectId, subject };
    }
    return null;
  }

  function normalizeDifficulty(value) {
    const raw = isRecord(value) ? value.difficulty || value.level : value;
    const normalized = String(raw || "").trim().toLowerCase();
    if (["easy", "facile", "base"].includes(normalized)) return "easy";
    if (["hard", "difficile", "advanced", "avanzata"].includes(normalized)) return "hard";
    return null;
  }

  function fallbackQuestionDifficulty(question) {
    const reasoningWords = /perché|caus|conseguenz|confront|collega|differenz|deduc|spiega|interpret|scenario|relazione|avrebbe/i;
    if (reasoningWords.test(question.prompt)) return "hard";
    let hash = 0;
    for (const character of question.id) hash = ((hash << 5) - hash + character.charCodeAt(0)) | 0;
    return Math.abs(hash) % 100 < 42 ? "hard" : "easy";
  }

  function questionDifficulty(question, subjectId) {
    const source = window.QUESTION_DIFFICULTY;
    if (typeof source === "function") {
      const result = normalizeDifficulty(source(question, subjectId));
      if (result) return result;
    } else if (isRecord(source)) {
      const candidates = [
        source[question.id],
        source[subjectId]?.[question.id],
        source.questions?.[question.id],
        source.questions?.[subjectId]?.[question.id]
      ];
      for (const candidate of candidates) {
        const result = normalizeDifficulty(candidate);
        if (result) return result;
      }
    }
    return fallbackQuestionDifficulty(question);
  }

  function uniqueQuestionPool(subjectId, chapterIds, difficulty = "mixed") {
    const subject = subjectData(subjectId);
    const selected = new Set(chapterIds);
    const unique = new Map();
    subject.questions.forEach((question) => {
      if (!selected.has(question.chapter)) return;
      if (difficulty !== "mixed" && questionDifficulty(question, subjectId) !== difficulty) return;
      if (!unique.has(question.id)) unique.set(question.id, question);
    });
    return [...unique.values()];
  }

  function createQuizSession({ subjectId, chapters, difficulty = "mixed", count, mode = "training", label = "" }) {
    const subject = subjectData(subjectId);
    const chapterIds = [...new Set(chapters)].filter((id) => subject.chapters.some((chapter) => chapter.id === id));
    const requestedCount = Math.max(1, Math.floor(Number(count) || 0));
    let pool;
    if (mode === "oral") {
      const selected = new Set(chapterIds);
      pool = subject.oral.filter((item) => selected.has(item.chapter));
    } else {
      pool = uniqueQuestionPool(subjectId, chapterIds, difficulty);
    }
    if (!chapterIds.length || pool.length < requestedCount) return null;
    const dueIds = new Set(Object.entries(stats.errors)
      .filter(([, value]) => new Date(value.due).getTime() <= Date.now())
      .map(([id]) => id));
    const ordered = mode === "oral"
      ? shuffle(pool)
      : [...shuffle(pool.filter((item) => dueIds.has(item.id))), ...shuffle(pool.filter((item) => !dueIds.has(item.id)))];
    return {
      subject: subjectId,
      chapters: chapterIds,
      difficulty: mode === "oral" ? "mixed" : difficulty,
      mode,
      label,
      requestedCount,
      items: ordered.slice(0, requestedCount),
      index: 0,
      correct: 0,
      lives: 3,
      help5050: true,
      pass: true,
      selected: null,
      answered: false,
      results: [],
      oralChecklist: false,
      historyRecorded: false
    };
  }

  function chapterNumber(chapter) {
    return chapter.displayNumber ?? chapter.number;
  }

  function quickQuizCount(id) {
    const found = findChapter(id);
    if (!found) return 0;
    return Math.min(5, found.subject.questions.filter((item) => item.chapter === id).length);
  }

  function blockLabel(count) {
    return `${count} ${count === 1 ? "blocco" : "blocchi"}`;
  }

  function dueErrorEntries(subjectId) {
    return Object.entries(stats.errors)
      .map(([id, error]) => {
        const found = findQuestion(id);
        return found ? { id, error, ...found } : null;
      })
      .filter((item) => item && (!subjectId || item.subjectId === subjectId) && new Date(item.error.due).getTime() <= Date.now())
      .sort((a, b) => new Date(a.error.due).getTime() - new Date(b.error.due).getTime());
  }

  function focusHeading(container) {
    const heading = container.querySelector("h1");
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }

  function escapeAttribute(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;");
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function showToast(message) {
    clearTimeout(toastHandle);
    toast.textContent = message;
    toast.classList.add("show");
    toastHandle = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function setSubject(subject) {
    if (!DATA.subjects[subject]) return;
    activeSubject = subject;
  }

  function navigate(hash) {
    const target = hash.startsWith("#") ? hash : `#${hash}`;
    if (location.hash === target) renderRoute();
    else location.hash = target;
  }

  function routeFromHash() {
    const clean = location.hash.replace(/^#/, "") || "home";
    const [route, parameter] = clean.split("/");
    return { route, parameter };
  }

  function showView(name) {
    views.forEach((view) => {
      view.hidden = view.id !== `view-${name}`;
    });
    document.querySelectorAll(".bottom-nav [data-route]").forEach((button) => {
      const buttonRoute = button.dataset.route;
      const current = buttonRoute === name || (name === "article" && buttonRoute === "review");
      if (current) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function scoreStats(subjectId) {
    const chapters = subjectId ? subjectData(subjectId).chapters : allChapters();
    const values = chapters.map((chapter) => chapterStats(chapter.id));
    const total = values.reduce((sum, item) => sum + item.total, 0);
    const correct = values.reduce((sum, item) => sum + item.correct, 0);
    const oralTotal = values.reduce((sum, item) => sum + item.oralTotal, 0);
    const oralScore = values.reduce((sum, item) => sum + item.oralScore, 0);
    return { total, correct, oralTotal, oralScore };
  }

  function renderHome() {
    const target = document.getElementById("view-home");
    target.className = "view home-view";
    target.innerHTML = `
      <section class="home-hero">
        <div class="home-hero-copy">
          <p class="eyebrow">Storia e Geografia</p>
          <h1>Quanto ne sai?</h1>
          <p class="home-tagline">Scegli la tua prova, rispondi e scopri subito cosa hai imparato.</p>
        </div>
        <div class="home-hero-actions">
          <button class="button button-primary home-cta" type="button" data-route="setup">Mettiti alla prova</button>
          <button class="text-button home-review-link" type="button" data-route="review">Prima voglio ripassare</button>
        </div>
        <p class="home-offline-note">Funziona anche senza connessione.</p>
      </section>`;
    focusHeading(target);
  }

  function chapterChoicesMarkup(subjectId) {
    return subjectData(subjectId).chapters.map((chapter) => `
      <label class="chapter-check">
        <input type="checkbox" name="chapters" value="${chapter.id}">
        <span>${chapterNumber(chapter)}. ${chapter.title}</span>
      </label>`).join("");
  }

  function renderHomeSetup() {
    const target = document.getElementById("view-home");
    const defaultSubject = activeSubject && DATA.subjects[activeSubject] ? activeSubject : "history";
    target.className = `view setup-view ${defaultSubject === "geography" ? "geo-theme" : ""}`;
    target.innerHTML = `
      <div class="home-setup">
        <button class="back-button" type="button" data-route="home">← Torna alla home</button>
        <p class="eyebrow">Nuova prova</p>
        <h1>Scegli come giocare</h1>
        <p class="lede">Quattro scelte e si parte. Durante la prova riceverai subito la correzione e una spiegazione.</p>

        <form id="home-quiz-form" novalidate>
          <fieldset class="setup-step">
            <legend><span>1</span> Quanto deve durare?</legend>
            <div class="choice-tiles choice-tiles-three">
              ${[[10, "Rapido"], [20, "Completo"], [30, "Intenso"]].map(([count, label], index) => `
                <label class="choice-tile">
                  <input type="radio" name="count" value="${count}" ${index === 0 ? "checked" : ""} required>
                  <span><strong>${count}</strong><small>${label}</small></span>
                </label>`).join("")}
            </div>
          </fieldset>

          <fieldset class="setup-step">
            <legend><span>2</span> Scegli la difficoltà</legend>
            <div class="choice-tiles">
              <label class="choice-tile">
                <input type="radio" name="difficulty" value="easy" checked required>
                <span><strong>Facile</strong><small>Per fissare i concetti essenziali</small></span>
              </label>
              <label class="choice-tile">
                <input type="radio" name="difficulty" value="hard" required>
                <span><strong>Difficile</strong><small>Per ragionare e collegare le idee</small></span>
              </label>
            </div>
          </fieldset>

          <fieldset class="setup-step">
            <legend><span>3</span> Scegli la materia</legend>
            <div class="choice-tiles">
              ${Object.values(DATA.subjects).map((subject) => `
                <label class="choice-tile">
                  <input type="radio" name="subject" value="${subject.id}" ${subject.id === defaultSubject ? "checked" : ""} required>
                  <span><strong>${subject.name}</strong><small>${subject.chapters.length} capitoli</small></span>
                </label>`).join("")}
            </div>
          </fieldset>

          <fieldset class="setup-step">
            <legend><span>4</span> Su quali capitoli?</legend>
            <div class="choice-tiles">
              <label class="choice-tile">
                <input type="radio" name="scope" value="all" checked required>
                <span><strong>Tutto il programma</strong><small>Domande da tutti i capitoli</small></span>
              </label>
              <label class="choice-tile">
                <input type="radio" name="scope" value="specific" required>
                <span><strong>Capitoli specifici</strong><small>Scegli tu gli argomenti</small></span>
              </label>
            </div>
            <div id="specific-chapters" class="specific-chapters" hidden>
              <div class="select-actions">
                <button class="text-button" type="button" id="select-all-home">Seleziona tutti</button>
                <button class="text-button" type="button" id="select-none-home">Nessuno</button>
              </div>
              <div id="home-chapter-list" class="chapter-check-grid">${chapterChoicesMarkup(defaultSubject)}</div>
            </div>
          </fieldset>

          <div class="setup-summary">
            <p id="available-count" class="availability" role="status" aria-live="polite" tabindex="-1"></p>
            <button class="button button-primary setup-start" id="start-home-quiz" type="submit">Inizia la prova</button>
          </div>
        </form>
      </div>`;

    const form = target.querySelector("#home-quiz-form");
    const chapterArea = target.querySelector("#specific-chapters");
    const chapterList = target.querySelector("#home-chapter-list");
    const availability = target.querySelector("#available-count");
    const startButton = target.querySelector("#start-home-quiz");

    const selectedValue = (name) => form.querySelector(`input[name="${name}"]:checked`)?.value;
    const selectedChapters = () => {
      const subjectId = selectedValue("subject");
      if (selectedValue("scope") === "all") return subjectData(subjectId).chapters.map((chapter) => chapter.id);
      return [...form.querySelectorAll('input[name="chapters"]:checked')].map((input) => input.value);
    };
    const updateAvailability = () => {
      const subjectId = selectedValue("subject");
      const difficulty = selectedValue("difficulty");
      const requested = Number(selectedValue("count"));
      const chapters = selectedChapters();
      const available = uniqueQuestionPool(subjectId, chapters, difficulty).length;
      const enough = available >= requested;
      chapterArea.hidden = selectedValue("scope") !== "specific";
      availability.classList.toggle("insufficient", !enough);
      availability.textContent = enough
        ? `${available} domande uniche disponibili. La prova ne userà ${requested}.`
        : `${available} domande uniche disponibili: non bastano per una prova da ${requested}. Seleziona altri capitoli.`;
      startButton.disabled = !enough;
      startButton.setAttribute("aria-describedby", "available-count");
    };
    const replaceChapterChoices = () => {
      const subjectId = selectedValue("subject");
      setSubject(subjectId);
      target.classList.toggle("geo-theme", subjectId === "geography");
      chapterList.innerHTML = chapterChoicesMarkup(subjectId);
      chapterList.querySelectorAll('input[name="chapters"]').forEach((input) => input.addEventListener("change", updateAvailability));
      updateAvailability();
    };

    form.querySelectorAll('input[name="count"], input[name="difficulty"], input[name="scope"]').forEach((input) => input.addEventListener("change", updateAvailability));
    form.querySelectorAll('input[name="subject"]').forEach((input) => input.addEventListener("change", replaceChapterChoices));
    chapterList.querySelectorAll('input[name="chapters"]').forEach((input) => input.addEventListener("change", updateAvailability));
    target.querySelector("#select-all-home").addEventListener("click", () => {
      chapterList.querySelectorAll('input[name="chapters"]').forEach((input) => { input.checked = true; });
      updateAvailability();
    });
    target.querySelector("#select-none-home").addEventListener("click", () => {
      chapterList.querySelectorAll('input[name="chapters"]').forEach((input) => { input.checked = false; });
      updateAvailability();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const subjectId = selectedValue("subject");
      const difficulty = selectedValue("difficulty");
      const count = Number(selectedValue("count"));
      const chapters = selectedChapters();
      const available = uniqueQuestionPool(subjectId, chapters, difficulty).length;
      if (available < count) {
        updateAvailability();
        availability.focus?.({ preventScroll: true });
        return;
      }
      setSubject(subjectId);
      quizPreset = null;
      quizSession = createQuizSession({
        subjectId,
        chapters,
        difficulty,
        count,
        mode: "training",
        label: count === 10 ? "Test rapido" : count === 20 ? "Prova completa" : "Prova intensa"
      });
      if (!quizSession) {
        showToast("Questa combinazione non è disponibile");
        updateAvailability();
        return;
      }
      navigate("quiz");
    });
    updateAvailability();
    focusHeading(target);
  }

  function subjectSwitch() {
    return `
      <div class="subject-switch" aria-label="Scegli la materia">
        ${Object.values(DATA.subjects).map((subject) => `
          <button type="button" data-subject="${subject.id}" aria-pressed="${activeSubject === subject.id}">${subject.name}</button>
        `).join("")}
      </div>`;
  }

  function renderReview() {
    const target = document.getElementById("view-review");
    const subject = subjectData();
    const isGeo = activeSubject === "geography";
    const list = subject.chapters.map((chapter) => `
        <button class="chapter-card ${isGeo ? "geo" : ""}" type="button" data-open-chapter="${chapter.id}">
          <span class="chapter-number">${chapterNumber(chapter)}</span>
          <span>
            <strong>${chapter.title}</strong>
            <small>${chapter.subtitle}</small>
          </span>
          <span class="chapter-arrow" aria-hidden="true">›</span>
        </button>`).join("");

    target.className = `view ${isGeo ? "geo-theme" : ""}`;
    target.innerHTML = `
      <p class="eyebrow ${isGeo ? "geo" : ""}">Testi di studio</p>
      <h1>Ripassa ${subject.name}</h1>
      <p class="lede">Apri un capitolo e scegli tra sintesi veloce e testo completo.</p>
      ${subjectSwitch()}
      <div class="chapter-list">${list}</div>`;

    bindSubjectSwitch(target, renderReview);
    bindOpenChapter(target);
    focusHeading(target);
  }

  function sectionParagraphs(item) {
    if (Array.isArray(item.paragraphs)) return item.paragraphs;
    if (Array.isArray(item.content)) return item.content;
    if (typeof item.content === "string") return [item.content];
    if (typeof item.text === "string") return [item.text];
    return [];
  }

  function articleContentMarkup(chapterId, mode, sections) {
    const links = sections.map((item, index) => {
      const targetId = `${chapterId}-${mode}-section-${index + 1}`;
      return `<li><button class="article-index-link" type="button" data-scroll-target="${targetId}">${item.title}</button></li>`;
    }).join("");
    const body = sections.map((item, index) => {
      const targetId = `${chapterId}-${mode}-section-${index + 1}`;
      return `
        <section class="article-section" id="${targetId}">
          <h2>${item.title}</h2>
          ${sectionParagraphs(item).map((paragraph) => `<p>${paragraph}</p>`).join("")}
          ${item.key ? `<aside class="key-box"><strong>Da ricordare</strong>${item.key}</aside>` : ""}
        </section>`;
    }).join("");
    return `
      <nav class="article-index" aria-label="Indice interno del capitolo">
        <details>
          <summary>Indice del capitolo · ${sections.length} ${sections.length === 1 ? "argomento" : "argomenti"}</summary>
          <ol>${links}</ol>
        </details>
      </nav>
      ${body}`;
  }

  function renderArticle(id) {
    const found = findChapter(id);
    if (!found) {
      navigate("review");
      return;
    }
    const { chapter, subjectId, subject } = found;
    setSubject(subjectId);
    const isGeo = subjectId === "geography";
    const fullSections = Array.isArray(window.FULL_TEXTS?.[id]?.sections) && window.FULL_TEXTS[id].sections.length
      ? window.FULL_TEXTS[id].sections
      : null;
    const summarySections = chapter.sections;
    const quizCount = quickQuizCount(id);

    const target = document.getElementById("view-article");
    target.className = `view ${isGeo ? "geo-theme" : ""}`;
    target.innerHTML = `
      <article class="article-shell">
        <button class="back-button" type="button" data-route="review">← Tutti i capitoli di ${subject.name}</button>
        <header class="article-header ${isGeo ? "geo" : ""}">
          <p class="eyebrow">${subject.name} · Capitolo ${chapterNumber(chapter)}</p>
          <h1>${chapter.title}</h1>
          <p>${chapter.subtitle}</p>
          <div class="article-meta"><span class="pill" id="block-count">${blockLabel(summarySections.length)}</span></div>
        </header>
        <div class="reading-controls">
          <div class="reading-switch" role="group" aria-label="Versione del testo">
            <button type="button" data-reading-mode="summary" aria-pressed="true" aria-controls="article-content">Sintesi veloce</button>
            <button type="button" data-reading-mode="full" aria-pressed="false" aria-controls="article-content" ${fullSections ? "" : "disabled"}>Testo completo</button>
          </div>
          <p class="reading-note" id="reading-note">${fullSections ? "Puoi passare dalla sintesi al testo completo in qualsiasi momento." : "Il testo completo non è ancora disponibile su questo dispositivo."}</p>
        </div>
        <div class="article-body" id="article-content">${articleContentMarkup(id, "summary", summarySections)}</div>
        <div class="article-actions" aria-label="Azioni capitolo">
          <button class="button ${isGeo ? "button-geography" : "button-history"}" type="button" data-quick-quiz="${chapter.id}">Prova ${quizCount} ${quizCount === 1 ? "domanda" : "domande"}</button>
        </div>
      </article>`;

    target.querySelectorAll("[data-reading-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        const mode = button.dataset.readingMode;
        const sections = mode === "full" && fullSections ? fullSections : summarySections;
        target.querySelectorAll("[data-reading-mode]").forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        target.querySelector("#article-content").innerHTML = articleContentMarkup(id, mode, sections);
        target.querySelector("#block-count").textContent = blockLabel(sections.length);
        target.querySelector("#reading-note").textContent = mode === "full"
          ? "Versione completa: tutti i dettagli rielaborati dal materiale di studio."
          : "Sintesi veloce: i concetti essenziali per ripassare più rapidamente.";
      });
    });
    target.querySelector("#article-content").addEventListener("click", (event) => {
      const link = event.target.closest("[data-scroll-target]");
      if (!link) return;
      const section = document.getElementById(link.dataset.scrollTarget);
      if (!section) return;
      section.scrollIntoView?.({ behavior: "smooth", block: "start" });
      const heading = section.querySelector("h2");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    });
    bindQuickQuiz(target);
    focusHeading(target);
  }

  function modeLabel(mode) {
    return {
      training: "Prova standard",
      challenge: "La scalata",
      written: "Simulazione scritta",
      oral: "Interrogazione orale"
    }[mode] || "Prova";
  }

  function difficultyLabel(difficulty) {
    return { easy: "Facile", hard: "Difficile", mixed: "Mista" }[difficulty] || "Mista";
  }

  function sessionChapterLabel(session) {
    const subject = subjectData(session.subject);
    if (session.chapters.length === subject.chapters.length) return "Tutto il programma";
    if (session.chapters.length === 1) {
      return subject.chapters.find((chapter) => chapter.id === session.chapters[0])?.title || "1 capitolo";
    }
    return `${session.chapters.length} capitoli`;
  }

  function formatSessionDate(value) {
    return new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(value));
  }

  function mistakeHistoryMarkup(sessions) {
    const withMistakes = sessions.filter((session) => session.mistakes?.length);
    if (!withMistakes.length) {
      return `<article class="empty-history"><h2>Nessuna risposta da rivedere</h2><p>Gli errori delle nuove prove concluse compariranno qui, insieme alla spiegazione.</p></article>`;
    }
    return withMistakes.map((session, sessionIndex) => {
      const subject = subjectData(session.subject);
      const isGeo = session.subject === "geography";
      const items = session.mistakes.map(([questionId, selected]) => {
        const found = findQuestion(questionId);
        if (!found || found.subjectId !== session.subject) return "";
        const { question } = found;
        const chapterInfo = findChapter(question.chapter);
        if (!chapterInfo) return "";
        const level = questionDifficulty(question, session.subject);
        const selectedText = selected === -1 ? "Nessuna risposta" : question.options[selected];
        return `
          <article class="mistake-card ${isGeo ? "geography" : "history"}">
            <div class="mistake-card-meta">
              <span>${subject.name} · Capitolo ${chapterNumber(chapterInfo.chapter)} · ${chapterInfo.chapter.title}</span>
              <span class="difficulty-badge ${level}">${difficultyLabel(level)}</span>
            </div>
            <h3>${question.prompt}</h3>
            <dl class="answer-comparison">
              <div><dt>Risposta data</dt><dd>${selectedText}</dd></div>
              <div><dt>Risposta corretta</dt><dd>${question.options[question.answer]}</dd></div>
            </dl>
            <p class="mistake-explanation">${question.explanation}</p>
          </article>`;
      }).join("");
      return `
        <details class="mistake-session" ${sessionIndex === 0 ? "open" : ""}>
          <summary>
            <span><strong>${subject.name} · ${modeLabel(session.mode)}</strong><small>${formatSessionDate(session.completedAt)} · ${session.score}%</small></span>
            <span class="mistake-count">${session.mistakes.length} ${session.mistakes.length === 1 ? "errore" : "errori"}</span>
          </summary>
          <div class="mistake-list">${items}</div>
        </details>`;
    }).join("");
  }

  function renderQuizHistory(activeTab = "sessions", focusTab = false) {
    const target = document.getElementById("view-quiz");
    target.className = "view";
    const sessions = stats.sessions || [];
    const historyMarkup = sessions.length ? sessions.map((session) => {
      const subject = subjectData(session.subject);
      const isGeo = session.subject === "geography";
      return `
        <article class="session-row ${isGeo ? "geography" : "history"}">
          <div class="session-score" aria-label="Punteggio ${session.score} per cento">${session.score}%</div>
          <div class="session-main">
            <p class="eyebrow ${isGeo ? "geo" : ""}">${subject.name} · ${difficultyLabel(session.difficulty)}</p>
            <h2>${modeLabel(session.mode)}</h2>
            <p class="session-meta">${session.total} ${session.mode === "oral" ? "tracce" : "domande"} · ${sessionChapterLabel(session)}</p>
            <time datetime="${escapeAttribute(session.completedAt)}">${formatSessionDate(session.completedAt)}</time>
          </div>
          <button class="button button-quiet session-replay" type="button" data-replay-session="${escapeAttribute(session.id)}">Rigioca</button>
        </article>`;
    }).join("") : `
      <article class="empty-history">
        <h2>Qui appariranno le tue prove</h2>
        <p>Completa un test per ritrovare punteggio, materia e capitoli scelti.</p>
        <button class="button button-primary" type="button" data-route="setup">Crea la prima prova</button>
      </article>`;
    const showingMistakes = activeTab === "mistakes";
    target.innerHTML = `
      <div class="history-heading">
        <div><p class="eyebrow">Cronologia</p><h1>Quiz</h1></div>
        <div class="button-row">
          <button class="button button-quiet" type="button" data-route="quiz-modes">Modalità speciali</button>
          ${sessions.length ? `<button class="button button-primary" type="button" data-route="setup">Nuova prova</button>` : ""}
        </div>
      </div>
      <div class="quiz-history-tabs" role="tablist" aria-label="Contenuto della cronologia quiz">
        <button id="history-tab-sessions" type="button" role="tab" aria-selected="${!showingMistakes}" aria-controls="quiz-history-panel" tabindex="${showingMistakes ? "-1" : "0"}" data-history-tab="sessions">Prove svolte</button>
        <button id="history-tab-mistakes" type="button" role="tab" aria-selected="${showingMistakes}" aria-controls="quiz-history-panel" tabindex="${showingMistakes ? "0" : "-1"}" data-history-tab="mistakes">Risposte da rivedere</button>
      </div>
      <section id="quiz-history-panel" class="quiz-history-panel" role="tabpanel" aria-labelledby="history-tab-${showingMistakes ? "mistakes" : "sessions"}">
        <p class="lede">${showingMistakes ? "Riapri una prova per capire l’errore e fissare la risposta corretta." : `Le ultime ${MAX_SESSIONS} prove completate restano soltanto su questo dispositivo.`}</p>
        <div class="${showingMistakes ? "mistake-sessions" : "session-list"}">${showingMistakes ? mistakeHistoryMarkup(sessions) : historyMarkup}</div>
      </section>`;
    target.querySelectorAll("[data-replay-session]").forEach((button) => {
      button.addEventListener("click", () => replaySession(button.dataset.replaySession));
    });
    target.querySelectorAll("[data-history-tab]").forEach((button) => {
      button.addEventListener("click", () => renderQuizHistory(button.dataset.historyTab, true));
      button.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        renderQuizHistory(button.dataset.historyTab === "sessions" ? "mistakes" : "sessions", true);
      });
    });
    if (focusTab) target.querySelector(`[data-history-tab="${activeTab}"]`)?.focus({ preventScroll: true });
    else focusHeading(target);
  }

  function replaySession(id) {
    const stored = stats.sessions.find((session) => session.id === id);
    if (!stored) {
      showToast("Questa prova non è più disponibile");
      return;
    }
    setSubject(stored.subject);
    const next = createQuizSession({
      subjectId: stored.subject,
      chapters: stored.chapters,
      difficulty: stored.difficulty,
      count: stored.total,
      mode: stored.mode,
      label: "Rigioca"
    });
    if (!next) {
      showToast("Non ci sono più abbastanza domande per rigiocare questa prova");
      navigate("setup");
      return;
    }
    quizSession = next;
    navigate("quiz");
  }

  function renderQuizSetup() {
    const target = document.getElementById("view-quiz");
    const subject = subjectData();
    const isGeo = activeSubject === "geography";
    const presetIds = quizPreset?.subject === activeSubject ? quizPreset.chapters : [];
    const presetMode = quizPreset?.mode || "training";
    const presetCount = quizPreset?.count || 5;
    const countOptions = [...new Set([presetCount, 5, 10, 20])].sort((a, b) => a - b);
    quizPreset = null;
    target.className = `view ${isGeo ? "geo-theme" : ""}`;
    target.innerHTML = `
      <div class="setup-panel">
        <p class="eyebrow ${isGeo ? "geo" : ""}">Mettiti alla prova</p>
        <h1>Prepara il quiz</h1>
        <p class="lede">Scegli materia, capitoli e modalità. Per ricordare meglio, gli errori torneranno nei ripassi successivi.</p>
        ${subjectSwitch()}

        <form id="quiz-form">
          <fieldset class="form-section">
            <legend>1. Modalità</legend>
            <div class="mode-grid">
              ${[
                ["training", "Allenamento", "Correzione e spiegazione dopo ogni risposta."],
                ["challenge", "La scalata", "Tre vite, aiuto 50/50 e una possibilità di passare."],
                ["written", "Simulazione scritta", "Nessun suggerimento: risultati soltanto alla fine."],
                ["oral", "Interrogazione orale", "Parla a voce alta, poi confrontati con una scaletta."]
              ].map(([value, title, text]) => `
                <label class="mode-option">
                  <input type="radio" name="mode" value="${value}" ${presetMode === value ? "checked" : ""}>
                  <span><strong>${title}</strong><small>${text}</small></span>
                </label>`).join("")}
            </div>
          </fieldset>

          <fieldset class="form-section">
            <legend>2. Capitoli di ${subject.name}</legend>
            <div class="select-actions">
              <button class="text-button" type="button" id="select-all">Seleziona tutti</button>
              <button class="text-button" type="button" id="select-none">Nessuno</button>
            </div>
            <div class="chapter-check-grid">
              ${subject.chapters.map((chapter) => `
                <label class="chapter-check">
                  <input type="checkbox" name="chapters" value="${chapter.id}" ${presetIds.includes(chapter.id) ? "checked" : ""}>
                  <span>${chapterNumber(chapter)}. ${chapter.title}</span>
                </label>`).join("")}
            </div>
          </fieldset>

          <div class="form-section">
            <label for="question-count">3. Numero di domande</label>
            <select id="question-count" class="card" name="count">
              ${countOptions.map((count) => `<option value="${count}" ${presetCount === count ? "selected" : ""}>${count} ${presetMode === "oral" ? "tracce" : "domande"}</option>`).join("")}
            </select>
          </div>

          <div class="form-section">
            <button class="button button-primary" type="submit">Comincia</button>
          </div>
        </form>
      </div>`;

    bindSubjectSwitch(target, () => {
      quizSession = null;
      renderQuizSetup();
    });
    const checks = [...target.querySelectorAll('input[name="chapters"]')];
    const updateCountLabels = () => {
      const noun = target.querySelector('input[name="mode"]:checked')?.value === "oral" ? "tracce" : "domande";
      target.querySelectorAll("#question-count option").forEach((option) => {
        option.textContent = `${option.value} ${noun}`;
      });
    };
    target.querySelectorAll('input[name="mode"]').forEach((input) => input.addEventListener("change", updateCountLabels));
    target.querySelector("#select-all").addEventListener("click", () => checks.forEach((check) => { check.checked = true; }));
    target.querySelector("#select-none").addEventListener("click", () => checks.forEach((check) => { check.checked = false; }));
    target.querySelector("#quiz-form").addEventListener("submit", startQuiz);
    focusHeading(target);
  }

  function startQuiz(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mode = formData.get("mode");
    const selectedChapters = formData.getAll("chapters");
    const requestedCount = Number(formData.get("count"));
    if (!selectedChapters.length) {
      showToast("Scegli almeno un capitolo");
      return;
    }
    const subject = subjectData();
    const source = mode === "oral" ? subject.oral : subject.questions;
    const dueIds = Object.entries(stats.errors)
      .filter(([, value]) => new Date(value.due).getTime() <= Date.now())
      .map(([id]) => id);
    const pool = source.filter((item) => selectedChapters.includes(item.chapter));
    const ordered = mode === "oral"
      ? shuffle(pool)
      : [...shuffle(pool.filter((item) => dueIds.includes(item.id))), ...shuffle(pool.filter((item) => !dueIds.includes(item.id)))];
    const count = Math.min(requestedCount, ordered.length);
    if (count < requestedCount) showToast(`In questi capitoli ci sono ${count} prove disponibili`);
    quizSession = {
      subject: activeSubject,
      chapters: selectedChapters,
      difficulty: "mixed",
      mode,
      requestedCount: count,
      items: ordered.slice(0, count),
      index: 0,
      correct: 0,
      lives: 3,
      help5050: true,
      pass: true,
      selected: null,
      answered: false,
      results: [],
      oralChecklist: false,
      historyRecorded: false
    };
    renderQuizPlayer();
  }

  function renderQuizPlayer() {
    const target = document.getElementById("view-quiz");
    const session = quizSession;
    if (!session || !session.items.length) {
      quizSession = null;
      renderQuizHistory();
      return;
    }
    if (session.index >= session.items.length || (session.mode === "challenge" && session.lives <= 0)) {
      renderQuizResult();
      return;
    }
    const item = session.items[session.index];
    const found = findChapter(item.chapter);
    const isOral = session.mode === "oral";
    const modeNames = { training: "Allenamento", challenge: "La scalata", written: "Simulazione scritta", oral: "Interrogazione orale" };
    target.className = `view quiz-shell ${session.subject === "geography" ? "geo-theme" : ""}`;
    target.innerHTML = `
      <div class="quiz-topline">
        <span><strong>${session.label || modeNames[session.mode]}</strong><br><small class="muted">${found.chapter.title}</small></span>
        ${session.mode === "challenge" ? `<span class="lives" aria-label="${session.lives} vite">${"♥".repeat(session.lives)}${"♡".repeat(3 - session.lives)}</span>` : `<span>${session.index + 1}/${session.items.length}</span>`}
      </div>
      <article class="quiz-card" style="margin-top:14px">
        <p class="eyebrow ${session.subject === "geography" ? "geo" : ""}">${isOral ? "Parla a voce alta" : `Domanda ${session.index + 1}`}</p>
        <h1>${item.prompt}</h1>
        ${isOral ? oralMarkup(item) : choiceMarkup(item)}
      </article>
      <div class="quiz-tools">
        ${session.mode === "challenge" && !session.answered ? `
          <button class="button button-quiet" type="button" id="help-5050" ${session.help5050 ? "" : "disabled"}>50/50</button>
          <button class="button button-quiet" type="button" id="help-pass" ${session.pass ? "" : "disabled"}>Passa</button>` : ""}
        <button class="button button-quiet" type="button" id="quit-quiz">Esci</button>
      </div>`;

    if (isOral) bindOralPlayer(target, item);
    else bindChoicePlayer(target, item);
    target.querySelector("#quit-quiz").addEventListener("click", () => {
      if (confirm("Vuoi interrompere questa prova?")) {
        quizSession = null;
        renderQuizHistory();
      }
    });
    const fifty = target.querySelector("#help-5050");
    if (fifty) fifty.addEventListener("click", () => useFiftyFifty(item));
    const pass = target.querySelector("#help-pass");
    if (pass) pass.addEventListener("click", () => {
      session.pass = false;
      evaluateAnswer(null, true);
    });
    focusHeading(target);
  }

  function choiceMarkup(item) {
    const letters = ["A", "B", "C", "D"];
    return `
      <div class="answer-list">
        ${item.options.map((option, index) => `
          <button class="answer-button" type="button" data-answer="${index}">
            <span class="answer-letter">${letters[index]}</span><span>${option}</span>
          </button>`).join("")}
      </div>
      ${quizSession.mode === "training" ? `<button class="text-button" type="button" id="dont-know" style="margin-top:12px">Non lo so ancora</button>` : ""}
      <div id="feedback-slot" aria-live="polite" aria-atomic="true"></div>`;
  }

  function bindChoicePlayer(target) {
    target.querySelectorAll("[data-answer]").forEach((button) => {
      button.addEventListener("click", () => {
        if (quizSession.answered) return;
        const answer = Number(button.dataset.answer);
        if (quizSession.mode === "written") {
          quizSession.selected = answer;
          target.querySelectorAll("[data-answer]").forEach((item) => item.classList.remove("selected"));
          button.classList.add("selected");
          const slot = target.querySelector("#feedback-slot");
          slot.innerHTML = `<button class="button button-primary" type="button" id="confirm-written" style="margin-top:18px">Conferma e continua</button>`;
          slot.querySelector("#confirm-written").addEventListener("click", () => evaluateAnswer(quizSession.selected));
        } else {
          evaluateAnswer(answer);
        }
      });
    });
    const dontKnow = target.querySelector("#dont-know");
    if (dontKnow) dontKnow.addEventListener("click", () => evaluateAnswer(null));
  }

  function evaluateAnswer(selected, passed = false) {
    const session = quizSession;
    if (session.answered) return;
    const item = session.items[session.index];
    const isCorrect = selected === item.answer;
    session.answered = true;
    session.selected = selected;
    if (isCorrect) session.correct += 1;
    if (!isCorrect && session.mode === "challenge" && !passed) session.lives -= 1;
    session.results.push({ id: item.id, chapter: item.chapter, selected, correct: isCorrect, passed });
    recordAnswer(item, isCorrect);

    if (session.mode === "written") {
      nextQuestion();
      return;
    }

    const target = document.getElementById("view-quiz");
    target.querySelectorAll("[data-answer]").forEach((button) => {
      const index = Number(button.dataset.answer);
      button.disabled = true;
      if (index === item.answer) button.classList.add("correct");
      else if (index === selected) button.classList.add("wrong");
    });
    const slot = target.querySelector("#feedback-slot");
    const selectedText = passed ? "Domanda passata" : selected === null ? "Nessuna risposta" : item.options[selected];
    slot.innerHTML = `
      <div class="feedback ${isCorrect ? "" : "wrong"}" tabindex="-1">
        <strong>${isCorrect ? "Risposta corretta" : selected === null ? "Da ripassare" : "Non è quella giusta"}</strong>
        <p><b>Risposta data:</b> ${selectedText}</p>
        <p><b>Risposta corretta:</b> ${item.options[item.answer]}</p>
        <p>${item.explanation}</p>
      </div>
      <button class="button button-primary" type="button" id="next-question" style="margin-top:14px">${session.index + 1 === session.items.length || session.lives <= 0 ? "Vedi il risultato" : "Continua"}</button>`;
    slot.querySelector(".feedback").focus({ preventScroll: true });
    slot.querySelector("#next-question").addEventListener("click", nextQuestion);
  }

  function recordAnswer(item, isCorrect) {
    const chapter = chapterStats(item.chapter, true);
    chapter.total += 1;
    if (isCorrect) chapter.correct += 1;
    stats.questions[item.id] ||= { correct: 0, wrong: 0 };
    stats.questions[item.id][isCorrect ? "correct" : "wrong"] += 1;
    const error = stats.errors[item.id];
    if (!isCorrect) {
      stats.errors[item.id] = { chapter: item.chapter, stage: 0, due: new Date(Date.now() + DAY).toISOString() };
    } else if (error) {
      const stages = [1, 3, 7, 14, 28];
      const nextStage = (error.stage || 0) + 1;
      if (nextStage >= stages.length) delete stats.errors[item.id];
      else stats.errors[item.id] = { ...error, stage: nextStage, due: new Date(Date.now() + stages[nextStage] * DAY).toISOString() };
    }
    saveStats();
  }

  function useFiftyFifty(item) {
    const session = quizSession;
    if (!session.help5050) return;
    session.help5050 = false;
    const wrong = shuffle(item.options.map((_, index) => index).filter((index) => index !== item.answer)).slice(0, 2);
    wrong.forEach((index) => document.querySelector(`[data-answer="${index}"]`)?.classList.add("removed"));
    document.getElementById("help-5050").disabled = true;
  }

  function nextQuestion() {
    quizSession.index += 1;
    quizSession.selected = null;
    quizSession.answered = false;
    quizSession.oralChecklist = false;
    renderQuizPlayer();
  }

  function oralMarkup(item) {
    return `
      <p class="muted">Prova a parlare per uno o due minuti senza leggere. Quando hai finito, mostra la scaletta e controlla se hai toccato i punti essenziali.</p>
      <button class="button button-primary" type="button" id="show-checklist">Mostra la scaletta</button>
      <div id="oral-slot"></div>`;
  }

  function bindOralPlayer(target, item) {
    target.querySelector("#show-checklist").addEventListener("click", (event) => {
      event.currentTarget.hidden = true;
      const slot = target.querySelector("#oral-slot");
      slot.innerHTML = `
        <ul class="oral-checklist">${item.checklist.map((point) => `<li>${point}</li>`).join("")}</ul>
        <p><strong>Come è andata?</strong></p>
        <div class="button-row">
          <button class="button button-danger" type="button" data-oral-rating="0">Da ripassare</button>
          <button class="button button-quiet" type="button" data-oral-rating="1">Quasi</button>
          <button class="button button-geography" type="button" data-oral-rating="2">Sicuro</button>
        </div>`;
      slot.querySelectorAll("[data-oral-rating]").forEach((button) => {
        button.addEventListener("click", () => recordOral(Number(button.dataset.oralRating), item));
      });
    });
  }

  function recordOral(rating, item) {
    const chapter = chapterStats(item.chapter, true);
    chapter.oralScore += rating;
    chapter.oralTotal += 1;
    saveStats();
    quizSession.results.push({ id: item.id, chapter: item.chapter, rating });
    if (rating === 2) quizSession.correct += 1;
    nextQuestion();
  }

  function recordCompletedSession(session, correct, total, score) {
    if (session.historyRecorded || total < 1) return;
    const completedAt = new Date().toISOString();
    const mistakes = session.mode === "oral" ? [] : session.results
      .filter((result) => result.correct === false && findQuestion(result.id))
      .map((result) => [result.id, Number.isInteger(result.selected) ? result.selected : -1])
      .slice(0, MAX_SESSION_MISTAKES);
    stats.sessions.unshift({
      id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      completedAt,
      subject: session.subject,
      difficulty: ["easy", "hard", "mixed"].includes(session.difficulty) ? session.difficulty : "mixed",
      score,
      correct,
      total,
      chapters: [...session.chapters],
      mode: session.mode,
      mistakes
    });
    stats.sessions = stats.sessions.slice(0, MAX_SESSIONS);
    session.historyRecorded = true;
    saveStats();
  }

  function repeatCurrentSession(session) {
    const next = createQuizSession({
      subjectId: session.subject,
      chapters: session.chapters,
      difficulty: session.difficulty || "mixed",
      count: session.requestedCount || session.items.length,
      mode: session.mode,
      label: session.label || "Riprova"
    });
    if (!next) {
      quizSession = null;
      showToast("Non ci sono abbastanza domande per ripetere questa prova");
      navigate("setup");
      return;
    }
    quizSession = next;
    renderQuizPlayer();
  }

  function renderQuizResult() {
    const session = quizSession;
    const target = document.getElementById("view-quiz");
    const isOral = session.mode === "oral";
    const total = session.results.length;
    const correct = isOral
      ? session.results.filter((item) => item.rating === 2).length
      : session.results.filter((item) => item.correct).length;
    const score = total ? Math.round((correct / total) * 100) : 0;
    recordCompletedSession(session, correct, total, score);
    const message = score >= 85 ? "Ottimo risultato." : score >= 60 ? "Buon risultato: controlla gli errori." : "Rileggi i punti più difficili e riprova.";
    target.innerHTML = `
      <div class="quiz-shell" aria-live="polite">
        <article class="quiz-card" style="text-align:center">
          <p class="eyebrow">Prova conclusa</p>
          <h1>${message}</h1>
          <div class="result-score">${score}%</div>
          <p>${correct} ${isOral ? "esposizioni sicure" : "risposte corrette"} su ${total}.</p>
          ${session.mode === "written" ? writtenReview(session) : ""}
          <div class="button-row" style="justify-content:center; margin-top:22px">
            <button class="button button-primary" type="button" id="repeat-quiz">Riprova</button>
            <button class="button button-quiet" type="button" id="show-history">Le tue prove</button>
            <button class="button button-quiet" type="button" data-route="review">Torna ai testi</button>
          </div>
        </article>
      </div>`;
    target.querySelector("#repeat-quiz").addEventListener("click", () => {
      repeatCurrentSession(session);
    });
    target.querySelector("#show-history").addEventListener("click", () => {
      quizSession = null;
      renderQuizHistory();
    });
    focusHeading(target);
  }

  function writtenReview(session) {
    return `<div class="result-list" style="text-align:left">
      ${session.results.map((result, index) => {
        const question = session.items.find((item) => item.id === result.id);
        const selectedText = result.selected === null ? "Nessuna risposta" : question.options[result.selected];
        return `<div class="result-item ${result.correct ? "" : "wrong"}">
          <strong>${index + 1}. ${result.correct ? "Corretta" : "Da rivedere"}</strong>
          <p><b>Domanda:</b> ${question.prompt}</p>
          <p><b>Risposta data:</b> ${selectedText}</p>
          <p><b>Risposta corretta:</b> ${question.options[question.answer]}</p>
          <p>${question.explanation}</p>
        </div>`;
      }).join("")}
    </div>`;
  }

  function scoreLabel(subjectId) {
    const value = scoreStats(subjectId);
    return value.total ? `${Math.round((value.correct / value.total) * 100)}%` : "—";
  }

  function chapterAdvice() {
    return Object.entries(DATA.subjects).flatMap(([subjectId, subject]) => subject.chapters.map((chapter) => {
      const value = chapterStats(chapter.id);
      const accuracy = value.total ? value.correct / value.total : 1;
      return { subjectId, subject, chapter, ...value, accuracy };
    }))
      .filter((item) => item.total > 0)
      .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
      .slice(0, 3);
  }

  function renderResults() {
    const target = document.getElementById("view-results");
    const advice = chapterAdvice();
    const adviceMarkup = advice.length ? advice.map((item) => {
      const accuracy = Math.round(item.accuracy * 100);
      const hint = accuracy < 50
        ? "Rileggi la sintesi e poi prova un quiz breve su questo capitolo."
        : accuracy < 75
          ? "Controlla i passaggi che confondi e riprova le domande."
          : "Basta un ripasso veloce degli errori per fissare meglio i concetti.";
      return `<article class="advice-row ${item.subjectId === "geography" ? "geography" : "history"}">
        <div><p class="eyebrow ${item.subjectId === "geography" ? "geo" : ""}">${item.subject.name}</p><h3>${item.chapter.title}</h3><p>${hint}</p><small class="muted">${item.correct} risposte corrette su ${item.total}</small></div>
        <button class="button button-quiet" type="button" data-open-chapter="${item.chapter.id}">Ripassa</button>
      </article>`;
    }).join("") : `<p class="empty-note">Dopo qualche quiz troverai qui i capitoli su cui conviene tornare.</p>`;

    target.innerHTML = `
      <p class="eyebrow">Statistiche sul dispositivo</p>
      <h1>Risultati</h1>
      <p class="lede">Le percentuali e i capitoli su cui conviene tornare. Non serve un account.</p>
      <div class="grid grid-3 score-grid">
        <article class="card metric-card"><strong>${scoreLabel()}</strong><span class="muted">punteggio complessivo</span></article>
        <article class="card metric-card history"><strong>${scoreLabel("history")}</strong><span class="muted">Storia</span></article>
        <article class="card metric-card geography"><strong>${scoreLabel("geography")}</strong><span class="muted">Geografia</span></article>
      </div>
      <div class="section-heading"><div><p class="eyebrow">Consigli</p><h2>Cosa ripetere</h2></div></div>
      <div class="advice-list">${adviceMarkup}</div>
      <div class="section-heading"><div><p class="eyebrow">Dati</p><h2>Salva o cancella le statistiche</h2></div></div>
      <div class="button-row">
        <button class="button button-quiet" type="button" id="export-stats">Salva una copia</button>
        <button class="button button-quiet" type="button" id="import-stats-button">Carica una copia</button>
        <input id="import-stats" type="file" accept="application/json,.json" hidden>
        <button class="button button-danger" type="button" id="reset-stats">Cancella statistiche</button>
      </div>`;
    bindOpenChapter(target);
    target.querySelector("#export-stats").addEventListener("click", exportStats);
    target.querySelector("#import-stats-button").addEventListener("click", () => target.querySelector("#import-stats").click());
    target.querySelector("#import-stats").addEventListener("change", importStats);
    target.querySelector("#reset-stats").addEventListener("click", () => {
      if (!confirm("Vuoi cancellare definitivamente tutte le statistiche salvate su questo dispositivo?")) return;
      stats = emptyStats();
      saveStats();
      renderResults();
      showToast("Statistiche cancellate");
    });
    focusHeading(target);
  }

  function exportStats() {
    const blob = new Blob([JSON.stringify(stats, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `ripasso-statistiche-${todayKey()}.json`;
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  async function importStats(event) {
    const input = event.currentTarget;
    const file = input.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const hasStatsShape = isRecord(parsed) && ["chapters", "errors", "questions"].some((key) => isRecord(parsed[key]));
      if (!hasStatsShape) throw new Error("Formato non riconosciuto");
      if (!confirm("Vuoi sostituire le statistiche attuali con quelle contenute in questa copia?")) return;
      stats = normalizeStats(parsed);
      saveStats();
      renderResults();
      showToast("Copia delle statistiche caricata");
    } catch (_error) {
      showToast("Non riesco a leggere questa copia delle statistiche");
    } finally {
      input.value = "";
    }
  }

  function startDueErrorQuiz() {
    const due = dueErrorEntries();
    if (!due.length) {
      showToast("Non ci sono errori da ripassare ora");
      return;
    }
    const subjectId = due[0].subjectId;
    const items = due.filter((item) => item.subjectId === subjectId).slice(0, 10).map((item) => item.question);
    const chapters = [...new Set(items.map((item) => item.chapter))];
    setSubject(subjectId);
    quizPreset = null;
    quizSession = {
      subject: subjectId,
      chapters,
      difficulty: "mixed",
      mode: "training",
      label: "Ripassa gli errori",
      requestedCount: items.length,
      items,
      index: 0,
      correct: 0,
      lives: 3,
      help5050: true,
      pass: true,
      selected: null,
      answered: false,
      results: [],
      oralChecklist: false,
      historyRecorded: false
    };
    navigate("quiz");
  }

  function bindSubjectSwitch(container, callback) {
    container.querySelectorAll("[data-subject]").forEach((button) => {
      button.addEventListener("click", () => {
        setSubject(button.dataset.subject);
        callback();
      });
    });
  }

  function bindOpenChapter(container) {
    container.querySelectorAll("[data-open-chapter]").forEach((button) => {
      button.addEventListener("click", () => navigate(`article/${button.dataset.openChapter}`));
    });
  }

  function bindQuickQuiz(container) {
    container.querySelectorAll("[data-quick-quiz]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.quickQuiz;
        const found = findChapter(id);
        setSubject(found.subjectId);
        const count = quickQuizCount(id);
        quizPreset = null;
        quizSession = createQuizSession({
          subjectId: found.subjectId,
          chapters: [id],
          difficulty: "mixed",
          count,
          mode: "training",
          label: "Quiz del capitolo"
        });
        if (!quizSession) {
          showToast("Il quiz di questo capitolo non è disponibile");
          return;
        }
        navigate("quiz");
      });
    });
  }

  function renderRoute() {
    const { route, parameter } = routeFromHash();
    if (route === "article") {
      showView("article");
      renderArticle(parameter);
    } else if (route === "review") {
      showView("review");
      renderReview();
    } else if (route === "quiz") {
      showView("quiz");
      if (quizSession) renderQuizPlayer();
      else renderQuizHistory();
    } else if (route === "quiz-modes") {
      quizSession = null;
      showView("quiz");
      renderQuizSetup();
    } else if (route === "setup") {
      showView("home");
      renderHomeSetup();
    } else if (route === "results") {
      showView("results");
      renderResults();
    } else {
      showView("home");
      renderHome();
    }
  }

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (!routeButton) return;
    event.preventDefault();
    if (quizSession?.historyRecorded && routeButton.dataset.route) quizSession = null;
    navigate(routeButton.dataset.route);
  });

  document.querySelector(".skip-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("main-content")?.focus({ preventScroll: false });
  });

  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    document.getElementById("install-button").hidden = false;
  });
  document.getElementById("install-button").addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    document.getElementById("install-button").hidden = true;
  });

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
  }

  if (!location.hash) history.replaceState(null, "", "#home");
  renderRoute();
})();
