# Ripasso in Tasca

Applicazione web installabile per ripassare Storia e Geografia attraverso testi organizzati per capitolo, quiz configurabili e feedback sugli errori. Il progetto privilegia accesso rapido da smartphone, funzionamento offline, assenza di account e manutenzione semplice.

**Demo pubblica:** [mrdrage.github.io/ripasso-in-tasca](https://mrdrage.github.io/ripasso-in-tasca/)

## Problema e soluzione

Materiali di studio estesi sono difficili da consultare e trasformare in esercizio attivo su uno schermo piccolo. Ripasso in Tasca riunisce lettura e autovalutazione in una Progressive Web App statica: i contenuti sono consultabili in versione sintetica o completa, mentre le domande possono essere filtrate per materia, capitolo, difficoltà e durata della prova.

L'intera applicazione viene eseguita nel browser. Non sono richiesti backend, account, build step o dipendenze runtime.

## Funzioni principali

- testi di Storia e Geografia divisi per capitolo, con sintesi e versione completa;
- prove da 10, 20 o 30 domande, su tutti i capitoli o su una selezione;
- difficoltà `easy` e `hard`, assegnata esplicitamente a ogni domanda;
- modalità standard, scalata, simulazione scritta e allenamento orale;
- correzione con risposta corretta, spiegazione, materia, capitolo e difficoltà;
- cronologia locale delle prove e vista delle risposte da rivedere;
- percentuali aggregate e suggerimenti sui capitoli da ripassare;
- esportazione, importazione e cancellazione delle statistiche;
- installazione come PWA e utilizzo offline dopo il primo caricamento.

## Numeri verificati

| Indicatore | Valore |
| --- | ---: |
| Domande totali | 272 |
| Domande di Storia | 114 |
| Domande di Geografia | 158 |
| Capitoli | 21 |
| Domande facili | 130 |
| Domande difficili | 142 |
| Dipendenze runtime | 0 |
| App shell precache | circa 502 KiB |

Ogni capitolo dispone di almeno cinque domande facili e cinque difficili. I valori sono controllati da `scripts/audit-content.mjs`.

## Stack

- HTML5 semantico;
- CSS responsivo senza framework;
- JavaScript ES2020 in file classici caricati in ordine esplicito;
- Web App Manifest;
- Service Worker con cache applicativa versionata;
- `localStorage` per statistiche e cronologia;
- GitHub Pages per la pubblicazione statica.

## Avvio locale

Non è necessaria un'installazione di pacchetti.

```bash
python3 -m http.server 8000
```

Aprire `http://localhost:8000/`. L'apertura diretta di `index.html` consente una verifica parziale, ma non registra il Service Worker: per installazione e offline serve un'origine HTTP sicura oppure `localhost`.

Per verificare struttura e copertura dei contenuti:

```bash
node scripts/audit-content.mjs
```

## Architettura in breve

`index.html` carica i dati prima della logica applicativa. `content.js` espone `window.STUDY_DATA`; i due banchi supplementari espongono `window.EXTRA_QUESTIONS` e `window.DOUBLE_QUESTIONS`; i testi completi confluiscono in `window.FULL_TEXTS`; `question-difficulty.js` espone `window.QUESTION_DIFFICULTY`. Infine `app.js` valida e unisce i banchi, gestisce le viste basate su hash e salva lo stato locale.

Il Service Worker usa la cache `ripasso-in-tasca-v10`. Ogni modifica a un file dell'app shell richiede un nuovo identificatore di cache.

## Privacy e offline

Il codice applicativo non integra analytics, cookie di profilazione, autenticazione o invio di risultati a servizi remoti. Statistiche, errori e cronologia restano nel `localStorage` del browser e possono essere esportati manualmente in JSON. Il Service Worker conserva soltanto i file statici necessari all'esecuzione offline.

## Documentazione

- [Architettura](docs/ARCHITECTURE.md)
- [Flusso editoriale dei contenuti](docs/CONTENT_WORKFLOW.md)
- [Linee guida per le domande](docs/QUESTION_GUIDELINES.md)
- [Privacy e funzionamento offline](docs/PRIVACY_AND_OFFLINE.md)
- [Verifica e benchmark](docs/VERIFICATION.md)
- [Decisioni progettuali](docs/DECISIONS.md)
- [Procedura di rilascio](docs/RELEASE.md)
- [Handoff per sistemi IA](docs/AI_HANDOFF.md)
- [Istruzioni operative per agenti](AGENTS.md)

## Limiti noti

- lo stato non viene sincronizzato tra dispositivi;
- la disinstallazione, la cancellazione dei dati del sito o alcune politiche del browser possono rimuovere le statistiche locali;
- i contenuti si aggiornano soltanto con una nuova pubblicazione;
- l'installazione PWA dipende dalle capacità del browser e del sistema operativo;
- il progetto non dispone di test end-to-end automatizzati in CI;
- non è presente una licenza open source: il repository pubblico non concede automaticamente diritti di riuso o redistribuzione.
