# Flusso editoriale dei contenuti

## Obiettivo

Il flusso trasforma materiali autorizzati in contenuti brevi, navigabili e verificabili, mantenendo una separazione netta tra acquisizione locale e repository pubblico. Le domande devono poter essere risolte esclusivamente con i testi disponibili nell'app.

## Principi

- fedeltà concettuale prima della quantità;
- rielaborazione originale, non copia estesa della fonte;
- struttura coerente tra indice, sintesi, testo completo e domande;
- tracciabilità interna tramite ID stabili di materia, capitolo e domanda;
- nessun materiale sorgente o output grezzo nel repository;
- controllo umano per ambiguità, cronologie, relazioni causali e terminologia.

## Pipeline operativa

### 1. Definizione del perimetro

Costruire una tabella di lavoro esterna al repository con materia, ordine, titolo e copertura prevista dei capitoli. Assegnare subito gli ID stabili:

- Storia: `h1`-`h8`;
- Geografia: `g0`-`g12`.

Se un aggiornamento richiede un nuovo capitolo, aggiungere un ID senza rinumerare quelli pubblicati. Un ID è anche una chiave persistente delle statistiche.

### 2. Acquisizione locale

PDF, fotografie e scansioni restano in un'area di lavoro non versionata. Se necessario, produrre OCR o trascrizioni preliminari fuori dal repository. L'OCR è soltanto una bozza: errori su nomi, numeri, accenti e impaginazione devono essere corretti confrontando la fonte.

`.gitignore` esclude le principali estensioni e directory di acquisizione, ma la verifica finale deve controllare esplicitamente i file in staging.

### 3. Normalizzazione editoriale

Per ogni capitolo:

1. individuare concetti, definizioni, sequenze, cause, conseguenze e confronti;
2. eliminare ridondanze e riferimenti che dipendono dalla pagina originale;
3. riscrivere in italiano autonomo e leggibile;
4. conservare nomi, relazioni e valori necessari alla comprensione;
5. distinguere fatti dal collegamento interpretativo;
6. verificare coerenza con i capitoli contigui.

Non introdurre conoscenze esterne per “completare” una spiegazione. Un'aggiunta è ammessa soltanto se entra anche nel corpus dell'app ed è stata verificata nel perimetro editoriale autorizzato.

### 4. Strutturazione della sintesi

Aggiornare il capitolo in `content.js`:

- `title` e `subtitle` devono descrivere il perimetro;
- `minutes` è una stima orientativa, non una misura di avanzamento;
- ogni `section` deve avere titolo e paragrafi autosufficienti;
- `key`, se presente, sintetizza un'idea centrale senza aggiungere fatti.

La sintesi deve permettere un ripasso rapido e fornire abbastanza contesto per le domande essenziali.

### 5. Produzione del testo completo

Aggiornare `history-full.js` oppure `geography-full.js`. La chiave deve coincidere con l'ID del capitolo e contenere almeno una sezione con paragrafi non vuoti.

Il testo completo deve:

- coprire tutti gli argomenti inclusi nelle domande;
- usare intestazioni utili alla scansione su smartphone;
- spiegare nessi causali e termini, non soltanto elencarli;
- evitare riferimenti a file, pagine o immagini non distribuite.

### 6. Costruzione delle domande

Seguire `docs/QUESTION_GUIDELINES.md`. Ogni domanda deve avere un solo capitolo, una sola risposta corretta, distrattori plausibili e spiegazione autosufficiente. Inserire l'ID in `question-difficulty.js`.

Prima di aumentare la quantità, controllare sovrapposizioni semantiche con tutti e tre i banchi:

- `content.js`;
- `quiz-extra.js`;
- `quiz-double.js`.

### 7. Controlli automatici

Eseguire:

```bash
node scripts/audit-content.mjs
```

L'audit verifica conteggi attesi, ID unici, capitoli validi, schema delle domande, classificazione esplicita, copertura minima e presenza dei testi completi.

### 8. Revisione editoriale manuale

Campionare almeno:

- tutte le domande nuove o modificate;
- la domanda più simile a ciascuna nuova domanda;
- ogni opzione che contiene una negazione o un valore numerico;
- ogni spiegazione che formula una causa o una conseguenza;
- almeno una domanda facile e una difficile per capitolo toccato.

Verificare domanda, risposta e spiegazione leggendo soltanto il testo dell'app. Controllare che i distrattori siano falsi nel contesto, non semplicemente meno completi.

### 9. Verifica dell'interfaccia

Avviare un server locale e aprire sintesi, testo completo e quiz dei capitoli modificati. Controllare:

- paragrafi e titoli su 320 px;
- nessun overflow orizzontale;
- opzioni leggibili senza ambiguità visiva;
- feedback corretto;
- badge di materia, capitolo e difficoltà;
- cronologia e vista degli errori dopo il completamento.

### 10. Preparazione del rilascio

Qualsiasi modifica a contenuti o domande cambia file in `APP_SHELL`: incrementare `CACHE_NAME` in `sw.js`. Eseguire la procedura completa in `docs/RELEASE.md`.

## Criteri di accettazione

Un aggiornamento editoriale è pronto quando:

- ogni affermazione è sostenuta dai testi distribuiti;
- ID e struttura superano l'audit;
- ogni capitolo conserva almeno cinque domande per difficoltà;
- non esistono duplicati sostanziali evidenti;
- i contenuti sono leggibili da smartphone;
- nessun materiale di acquisizione è tracciato da Git;
- cache e documentazione riflettono lo stato pubblicato.
