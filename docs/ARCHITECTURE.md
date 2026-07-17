# Architettura

## Quadro generale

Ripasso in Tasca è un'applicazione statica eseguita interamente nel browser. Non esistono API applicative, database remoti, autenticazione, package manager o fase di compilazione. Il server pubblica file immutabili; browser, Service Worker e `localStorage` forniscono esecuzione, offline e persistenza.

```text
GitHub Pages
  └─ file statici
       ├─ HTML/CSS/icone/manifest
       ├─ dati editoriali e banchi di domande
       ├─ app.js
       └─ sw.js
            ↓
Browser
  ├─ window.*: dati caricati in memoria
  ├─ hash routing: viste applicative
  ├─ Cache Storage: app shell offline
  └─ localStorage: statistiche del dispositivo
```

## File applicativi

| File | Responsabilità |
| --- | --- |
| `index.html` | shell HTML, viste vuote, navigazione, ordine degli script |
| `styles.css` | design system, layout responsive, stati dei quiz e accessibilità visiva |
| `content.js` | capitoli, sintesi, domande base e tracce orali in `window.STUDY_DATA` |
| `quiz-extra.js` | banco supplementare in `window.EXTRA_QUESTIONS` |
| `quiz-double.js` | secondo banco supplementare in `window.DOUBLE_QUESTIONS` |
| `history-full.js` | testi completi di Storia in `window.FULL_TEXTS` |
| `geography-full.js` | testi completi di Geografia, aggiunti a `window.FULL_TEXTS` |
| `question-difficulty.js` | mappa ID → `easy`/`hard` in `window.QUESTION_DIFFICULTY` |
| `app.js` | merge, routing, rendering, quiz, statistiche, import/export e installazione |
| `manifest.webmanifest` | metadati di installazione PWA |
| `sw.js` | precache, aggiornamento cache e fallback offline |
| `assets/` | icone SVG e PNG richieste dal manifest |

## Sequenza di caricamento

Gli script classici sono eseguiti in fondo a `index.html` nel seguente ordine:

```text
content.js
quiz-extra.js
quiz-double.js
history-full.js
geography-full.js
question-difficulty.js
app.js
```

`app.js` si aspetta che `window.STUDY_DATA` esista già. All'avvio, `mergeQuestionBanks()` unisce in memoria i banchi `EXTRA_QUESTIONS` e `DOUBLE_QUESTIONS` agli array `STUDY_DATA.subjects.*.questions`. Il merge accetta soltanto record strutturalmente validi, con capitolo appartenente alla materia e ID non già presente.

`history-full.js` inizializza o estende `window.FULL_TEXTS`; `geography-full.js` usa lo stesso contratto e preserva le chiavi già caricate. `question-difficulty.js` deve precedere la creazione di qualsiasi pool filtrato.

## Modello dei contenuti

Struttura top-level semplificata:

```js
window.STUDY_DATA = {
  subjects: {
    history: Subject,
    geography: Subject
  }
};
```

Schema di `Subject`:

```js
{
  id: "history" | "geography",
  name: string,
  short: string,
  description: string,
  chapters: Chapter[],
  questions: Question[],
  oral: OralPrompt[]
}
```

Schema di `Chapter`:

```js
{
  id: string,              // h1-h8 oppure g0-g12
  number: number,
  displayNumber?: number,
  title: string,
  subtitle: string,
  minutes: number,
  sections: Section[]
}
```

Schema di `Section` nella sintesi:

```js
{
  title: string,
  paragraphs: string[],
  key?: string
}
```

Schema di `Question`:

```js
{
  id: string,
  chapter: string,
  type: "choice",
  prompt: string,
  options: string[],
  answer: number,          // indice zero-based in options
  explanation: string
}
```

La difficoltà non è memorizzata nel record della domanda: è un'associazione esplicita in `window.QUESTION_DIFFICULTY`. `app.js` include un fallback deterministico per robustezza, ma l'audit richiede che ogni domanda pubblicata abbia una voce `easy` o `hard` nella mappa.

Schema di `OralPrompt`:

```js
{
  id: string,
  chapter: string,
  prompt: string,
  checklist: string[]
}
```

Schema dei testi completi:

