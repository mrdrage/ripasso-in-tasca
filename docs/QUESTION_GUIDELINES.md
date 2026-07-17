# Linee guida per le domande

## Contratto editoriale

Ogni domanda deve essere risolvibile usando esclusivamente la sintesi o il testo completo del capitolo associato. Non usare nozioni esterne, formulazioni a trabocchetto o dettagli presenti soltanto nei materiali sorgente non pubblicati.

## Schema obbligatorio

```js
{
  id: "dq-h1-01",
  chapter: "h1",
  type: "choice",
  prompt: "Testo della domanda",
  options: ["A", "B", "C", "D"],
  answer: 0,
  explanation: "Motivo verificabile nel testo dell'app."
}
```

- `id`: univoco e stabile nell'intero progetto;
- `chapter`: ID esistente della stessa materia;
- `type`: `choice`;
- `prompt`: completo, non dipendente dall'ordine casuale;
- `options`: almeno due opzioni non vuote; lo standard editoriale è quattro;
- `answer`: indice zero-based valido;
- `explanation`: chiarisce perché la risposta è corretta, senza limitarsi a ripeterla.

La difficoltà è obbligatoria nella mappa `window.QUESTION_DIFFICULTY` di `question-difficulty.js`.

## Difficoltà

### `easy`

Verifica richiamo e comprensione diretta: definizioni, riconoscimento di un concetto, ordine esplicitato, associazione tra soggetto e funzione. Deve restare significativa, non banale per esclusione grammaticale.

### `hard`

Richiede collegamento tra almeno due informazioni: causa-effetto, confronto, applicazione a uno scenario, scelta del metodo corretto, deduzione sostenuta dal testo. Non deve dipendere da conoscenze esterne.

Ogni capitolo deve conservare almeno cinque domande `easy` e cinque `hard`.

## Criteri di qualità

- una sola risposta inequivocabilmente corretta;
- distrattori plausibili, omogenei per forma e lunghezza;
- nessun indizio dato da grammatica, assoluti ingiustificati o opzione molto più dettagliata;
- negazioni evidenziate e usate solo se indispensabili;
- spiegazione utile anche dopo un errore;
- copertura distribuita tra sezioni, non concentrata sulle stesse definizioni;
- assenza di duplicati testuali o semantici tra i tre banchi.

Per una domanda di ragionamento, la spiegazione deve rendere esplicita la catena logica. Per date, quantità o sequenze, verificare ogni valore contro il testo pubblicato.

## ID e banchi

Lo stato corrente usa famiglie storiche di ID:

- `hq*` e `gq*`: domande base in `content.js`;
- `ex-h*` e `ex-g*`: `quiz-extra.js`;
- `dq-h*` e `dq-g*`: `quiz-double.js`.

Non riutilizzare né rinominare un ID: è referenziato in statistiche, errori e cronologia. Per nuovi elementi continuare una sequenza coerente nel banco scelto. Evitare di spostare domande esistenti solo per uniformare i prefissi.

## Revisione

Per ogni domanda nuova o modificata:

1. individuare i passaggi testuali che sostengono risposta e spiegazione;
2. provare a rendere corretto ciascun distrattore: se è possibile con un'interpretazione ragionevole, riscriverlo;
3. cercare parole chiave e concetto nei tre banchi per individuare duplicati;
4. verificare la difficoltà rispetto al processo richiesto, non alla lunghezza;
5. eseguire `node scripts/audit-content.mjs`;
6. completare il quiz nell'interfaccia e controllare il feedback.
