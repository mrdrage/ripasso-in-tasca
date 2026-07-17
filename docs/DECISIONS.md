# Decisioni progettuali

## Applicazione statica senza build

**Scelta:** HTML, CSS e JavaScript nativi, senza dipendenze runtime.

**Motivo:** ridurre dimensioni, superficie di guasto e costo di manutenzione. **Conseguenza:** ordine degli script e globali `window.*` sono contratti espliciti; la modularità è affidata alla documentazione.

## Local-first senza account

**Scelta:** statistiche in `localStorage`, con import/export JSON.

**Motivo:** privacy, offline e assenza di infrastruttura. **Conseguenza:** nessuna sincronizzazione automatica; la continuità dipende dal dispositivo o dal backup manuale.

## Home orientata all'azione

**Scelta:** invito diretto alla prova; configurazione successiva di 10/20/30 domande, difficoltà, materia e capitoli.

**Motivo:** ridurre il carico iniziale mantenendo controllo. **Conseguenza:** opzioni avanzate restano nella sezione delle modalità speciali.

## Risultati, non avanzamento temporale

**Scelta:** niente timer o tracciamento lineare del progresso; percentuali, errori e consigli derivano dalle risposte.

**Motivo:** favorire comprensione e ripetizione senza pressione artificiale. **Conseguenza:** l'app non stima completamento o tempo residuo.

## Difficoltà esplicita esterna alla domanda

**Scelta:** `question-difficulty.js` associa ogni ID a `easy` o `hard`.

**Motivo:** separare revisione pedagogica e testo delle domande. **Conseguenza:** ogni aggiunta richiede due file e l'audit impedisce classificazioni mancanti.

## Banchi dati separati

**Scelta:** domande in `content.js`, `quiz-extra.js` e `quiz-double.js`, unite all'avvio.

**Motivo:** evoluzione incrementale senza riscrittura del corpus. **Conseguenza:** unicità globale degli ID e ricerca duplicati sono obbligatorie.

## Hash routing

**Scelta:** percorsi `#...` in una singola pagina.

**Motivo:** compatibilità con hosting statico e fallback offline. **Conseguenza:** non esistono URL server-side per singole viste.

## PWA cache-first

**Scelta:** precache dell'intera app shell e cache-first same-origin.

**Motivo:** esperienza affidabile dopo il primo caricamento. **Conseguenza:** `CACHE_NAME` deve avanzare a ogni modifica runtime; documentazione e strumenti restano fuori dalla cache.

## Stato locale limitato

**Scelta:** 20 sessioni e 30 errori per sessione.

**Motivo:** mantenere spazio e rendering prevedibili su dispositivi limitati. **Conseguenza:** le sessioni più vecchie vengono eliminate automaticamente.

## Materiali sorgente esclusi

**Scelta:** repository composto da rielaborazioni pubblicabili, codice e documentazione operativa.

**Motivo:** separare produzione editoriale e distribuzione. **Conseguenza:** aggiornamenti futuri devono gestire acquisizione e OCR in un'area esterna non versionata.
