# Istruzioni operative per agenti

## Scopo

Questo repository contiene una Progressive Web App statica, mobile-first e offline-first per il ripasso di Storia e Geografia. Ogni intervento deve preservare accuratezza editoriale, leggerezza, privacy locale e funzionamento senza build.

Leggere prima `README.md`, `docs/AI_HANDOFF.md` e `docs/ARCHITECTURE.md`. Per modifiche ai contenuti leggere anche `docs/CONTENT_WORKFLOW.md` e `docs/QUESTION_GUIDELINES.md`; per pubblicazioni leggere `docs/RELEASE.md`.

## Stato di riferimento

- 21 capitoli: 8 di Storia (`h1`-`h8`) e 13 di Geografia (`g0`-`g12`);
- 272 domande: 114 di Storia e 158 di Geografia;
- 130 domande `easy` e 142 `hard`;
- almeno 5 domande per ogni difficoltà in ogni capitolo;
- 0 dipendenze runtime;
- cache Service Worker corrente: `ripasso-in-tasca-v10`;
- chiave dati corrente: `ripasso-in-tasca-stats-v4`;
- massimo 20 sessioni conservate e 30 errori per sessione.

Questi numeri sono invarianti intenzionali finché una modifica di prodotto non ne autorizza esplicitamente l'aggiornamento. Se cambiano, aggiornare audit e documentazione nello stesso commit.

## Vincoli non negoziabili

1. Non introdurre informazioni nelle domande che non siano sostenute dai testi presenti nell'app.
2. Non committare PDF, fotografie, scansioni, trascrizioni OCR grezze, output temporanei o materiali sorgente.
3. Non aggiungere analytics, account, chiamate di rete, font remoti o dipendenze runtime senza una decisione progettuale esplicita.
4. Non rinominare ID di capitoli o domande già pubblicati senza una migrazione dello stato locale.
5. Non modificare la chiave `ripasso-in-tasca-stats-v4` senza aggiornare `LEGACY_STORAGE_KEYS` e la normalizzazione in `app.js`.
6. Quando cambia un file elencato in `APP_SHELL`, incrementare sempre `CACHE_NAME` in `sw.js` con una versione monotona.
7. Non aggiungere `docs/`, `scripts/`, README o file di sviluppo ad `APP_SHELL`.
8. Non aggiungere una licenza senza una scelta esplicita del proprietario.
9. Conservare la navigazione da tastiera, gli stati ARIA, la riduzione delle animazioni e il layout senza overflow a 320 px.
10. Usare modifiche testuali leggibili e mirate; evitare build artefatti e minificazione nel repository sorgente.

## Ordine degli script

L'ordine in `index.html` è una dipendenza architetturale:

1. `content.js` → `window.STUDY_DATA`;
2. `quiz-extra.js` → `window.EXTRA_QUESTIONS`;
3. `quiz-double.js` → `window.DOUBLE_QUESTIONS`;
4. `history-full.js` → `window.FULL_TEXTS` per `h1`-`h8`;
5. `geography-full.js` → estensione di `window.FULL_TEXTS` per `g0`-`g12`;
6. `question-difficulty.js` → `window.QUESTION_DIFFICULTY`;
7. `app.js` → merge, rendering, quiz e persistenza.

Non usare `defer`, moduli ES o un bundler senza riprogettare e verificare questa sequenza.

## Procedura per modificare contenuti

1. Identificare materia e capitolo tramite gli ID esistenti.
2. Aggiornare la sintesi in `content.js` e, quando necessario, il testo completo in `history-full.js` o `geography-full.js`.
3. Aggiungere o correggere domande in un solo banco; evitare ID duplicati e parafrasi sostanzialmente identiche.
4. Assegnare ogni ID a `easy` o `hard` in `question-difficulty.js`.
5. Controllare che risposta e spiegazione siano ricavabili dal testo disponibile.
6. Eseguire `node scripts/audit-content.mjs`.
7. Incrementare `CACHE_NAME`, perché i dati didattici fanno parte dell'app shell.

Non spostare domande tra i tre banchi solo per uniformità: gli ID persistono nelle statistiche e una riorganizzazione priva di valore aumenta il rischio.

## Procedura per modificare interfaccia o logica

1. Individuare la vista e il percorso hash interessati in `app.js`.
2. Preservare i contratti dati documentati in `docs/ARCHITECTURE.md`.
3. Verificare almeno 320, 360, 412, 430 e 1440 px senza overflow orizzontale.
4. Completare una prova standard, controllare la correzione, la cronologia, gli errori e il replay.
5. Verificare importazione/esportazione JSON se cambia la persistenza.
6. Incrementare `CACHE_NAME` se cambia un asset precache.

## Verifiche obbligatorie

```bash
node scripts/audit-content.mjs
git diff --check
```

Controllare inoltre che ogni voce di `APP_SHELL` esista, avviare un server locale e verificare online/offline secondo `docs/VERIFICATION.md`. Non dichiarare superati test non eseguiti.

## Persistenza e compatibilità

`normalizeStats()` è il confine di fiducia per i JSON locali e importati. Qualsiasi nuovo campo deve avere default, limiti, validazione e comportamento con dati precedenti. La cronologia resta limitata da `MAX_SESSIONS = 20`; ogni elenco `mistakes` da `MAX_SESSION_MISTAKES = 30`.

Gli ID di domanda sono riferimenti persistenti in `stats.questions`, `stats.errors` e `stats.sessions[].mistakes`. Gli ID di capitolo sono riferimenti persistenti in statistiche, errori e sessioni.

## Completamento di un intervento

Nel riepilogo finale indicare:

- file modificati;
- motivazione delle scelte non meccaniche;
- comandi di verifica eseguiti e relativo esito;
- eventuali limiti o verifiche rimaste manuali;
- eventuale nuovo identificatore di cache.
