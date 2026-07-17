# Handoff per sistemi IA

## Stato operativo

Ripasso in Tasca è una PWA statica in produzione su `https://mrdrage.github.io/ripasso-in-tasca/`. Contiene 21 capitoli e 272 domande: 114 di Storia, 158 di Geografia, 130 `easy` e 142 `hard`. Non usa backend, account, build o dipendenze runtime.

Prima di intervenire leggere `AGENTS.md` e `docs/ARCHITECTURE.md`. Per contenuti usare anche `docs/CONTENT_WORKFLOW.md` e `docs/QUESTION_GUIDELINES.md`; per il deploy usare `docs/RELEASE.md`.

## Contratti da preservare

- ordine script: `content.js`, `quiz-extra.js`, `quiz-double.js`, `history-full.js`, `geography-full.js`, `question-difficulty.js`, `app.js`;
- globali: `STUDY_DATA`, `EXTRA_QUESTIONS`, `DOUBLE_QUESTIONS`, `FULL_TEXTS`, `QUESTION_DIFFICULTY` sotto `window`;
- ID capitoli: `h1`-`h8`, `g0`-`g12`;
- chiave storage: `ripasso-in-tasca-stats-v4`;
- limiti: 20 sessioni, 30 errori per sessione;
- cache corrente: `ripasso-in-tasca-v10`;
- minimo cinque domande per difficoltà per capitolo;
- nessun materiale sorgente nel repository.

Gli ID sono persistenti: rinominarli rompe statistiche, errori e cronologia. `normalizeStats()` è il confine di validazione per dati locali/importati. Il fallback automatico della difficoltà non sostituisce la voce esplicita nella mappa.

## Sequenza sicura di modifica

1. Leggere il file responsabile e i contratti collegati.
2. Applicare una modifica minima senza riorganizzazioni collaterali.
3. Per contenuti, verificare ogni affermazione contro i testi distribuiti.
4. Eseguire `node scripts/audit-content.mjs` e `git diff --check`.
5. Verificare mobile, flusso quiz, persistenza e offline in proporzione al rischio.
6. Incrementare `CACHE_NAME` quando cambia un asset runtime.
7. Aggiornare documentazione e valori attesi nello stesso commit se cambia il contratto.

## Limiti attuali

Non esistono sincronizzazione tra dispositivi, telemetria, CI end-to-end o aggiornamento remoto del corpus. L'installazione dipende dal browser. Le statistiche possono essere perse cancellando i dati del sito; il backup JSON è manuale. Il repository non contiene una licenza open source.

## Definition of done

Audit superato, diff pulito, app shell completa, nessun file escluso in staging, test browser rilevanti completati, cache aggiornata e riepilogo con file, motivazioni, verifiche e limiti manuali.
