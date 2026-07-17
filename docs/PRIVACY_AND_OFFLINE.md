# Privacy e funzionamento offline

## Modello local-first

L'app non richiede account e non contiene analytics, tracker, cookie di profilazione o chiamate applicative verso servizi remoti. Il codice salva nel browser soltanto risultati necessari alle funzioni visibili.

Il gestore dell'hosting può produrre normali log tecnici delle richieste HTTP; l'applicazione non li legge né vi associa statistiche di apprendimento.

## Dati locali

La chiave corrente è `ripasso-in-tasca-stats-v4`. Contiene:

- conteggi corretti/totali per capitolo;
- autovalutazioni orali aggregate;
- conteggi corretti/errati per domanda;
- errori con stadio e scadenza di revisione;
- ultime 20 sessioni;
- fino a 30 risposte errate per sessione.

Non vengono salvati nome, email, identificatori di account o contenuti digitati liberi. L'esportazione crea un JSON tramite azione esplicita; l'importazione sostituisce i dati soltanto dopo validazione e conferma. “Cancella statistiche” azzera lo stato locale.

I dati non si sincronizzano tra browser o dispositivi. Cancellazione dei dati del sito, modalità privata, politiche di conservazione o disinstallazione possono eliminarli. Il JSON esportato è l'unico backup portabile previsto.

## Offline

`sw.js` registra la cache `ripasso-in-tasca-v10` e precache 14 URL di `APP_SHELL`. La strategia è cache-first per richieste GET same-origin. Una navigazione senza rete usa `index.html` come fallback.

Il primo caricamento deve avvenire da HTTPS o `localhost`; `file://` non registra il Service Worker. Dopo l'installazione completa, testi, quiz e statistiche funzionano offline. Importazione ed esportazione restano locali.

Quando cambia un asset dell'app shell:

1. incrementare `CACHE_NAME` in modo monotono;
2. mantenere in `APP_SHELL` soltanto file runtime;
3. verificare installazione online, reload offline e rimozione della cache precedente.

## Confini

- Cache Storage contiene codice e contenuti pubblici, non statistiche.
- `localStorage` contiene statistiche, non il corpus didattico.
- Il Service Worker ignora metodi diversi da GET e origini diverse.
- I materiali sorgente non devono essere pubblicati né precache.
- L'app non cifra il `localStorage`: chi ha accesso al profilo del browser può leggerlo.