```js
window.FULL_TEXTS = {
  h1: { sections: [{ title: string, paragraphs: string[] }] },
  // ...una chiave per ogni capitolo
};
```

## Routing e rendering

L'app usa `location.hash` e non richiede riscritture server. `routeFromHash()` separa percorso e parametro; `renderRoute()` seleziona la vista.

| Hash | Vista |
| --- | --- |
| `#home` | home immersiva |
| `#setup` | configurazione rapida 10/20/30 |
| `#review` | elenco capitoli e cambio materia |
| `#article/<chapterId>` | sintesi o testo completo del capitolo |
| `#quiz` | cronologia oppure sessione attiva |
| `#quiz-modes` | configurazione delle modalità speciali |
| `#results` | percentuali, consigli e gestione dati |

Le sezioni `.view` sono presenti in `index.html` e riempite con template string. Gli handler vengono associati dopo ogni render. `quizSession`, `quizPreset` e `activeSubject` sono stato effimero in memoria e non sopravvivono a un reload.

## Motore dei quiz

`uniqueQuestionPool()` filtra per materia, capitoli e difficoltà e deduplica per ID. `createQuizSession()`:

1. normalizza capitoli e numero richiesto;
2. sceglie domande o tracce orali;
3. rifiuta combinazioni senza elementi sufficienti;
4. porta in testa gli errori la cui revisione è dovuta;
5. mescola il pool e crea lo stato della sessione.

Le modalità supportate sono:

- `training`: feedback immediato e opzione “Non lo so ancora”;
- `challenge`: tre vite, un aiuto 50/50 e una domanda passabile;
- `written`: feedback differito al riepilogo;
- `oral`: traccia, checklist e autovalutazione 0/1/2.

Gli errori seguono un richiamo dilazionato. Una risposta errata crea `stage: 0` con scadenza dopo un giorno. Risposte corrette successive avanzano sugli intervalli 3, 7, 14 e 28 giorni; al completamento la voce viene rimossa.

## Persistenza

Chiave corrente:

```text
ripasso-in-tasca-stats-v4
```

Chiavi migrate e rimosse dopo il salvataggio:

```text
ripasso-in-tasca-stats-v3
ripasso-in-tasca-stats-v2
ripasso-in-tasca-progress-v1
```

La chiave obsoleta `ripasso-in-tasca-subject` viene eliminata all'avvio.

Schema normalizzato:

```js
{
  chapters: {
    [chapterId]: {
      correct: number,
      total: number,
      oralScore: number,
      oralTotal: number
    }
  },
  errors: {
    [questionId]: {
      chapter: string,
      stage: 0 | 1 | 2 | 3 | 4,
      due: string           // ISO 8601
    }
  },
  questions: {
    [questionId]: { correct: number, wrong: number }
  },
  sessions: [{
    id: string,
    completedAt: string,   // ISO 8601
    subject: "history" | "geography",
    difficulty: "easy" | "hard" | "mixed",
    score: number,
    correct: number,
    total: number,
    chapters: string[],
    mode: "training" | "challenge" | "written" | "oral",
    mistakes: [[questionId, selectedOptionIndex]]
  }]
}
```

`normalizeStats()` valida e limita ogni dato letto o importato. `MAX_SESSIONS` è 20; `MAX_SESSION_MISTAKES` è 30. L'indice `-1` in una risposta errata rappresenta una mancata selezione.

## Service Worker

`CACHE_NAME` è `ripasso-in-tasca-v10`. `APP_SHELL` contiene 14 URL essenziali, inclusa la root `./`. Durante `install` tutti gli asset vengono precaricati; `activate` elimina le cache con nome diverso e acquisisce i client; `fetch` applica cache-first alle richieste GET same-origin e memorizza risposte valide non ancora presenti. Se una navigazione fallisce offline, viene restituito `./index.html`.

Documentazione, script di audit e materiali di lavoro non appartengono all'app shell.

## Confini di sicurezza

- i file dati sono codice JavaScript affidabile distribuito con l'app;
- i JSON importati dall'interfaccia sono non affidabili e passano da `normalizeStats()`;
- nessun dato utente viene interpolato direttamente senza normalizzazione nel modello persistente;
- l'app non effettua fetch cross-origin;
- il Service Worker ignora richieste non GET e origini diverse.
