/* Domande aggiuntive ricavate esclusivamente dai materiali di studio. */
(function () {
  "use strict";

  const q = (id, chapter, prompt, options, answer, explanation) => ({
    id,
    chapter,
    type: "choice",
    prompt,
    options,
    answer,
    explanation
  });

  window.DOUBLE_QUESTIONS = {
    history: [
      q("dq-h1-01", "h1", "In un archivio trovi una lettera privata e un proclama ufficiale sullo stesso fatto. Da dove conviene iniziare?", [
        "Confrontare scopo, autore e contenuto di entrambe le fonti",
        "Usare soltanto la lettera perché è privata",
        "Usare soltanto il proclama perché è ufficiale",
        "Sommare i particolari senza controllare le contraddizioni"
      ], 0, "Fonti diverse possono offrire punti di vista complementari: lo storico ne valuta origine e scopo e le confronta."),
      q("dq-h1-02", "h1", "Perché un utensile può raccontare qualcosa anche se non contiene parole?", [
        "Perché permette sempre di conoscere il nome del proprietario",
        "Perché forma, materiale e usura informano su tecniche e attività",
        "Perché ogni oggetto antico indica con precisione l'anno in cui fu usato",
        "Perché una fonte materiale è più vera di qualsiasi fonte scritta"
      ], 1, "Un reperto materiale conserva indizi sulle tecniche, sul lavoro e sulla vita quotidiana, anche senza offrire nomi o date precise."),
      q("dq-h1-03", "h1", "Quale evento è il più antico?", [
        "Un evento del 120 a.C.",
        "Un evento del 399 a.C.",
        "Un evento del 720 a.C.",
        "Un evento del 45 d.C."
      ], 2, "Negli anni a.C. il numero maggiore indica una data più lontana dalla nascita di Cristo e quindi più antica."),
      q("dq-h1-04", "h1", "Quale frase spiega meglio perché la storia aiuta a capire il presente?", [
        "Perché dimostra che ogni avvenimento si ripete uguale",
        "Perché permette di prevedere con certezza tutte le decisioni future",
        "Perché sostituisce lo studio dei problemi contemporanei",
        "Perché mostra le radici di istituzioni, abitudini e conflitti attuali"
      ], 3, "Il passato non offre ricette automatiche, ma aiuta a riconoscere origini, cambiamenti, continuità, cause e conseguenze."),
      q("dq-h1-05", "h1", "Un sovrano fa incidere un testo che celebra soltanto le proprie vittorie. Come dovrebbe usarlo uno storico?", [
        "Come fonte utile, tenendo conto del suo intento celebrativo",
        "Come resoconto completo, perché è stato inciso nella pietra",
        "Come fonte inutile, perché parla di un sovrano",
        "Come prova che non vi furono sconfitte"
      ], 0, "Anche una fonte di propaganda è utile, purché se ne riconoscano lo scopo e i limiti e la si confronti con altre prove."),
      q("dq-h1-06", "h1", "Quale conseguenza seguì più direttamente la possibilità di registrare tributi e scambi?", [
        "La scomparsa immediata della trasmissione orale",
        "La nascita di archivi e amministrazioni più organizzate",
        "La fine delle differenze tra le prime città",
        "L'abbandono dei reperti come fonti storiche"
      ], 1, "La scrittura rese possibile conservare dati, ordini e conti, sostenendo istituzioni e amministrazioni urbane più complesse."),
      q("dq-h1-07", "h1", "Quale scoperta smentirebbe meglio l'idea sbagliata che la preistoria fosse un periodo senza cultura?", [
        "Un elenco di sovrani scritto su papiro",
        "Una legge incisa in caratteri alfabetici",
        "Una grotta con pitture, sepolture e strumenti lavorati",
        "Un archivio cittadino di contratti commerciali"
      ], 2, "Arte, sepolture e utensili testimoniano capacità tecniche, simboliche e credenze già prima della scrittura."),

      q("dq-h2-01", "h2", "Perché il bipedismo fu importante nel processo di ominazione?", [
        "Rese inutile la cooperazione tra individui",
        "Permise di vivere soltanto sugli alberi",
        "Fece comparire immediatamente l'agricoltura",
        "Liberò le mani e favorì l'uso e la costruzione di strumenti"
      ], 3, "Camminare su due arti lasciò libere le mani e favorì l'uso di oggetti, insieme allo sviluppo di progettazione e cooperazione."),
      q("dq-h2-02", "h2", "Un gruppo inizia a coltivare cereali e ad allevare animali. Quale cambiamento è più probabile?", [
        "La costruzione di abitazioni stabili e magazzini",
        "Il ritorno a spostamenti continui per seguire la selvaggina",
        "La rinuncia a ceramica e tessitura",
        "La scomparsa di ogni differenza di lavoro"
      ], 0, "La produzione regolare di cibo favorì sedentarizzazione, villaggi e conservazione delle eccedenze."),
      q("dq-h2-03", "h2", "Quale confronto tra Paleolitico e Neolitico è più corretto?", [
        "Nel Paleolitico prevaleva la produzione, nel Neolitico il prelievo",
        "Nel Paleolitico prevaleva il prelievo, nel Neolitico la produzione",
        "Entrambi dipendevano soltanto da città e commerci",
        "Entrambi erano basati su agricoltura irrigua e scrittura"
      ], 1, "Caccia, pesca e raccolta caratterizzavano l'economia di prelievo; agricoltura e allevamento introdussero quella di produzione."),
      q("dq-h2-04", "h2", "Perché canali, argini e dighe favorirono la nascita di un potere organizzato?", [
        "Rendevano impossibile produrre eccedenze",
        "Potevano essere costruiti solo da famiglie isolate",
        "Richiedevano coordinamento di molti lavoratori e risorse",
        "Eliminavano il bisogno di distribuire l'acqua"
      ], 2, "Le grandi opere irrigue richiedevano decisioni comuni, lavoro collettivo e amministrazione delle risorse."),
      q("dq-h2-05", "h2", "Quale caratteristica distingue un impero da una città-Stato?", [
        "L'assenza di funzionari e soldati",
        "L'uso esclusivo di un'unica città senza territorio rurale",
        "La mancanza di rapporti tra popoli diversi",
        "Il governo di territori e popolazioni differenti da parte di un sovrano"
      ], 3, "Con Sargon il potere non riguardò più soltanto una città indipendente, ma territori e popoli diversi riuniti in un impero."),
      q("dq-h2-06", "h2", "Che cosa rivela il fatto che le pene del codice di Hammurabi cambiassero secondo la classe sociale?", [
        "Che la società babilonese era gerarchica e non tutti erano uguali davanti alla legge",
        "Che il codice regolava soltanto cerimonie religiose",
        "Che la legge del taglione aboliva ogni distinzione sociale",
        "Che in Babilonia non esistevano proprietà e debiti"
      ], 0, "Il codice regolava molti aspetti della vita, ma applicava pene diverse a seconda della posizione sociale."),
      q("dq-h2-07", "h2", "Perché ferro, carri e organizzazione militare modificarono gli equilibri tra gli Stati antichi?", [
        "Perché resero più efficaci conquista e controllo dei territori",
        "Perché trasformarono tutti i guerrieri in mercanti",
        "Perché impedirono gli scontri tra grandi regni",
        "Perché sostituirono strade e comunicazioni"
      ], 0, "Innovazioni nelle armi e nei mezzi di combattimento aumentarono la capacità di espansione di popoli come Ittiti e Assiri."),
      q("dq-h2-08", "h2", "Quale scelta avrebbe aiutato Dario a ricevere più rapidamente notizie da una provincia lontana?", [
        "Affidare ogni provincia a una città-Stato indipendente",
        "Eliminare ispettori e governatori locali",
        "Usare strade, stazioni di posta e funzionari di controllo",
        "Spostare tutti i popoli conquistati nella capitale"
      ], 2, "La rete stradale, la posta, le satrapie e gli ispettori rendevano più rapido ed efficace il controllo del vasto impero persiano."),

      q("dq-h3-01", "h3", "Se le piene del Nilo non fossero state coordinate, quale problema sarebbe stato più probabile?", [
        "La scomparsa del delta e della valle",
        "La nascita immediata di un unico alfabeto",
        "L'assenza completa di commerci fluviali",
        "Raccolti meno sicuri e maggiori difficoltà nel distribuire l'acqua"
      ], 3, "Il controllo delle piene e dei canali era essenziale per sfruttare il limo fertile e rendere produttiva la valle."),
      q("dq-h3-02", "h3", "Quale elemento mostra meglio il legame tra amministrazione e agricoltura egizia?", [
        "Gli scribi registravano raccolti, tributi e ordini",
        "I geroglifici erano usati soltanto nelle tombe",
        "Gli artigiani governavano direttamente le province",
        "I contadini erano esclusi da ogni lavoro per lo Stato"
      ], 0, "Registrare raccolti e tasse permetteva allo Stato di gestire risorse, lavori e redistribuzione."),
      q("dq-h3-03", "h3", "Perché l'arrivo degli Hyksos ebbe conseguenze anche dopo la loro cacciata?", [
        "Perché abolirono definitivamente il potere del faraone",
        "Perché introdussero tecniche militari poi usate dagli Egizi",
        "Perché trasformarono l'Egitto in una città-Stato sumera",
        "Perché interruppero per sempre i rapporti con la Nubia"
      ], 1, "Gli Hyksos introdussero innovazioni come il carro da guerra; dopo averli cacciati, l'Egitto entrò nella fase espansiva del Nuovo Regno."),
      q("dq-h3-04", "h3", "Quale rapporto univa faraone e religione?", [
        "Il faraone dipendeva politicamente dagli schiavi",
        "Il faraone aveva soltanto un incarico militare temporaneo",
        "Il faraone era considerato divino e guidava anche la vita religiosa",
        "Il faraone non partecipava alla costruzione dei templi"
      ], 2, "Il faraone era capo politico, militare e religioso ed era considerato un dio vivente: da qui il carattere teocratico dello Stato."),
      q("dq-h3-05", "h3", "Perché nella tomba si deponevano oggetti d'uso quotidiano?", [
        "Per mostrare che il defunto aveva rinunciato alla vita futura",
        "Per impedire agli scribi di registrarne i beni",
        "Per sostituire il giudizio davanti agli dèi",
        "Perché si credeva che potessero servire al defunto nell'aldilà"
      ], 3, "La conservazione del corpo e il corredo funerario erano collegati alla convinzione che la vita continuasse dopo la morte."),
      q("dq-h3-06", "h3", "Quale conclusione è sostenuta dal tentativo di Akhenaton e dal successivo ritorno al culto di Amon?", [
        "Una riforma religiosa poteva incontrare forti resistenze e non durare",
        "Gli Egizi abbandonarono per sempre ogni forma di culto",
        "Tutankhamon trasformò l'Egitto in una repubblica",
        "Il potere politico era del tutto separato dalla religione"
      ], 0, "Il rapido ripristino del culto tradizionale mostra la forza delle istituzioni religiose e la difficoltà di imporre stabilmente il culto di Aton."),
      q("dq-h3-07", "h3", "Perché il Nilo può essere considerato insieme risorsa naturale e via di unificazione?", [
        "Forniva fertilità e collegava regioni, persone e merci",
        "Creava limo ma impediva ogni spostamento",
        "Separava Alto e Basso Egitto senza possibilità di contatto",
        "Era utile solo ai sacerdoti e non ai contadini"
      ], 0, "Il fiume sosteneva l'agricoltura e funzionava come una grande via di comunicazione tra le diverse zone del regno."),

      q("dq-h4-01", "h4", "Perché la crisi provocata dai popoli del mare favorì la nascita di nuove civiltà in Palestina?", [
        "Perché rafforzò per sempre il controllo dei grandi imperi sulla regione",
        "Perché indebolì alcuni regni e aprì nuovi spazi a Ebrei e Fenici",
        "Perché trasformò tutte le città-Stato in colonie egizie",
        "Perché eliminò commerci e insediamenti dalla costa mediterranea"
      ], 1, "Intorno al 1200 a.C. alcuni grandi regni si indebolirono o crollarono; nella nuova situazione si svilupparono anche Ebrei e Fenici."),
      q("dq-h4-02", "h4", "Quale sequenza segue il racconto della formazione del regno ebraico?", [
        "Salomone → Abramo → esodo → David",
        "Esodo → deportazione babilonese → Abramo → Saul",
        "David → patriarchi → Mosè → divisione del regno",
        "Patriarchi → esodo → Saul e David → Salomone"
      ], 3, "La tradizione parte dai patriarchi, prosegue con l'esodo guidato da Mosè e arriva al regno unito di Saul, David e Salomone."),
      q("dq-h4-03", "h4", "Quale effetto ebbe la divisione del regno dopo Salomone?", [
        "Israele e Giuda furono più vulnerabili alle conquiste straniere",
        "Le dodici tribù fondarono colonie in tutto il Mediterraneo",
        "Gerusalemme cessò immediatamente di avere valore religioso",
        "Assiri e Babilonesi rinunciarono a espandersi"
      ], 0, "La separazione indebolì i due regni: Israele cadde agli Assiri e Giuda ai Babilonesi."),
      q("dq-h4-04", "h4", "Che cosa distingue il Dio ebraico da molte divinità delle civiltà vicine?", [
        "Era rappresentato sempre con corpo animale",
        "Era unico, non raffigurato e non identificato con una forza naturale",
        "Era venerato soltanto dai re e non dal popolo",
        "Era una divinità diversa in ogni città"
      ], 1, "Il monoteismo ebraico affermava un solo Dio, non rappresentato con immagini e legato al popolo attraverso l'alleanza."),
      q("dq-h4-05", "h4", "Perché i Fenici fondavano scali e colonie lungo le rotte marittime?", [
        "Per sostituire il commercio con l'agricoltura di sussistenza",
        "Per riunire tutte le città sotto un unico faraone",
        "Per sostenere viaggi, scambi e accesso a nuovi mercati",
        "Per impedire la diffusione dei prodotti artigianali"
      ], 2, "Gli insediamenti costieri offrivano approdi e basi commerciali a navigatori che operavano in tutto il Mediterraneo."),
      q("dq-h4-06", "h4", "Quale limite politico rese le città fenicie più esposte ai grandi imperi?", [
        "L'assenza di mercanti influenti",
        "La mancanza di porti sulla costa",
        "Il rifiuto di usare navi e legname",
        "La divisione in città-Stato indipendenti"
      ], 3, "La frammentazione politica di Sidone, Tiro, Byblos e altre città rendeva difficile una difesa comune."),
      q("dq-h4-07", "h4", "Perché un alfabeto fonetico semplice era adatto a una civiltà commerciale?", [
        "Poteva essere imparato e usato più facilmente per comunicare e registrare scambi",
        "Richiedeva migliaia di simboli diversi per ogni prodotto",
        "Poteva essere letto soltanto dai sacerdoti dei templi",
        "Impediva ad altri popoli di adattarlo alla propria lingua"
      ], 0, "Un numero limitato di segni per i suoni rendeva la scrittura più accessibile e ne favorì l'adozione da parte di altri popoli."),

      q("dq-h5-01", "h5", "In un palazzo vengono trovati grandi magazzini, laboratori e registri. Quale conclusione è più solida?", [
        "Il palazzo aveva soltanto una funzione difensiva",
        "Il palazzo coordinava produzione, scorte e amministrazione",
        "Gli abitanti vivevano senza commerci e artigianato",
        "Il sovrano non aveva alcun ruolo economico"
      ], 1, "I palazzi minoici e micenei non erano solo residenze: organizzavano lavoro, prodotti e potere."),
      q("dq-h5-02", "h5", "Perché Creta divenne un centro importante di scambi?", [
        "Perché era lontana da ogni rotta del Mediterraneo",
        "Perché produceva da sola tutte le materie prime necessarie",
        "Perché si trovava tra Grecia, Asia Minore, Egitto e Vicino Oriente",
        "Perché le sue città rinunciarono alla navigazione"
      ], 2, "La posizione di Creta favoriva collegamenti marittimi e lo scambio di olio, vino e manufatti con metalli e materiali preziosi."),
      q("dq-h5-03", "h5", "Quale indizio distingue più chiaramente una città micenea da un palazzo minoico?", [
        "La presenza di magazzini per le scorte",
        "L'uso di una scrittura amministrativa",
        "Lo scambio di prodotti nel Mediterraneo",
        "Le fortificazioni e il rilievo dato ai guerrieri"
      ], 3, "La società micenea aveva un carattere più militare e le sue città, come Micene e Tirinto, erano fortificate."),
      q("dq-h5-04", "h5", "Che cosa suggerisce il fatto che la Lineare B registrasse soprattutto beni e attività del palazzo?", [
        "La scrittura serviva anche a controllare l'amministrazione economica",
        "La scrittura era usata esclusivamente per raccontare poemi eroici",
        "I palazzi non raccoglievano tributi né prodotti",
        "I Micenei non distinguevano artigiani e contadini"
      ], 0, "Le tavolette in Lineare B mostrano l'uso della scrittura per registrare risorse, lavoratori e attività del palazzo."),
      q("dq-h5-05", "h5", "Perché non è corretto attribuire il crollo miceneo con certezza a una sola causa?", [
        "Perché i palazzi non furono mai distrutti",
        "Perché i materiali indicano più possibili fattori, esterni e interni",
        "Perché la Lineare B racconta in modo completo ogni evento",
        "Perché il crollo avvenne prima della civiltà minoica"
      ], 1, "Dori, popoli del mare, crisi climatiche, carestie e rivolte sono fattori possibili: le prove non consentono una causa unica certa."),
      q("dq-h5-06", "h5", "Come vanno usati Iliade e Odissea per conoscere il mondo antico?", [
        "Come registri amministrativi compilati dai Micenei",
        "Come cronache esatte di ogni battaglia e di ogni data",
        "Come poemi che conservano ricordi, valori e mentalità, non come cronache",
        "Come testi scritti durante il Paleolitico"
      ], 2, "I poemi non sono resoconti storici precisi, ma trasmettono memoria e valori come onore, coraggio, fama e ospitalità."),
      q("dq-h5-07", "h5", "Quale cambiamento collega il crollo dei palazzi ai secoli bui?", [
        "La nascita immediata della democrazia ateniese",
        "L'unificazione di tutte le comunità sotto un unico wànax",
        "La diffusione della Lineare A in tutto il Mediterraneo",
        "La scomparsa della scrittura e il ritorno a comunità più piccole"
      ], 3, "Dopo il crollo miceneo scomparve la scrittura e le comunità tornarono a villaggi guidati da basileis."),

      q("dq-h6-01", "h6", "Perché coste frastagliate e isole non produssero soltanto isolamento?", [
        "Perché il mare offriva anche vie di contatto e commercio",
        "Perché resero inutile la navigazione tra le poleis",
        "Perché cancellarono le differenze politiche tra le città",
        "Perché impedirono ai Greci di fondare colonie"
      ], 0, "Montagne e pianure separate favorirono l'autonomia, mentre il mare collegò comunità e mercati."),
      q("dq-h6-02", "h6", "Una polis ha poca terra e una popolazione in crescita. Quale scelta rispecchia la seconda colonizzazione?", [
        "Ridurre gli scambi e chiudere il porto",
        "Fondare una nuova polis lungo una rotta commerciale",
        "Trasformare tutti i cittadini in schiavi",
        "Abbandonare l'uso del ferro e dell'alfabeto"
      ], 1, "La scarsità di terre e i conflitti sociali spinsero molte città a fondare colonie nel Mediterraneo e nel Mar Nero."),
      q("dq-h6-03", "h6", "Perché una colonia restava greca culturalmente pur essendo una nuova polis autonoma?", [
        "Perché obbediva sempre alle leggi della madrepatria",
        "Perché non aveva rapporti con le popolazioni locali",
        "Perché condivideva lingua, culti e tradizioni con il mondo greco",
        "Perché era governata dal re di tutte le poleis"
      ], 2, "Le colonie erano politicamente autonome, ma conservarono lingua, religione e costumi greci."),
      q("dq-h6-04", "h6", "Quale situazione descrive davvero una polis?", [
        "Soltanto una fortezza costruita su un'altura",
        "Soltanto il mercato e le case della città bassa",
        "Un territorio governato direttamente dall'impero persiano",
        "Una comunità di cittadini con centro urbano e territorio circostante"
      ], 3, "La polis comprendeva spazio urbano, campagna e soprattutto la comunità politica dei cittadini."),
      q("dq-h6-05", "h6", "Perché l'agorà era importante anche oltre il commercio?", [
        "Era luogo di assemblea e discussione sulla vita pubblica",
        "Era riservata ai riti funebri dei soli aristocratici",
        "Era il campo agricolo che nutriva tutta la polis",
        "Era la residenza fortificata del sovrano miceneo"
      ], 0, "Nell'agorà si svolgevano mercato, incontri, assemblee e discussione politica."),
      q("dq-h6-06", "h6", "Quale apparente contrasto caratterizzava il mondo greco?", [
        "Usava la stessa monarchia ma lingue del tutto diverse",
        "Era diviso in poleis autonome ma unito da cultura e religione",
        "Aveva un solo esercito ma nessuna festa comune",
        "Era politicamente unificato ma privo di miti condivisi"
      ], 1, "Il panellenismo univa Greci politicamente divisi attraverso lingua, miti, culti e giochi comuni."),
      q("dq-h6-07", "h6", "Perché i giochi di Olimpia rafforzavano l'appartenenza comune?", [
        "Stabilivano un unico governo per tutte le poleis",
        "Ammettevano soltanto cittadini della stessa città",
        "Riunivano Greci diversi sotto culti e regole condivise durante una tregua",
        "Sostituivano ogni conflitto con un esercito permanente"
      ], 2, "I giochi panellenici in onore di Zeus riunivano persone di poleis diverse e prevedevano una tregua sacra."),

      q("dq-h7-01", "h7", "Perché Sparta sviluppò un sistema così militarizzato?", [
        "Per espandere i commerci marittimi del Pireo",
        "Per permettere agli iloti di governare gli spartiati",
        "Per trasformare i perieci in cittadini ateniesi",
        "Per controllare una popolazione sottomessa molto più numerosa"
      ], 3, "Dopo le guerre messeniche gli spartiati dovevano controllare molti iloti, e disciplina ed esercito divennero centrali."),
      q("dq-h7-02", "h7", "Quale equilibrio limitava il potere dei due re spartani?", [
        "Gherusia, appella ed efori partecipavano al sistema politico",
        "Gli iloti eleggevano ogni anno entrambi i re",
        "I meteci controllavano l'esercito spartano",
        "Un faraone decideva le leggi della polis"
      ], 0, "A Sparta il potere era distribuito tra re, consiglio degli anziani, assemblea degli spartiati ed efori."),
      q("dq-h7-03", "h7", "Perché mettere per iscritto le leggi di Dracone fu comunque un cambiamento, nonostante la loro durezza?", [
        "Permise agli aristocratici di cambiare la pena in segreto",
        "Limitò la vendetta privata e rese note le norme",
        "Concesse il voto politico a donne e schiavi",
        "Abolì subito debiti e differenze economiche"
      ], 1, "La legge scritta riduceva l'arbitrio e la giustizia privata, anche se le pene di Dracone erano molto severe."),
      q("dq-h7-04", "h7", "Quale problema affrontò direttamente Solone vietando la schiavitù per debiti?", [
        "La mancanza di una flotta militare",
        "La rivalità tra Atene e l'impero persiano",
        "La perdita della libertà dei contadini indebitati",
        "Il controllo degli iloti in Messenia"
      ], 2, "Le riforme di Solone alleggerirono la crisi dei piccoli proprietari cancellando debiti e vietando che un cittadino fosse reso schiavo per essi."),
      q("dq-h7-05", "h7", "Perché le opere pubbliche di Pisistrato potevano rafforzare insieme città e consenso?", [
        "Perché eliminavano ogni attività commerciale",
        "Perché trasferivano il potere politico agli iloti",
        "Perché cancellavano il porto del Pireo",
        "Perché davano lavoro e miglioravano spazi e attività della polis"
      ], 3, "Lavori pubblici, cultura, commercio e aiuti ai piccoli proprietari aumentarono prosperità e sostegno alla tirannide."),
      q("dq-h7-06", "h7", "Un cittadino ateniese vuole discutere guerra e pace. A quale istituzione di Clistene partecipa?", [
        "All'ecclesia",
        "Alla gherusia",
        "All'Areopago spartano",
        "Al consiglio degli efori"
      ], 0, "L'ecclesia era l'assemblea dei cittadini maschi adulti e decideva anche su guerra e pace."),
      q("dq-h7-07", "h7", "Quale limite comune avevano, pur in modi diversi, i sistemi politici di Sparta e Atene?", [
        "La partecipazione politica riguardava solo una parte della popolazione",
        "Tutti gli abitanti possedevano gli stessi diritti politici",
        "Entrambe affidavano il governo ai mercanti stranieri",
        "Entrambe escludevano ogni assemblea di cittadini"
      ], 0, "Ad Atene donne, meteci e schiavi erano esclusi; a Sparta i pieni diritti appartenevano agli spartiati."),

      q("dq-h8-01", "h8", "Perché l'aiuto ateniese alla rivolta ionica ebbe conseguenze sulla Grecia continentale?", [
        "Perché Serse concesse subito l'indipendenza a tutte le poleis",
        "Perché Sparta entrò nell'impero persiano senza combattere",
        "Perché Dario decise di punire Atene ed estendere il controllo persiano",
        "Perché Mileto conquistò definitivamente Sardi"
      ], 2, "Dopo la sconfitta della rivolta, Dario volle punire Atene ed Eretria per l'aiuto offerto agli Ioni."),
      q("dq-h8-02", "h8", "Quale scelta tattica permise a Milziade di compensare l'inferiorità numerica a Maratona?", [
        "Evitare lo scontro e attendere una flotta spartana",
        "Combattere soltanto con arcieri dalle mura di Atene",
        "Attirare le navi persiane nello stretto di Salamina",
        "Rafforzare le ali della falange per accerchiare il nemico"
      ], 3, "Milziade rafforzò le ali dello schieramento: gli opliti riuscirono così ad avvolgere l'esercito persiano."),
      q("dq-h8-03", "h8", "Perché Temistocle preferì investire l'argento del Laurio nelle triremi?", [
        "Capì che una flotta forte sarebbe stata decisiva contro un nuovo attacco",
        "Voleva sostituire tutti gli opliti con mercanti",
        "Riteneva che la Persia non avrebbe più attaccato",
        "Voleva sciogliere ogni alleanza tra poleis"
      ], 0, "Temistocle comprese che il pericolo persiano continuava e preparò Atene a combattere sul mare."),
      q("dq-h8-04", "h8", "Quale fu il principale risultato strategico della resistenza alle Termopili?", [
        "Distrusse definitivamente l'esercito di Serse",
        "Rallentò l'avanzata persiana, pur terminando con la sconfitta dei difensori",
        "Liberò immediatamente le città della Ionia",
        "Impedì ai Persiani di occupare Atene"
      ], 1, "Leonida e i suoi uomini non vinsero, ma guadagnarono tempo rallentando l'avanzata persiana."),
      q("dq-h8-05", "h8", "Perché la distruzione di Atene dopo le Termopili non decise subito la guerra a favore dei Persiani?", [
        "Perché la popolazione era stata evacuata e la flotta greca poteva ancora combattere",
        "Perché Serse rinunciò a entrare in Attica e tornò subito in Asia",
        "Perché gli Ateniesi avevano già sconfitto Mardonio a Platea",
        "Perché la Lega di Corinto aveva sciolto ogni esercito di terra"
      ], 0, "Gli abitanti erano stati trasferiti a Salamina; la forza navale greca restava attiva e ottenne poco dopo la vittoria decisiva nello stretto."),
      q("dq-h8-06", "h8", "Quale successione mostra il passaggio dalla difesa greca alla supremazia ateniese?", [
        "Salamina → rivolta ionica → distruzione di Mileto → Maratona",
        "Lega navale → Termopili → costruzione della flotta → rivolta ionica",
        "Platea → dominio persiano su Atene → scioglimento della flotta",
        "Vittorie greche → prestigio della flotta → alleanza e guida ateniese nell'Egeo"
      ], 3, "Dopo le vittorie, molte poleis si affidarono alla potenza navale di Atene, che divenne il centro di una nuova alleanza."),
      q("dq-h8-07", "h8", "Perché i rematori poveri acquistarono maggiore peso politico dopo le guerre?", [
        "Il loro servizio era diventato essenziale per la potenza navale ateniese",
        "Avevano sostituito i re spartani nella Lega di Corinto",
        "Erano gli unici proprietari delle miniere del Laurio",
        "Avevano combattuto come cavalieri nell'esercito persiano"
      ], 0, "La flotta dipendeva dal lavoro dei rematori delle classi popolari; la loro importanza militare rafforzò anche le richieste politiche." )
    ],
    geography: [
      q("dq-g0-01", "g0", "Perché la costruzione di un ponte può modificare il territorio oltre al suo aspetto visibile?", [
        "Perché cambia soltanto il colore del paesaggio naturale",
        "Perché può modificare collegamenti, spostamenti e attività delle comunità",
        "Perché elimina automaticamente ogni elemento naturale",
        "Perché rende inutili strade, porti e altri insediamenti"
      ], 1, "Un'opera umana non cambia solo ciò che si vede: può riorganizzare l'uso dello spazio e i rapporti tra luoghi e attività."),
      q("dq-g0-02", "g0", "Quale coppia contiene soltanto elementi naturali di un territorio?", [
        "Porto e strada",
        "Città e campo coltivato",
        "Fiume e clima",
        "Fabbrica e ponte"
      ], 2, "Fiumi e clima sono elementi naturali; porti, strade, città, campi, fabbriche e ponti dipendono dall'intervento umano."),
      q("dq-g0-03", "g0", "Un nuovo porto crea lavoro ma aumenta traffico e inquinamento. Quale ragionamento è più geografico?", [
        "Considerare soltanto il numero dei nuovi posti di lavoro",
        "Considerare soltanto l'aspetto della costa prima dei lavori",
        "Valutare insieme benefici economici, trasformazioni e costi ambientali",
        "Concludere che ogni intervento umano è sempre positivo"
      ], 2, "La geografia mette in relazione ambiente e comunità umane, valutando effetti diversi della stessa trasformazione."),
      q("dq-g0-04", "g0", "Quale frase descrive meglio un paesaggio umanizzato?", [
        "Un luogo in cui ogni elemento naturale è scomparso",
        "Un luogo osservato soltanto attraverso dati economici",
        "Un luogo che non può più essere modificato nel tempo",
        "Un luogo in cui gli interventi umani sono chiaramente visibili"
      ], 3, "Un paesaggio è umanizzato quando campi, edifici, strade o altre opere mostrano in modo evidente l'azione delle comunità."),
      q("dq-g0-05", "g0", "Perché lo stesso territorio può presentare paesaggi diversi nel corso del tempo?", [
        "Perché attività umane e processi naturali lo trasformano continuamente",
        "Perché il territorio coincide soltanto con i confini amministrativi",
        "Perché gli elementi naturali non influenzano mai le attività umane",
        "Perché ogni generazione cambia necessariamente il clima"
      ], 0, "Agricoltura, insediamenti e infrastrutture, insieme ai processi naturali, lasciano tracce e modificano il paesaggio."),
      q("dq-g0-06", "g0", "Quale decisione usa il territorio in modo più equilibrato?", [
        "Costruire ovunque sia tecnicamente possibile",
        "Confrontare bisogni della popolazione, rischi ambientali e consumo di suolo",
        "Proteggere la natura senza considerare alcuna attività umana",
        "Valutare soltanto il guadagno economico immediato"
      ], 1, "Un uso equilibrato considera insieme qualità della vita, attività economiche, limiti naturali e conseguenze nel tempo."),

      q("dq-g1-01", "g1", "Un comune deve decidere dove aprire un nuovo ospedale. Perché un GIS può essere utile?", [
        "Per calcolare soltanto il costo dell'edificio",
        "Per sostituire ogni decisione politica con un algoritmo",
        "Per confrontare popolazione, collegamenti, ospedali esistenti e aree servite",
        "Per trasformare automaticamente i dati in una legge"
      ], 2, "Un GIS sovrappone e confronta informazioni diverse sullo stesso territorio, aiutando a valutare alternative."),
      q("dq-g1-02", "g1", "La popolazione passa da 5 a 6 milioni. Quale dato esprime meglio l'aumento rispetto al valore iniziale?", [
        "La densità senza conoscere la superficie",
        "Il PIL complessivo dello stesso anno",
        "La speranza di vita media",
        "La variazione percentuale"
      ], 3, "Una percentuale mette l'aumento in rapporto al valore iniziale e permette confronti più significativi."),
      q("dq-g1-03", "g1", "Quale coordinata geografica indica la distanza di un punto dall'Equatore?", [
        "La longitudine",
        "La latitudine",
        "La scala numerica",
        "La legenda"
      ], 1, "La latitudine misura la distanza dall'Equatore; la longitudine prende come riferimento il meridiano di Greenwich."),
      q("dq-g1-04", "g1", "In un Paese ci sono 500.000 nascite e 620.000 morti. Che cosa puoi concludere sul saldo naturale?", [
        "È positivo di 120.000 persone",
        "È negativo di 120.000 persone",
        "È uguale al saldo migratorio",
        "Non può essere calcolato senza il PIL"
      ], 1, "Il saldo naturale è nascite meno decessi: 500.000 - 620.000 dà -120.000."),
      q("dq-g1-05", "g1", "Due Paesi hanno lo stesso PIL totale, ma popolazioni molto diverse. Quale dato aiuta di più a confrontare la ricchezza media?", [
        "Il numero assoluto degli abitanti",
        "Il saldo naturale",
        "Il PIL pro capite",
        "La percentuale del settore primario"
      ], 2, "Il PIL pro capite divide la produzione complessiva per il numero degli abitanti e consente un confronto medio."),
      q("dq-g1-06", "g1", "Una piramide delle età ha base stretta e parte superiore larga. Quale problema suggerisce?", [
        "Una crescita molto rapida del numero dei bambini",
        "Un forte aumento della superficie del Paese",
        "Un saldo migratorio necessariamente nullo",
        "Una popolazione che invecchia e pochi giovani"
      ], 3, "Una base stretta indica poche nuove generazioni; una parte alta larga segnala una quota elevata di anziani."),

      q("dq-g2-01", "g2", "Perché le montagne antiche hanno in genere profili più arrotondati?", [
        "Sono state erose dagli agenti atmosferici per tempi molto lunghi",
        "Sono formate soltanto da detriti depositati dai fiumi",
        "Sono tutte ancora in rapido sollevamento",
        "Si trovano sempre vicino a un delta"
      ], 0, "L'erosione agisce per milioni di anni e abbassa e arrotonda rilievi antichi come Urali e Massiccio Centrale."),
      q("dq-g2-02", "g2", "Quale condizione favorisce la formazione di un delta?", [
        "Il mare risale con forza in una foce a imbuto",
        "Il fiume deposita molti detriti e si divide in più rami",
        "Un ghiacciaio scava una conca poi riempita d'acqua",
        "Una diga sbarra artificialmente il corso del fiume"
      ], 1, "Il delta nasce dall'accumulo di sedimenti alla foce, dove il corso d'acqua si divide in rami."),
      q("dq-g2-03", "g2", "Perché un fiume navigabile che attraversa più Stati può favorire l'integrazione economica?", [
        "Perché impedisce la nascita di città lungo le rive",
        "Perché elimina la necessità di accordi tra Paesi",
        "Perché collega mercati e permette il trasporto di persone e merci",
        "Perché può essere usato soltanto per produrre energia"
      ], 2, "Una via d'acqua internazionale collega territori e attività, anche se richiede collaborazione nella gestione."),
      q("dq-g2-04", "g2", "Due località hanno la stessa latitudine, ma una è sulla costa e l'altra nell'interno. Quale differenza è più probabile?", [
        "La costa avrà sempre inverni più freddi ed estati più calde",
        "L'interno avrà temperature identiche in tutte le stagioni",
        "La distanza dal mare non influirà in alcun modo",
        "La costa avrà temperature più miti, l'interno maggiore escursione termica"
      ], 3, "Il mare si riscalda e si raffredda lentamente e attenua gli estremi; l'interno risente di più delle differenze stagionali."),
      q("dq-g2-05", "g2", "Quale confronto tra l'origine di alcuni laghi europei è corretto?", [
        "Il Garda è vulcanico, il Bolsena glaciale e il Balaton artificiale",
        "Il Garda è glaciale, il Bolsena vulcanico e il Balaton tettonico",
        "Il Garda è tettonico, il Bolsena artificiale e il Balaton glaciale",
        "Tutti e tre occupano crateri di antichi vulcani"
      ], 1, "Il Garda è legato all'azione degli antichi ghiacciai, il Bolsena occupa un cratere vulcanico e il Balaton ha origine tettonica."),
      q("dq-g2-06", "g2", "Perché ridurre plastica monouso e aumentare il riciclaggio può proteggere gli ambienti?", [
        "Perché aumenta l'estrazione di nuove materie prime",
        "Perché diminuisce rifiuti e dispersione di materiali nell'ambiente",
        "Perché sostituisce completamente le aree protette",
        "Perché elimina da solo tutte le emissioni dei trasporti"
      ], 1, "Riduzione e riciclaggio limitano rifiuti e uso di nuove risorse, pur non risolvendo da soli ogni problema ambientale."),

      q("dq-g3-01", "g3", "Perché nella tundra crescono soprattutto muschi, licheni e arbusti bassi?", [
        "Perché le piogge sono continue e le temperature sempre miti",
        "Perché il terreno è coltivato intensivamente",
        "Perché freddo e breve estate limitano la crescita di alberi alti",
        "Perché le maree coprono ogni giorno la vegetazione"
      ], 2, "Il clima subartico, con inverno lungo ed estate breve, permette solo a vegetazione bassa e resistente di svilupparsi."),
      q("dq-g3-02", "g3", "Quale tipo di vegetazione forma la taiga dell'Europa settentrionale?", [
        "Una foresta di conifere",
        "Una distesa di soli muschi e licheni",
        "Una macchia di arbusti mediterranei",
        "Una steppa senza alberi"
      ], 0, "La taiga è una grande foresta di conifere; più a nord si trova invece la tundra con muschi, licheni e arbusti bassi."),
      q("dq-g3-03", "g3", "In una zona mediterranea il terreno diventa più arido e roccioso. Quale cambiamento della vegetazione è coerente con il testo?", [
        "La gariga lascia posto a una fitta taiga",
        "La macchia mediterranea diventa una vegetazione più bassa e rada, la gariga",
        "La steppa si trasforma in tundra per le piogge frequenti",
        "I licheni vengono sostituiti da una foresta atlantica"
      ], 1, "Nelle aree mediterranee più aride e rocciose si sviluppa la gariga, più bassa e rada della macchia mediterranea."),
      q("dq-g3-04", "g3", "Procedendo verso est nell'Europa continentale, le precipitazioni diminuiscono. Quale passaggio del paesaggio è descritto nel testo?", [
        "Dalla foresta alla steppa",
        "Dalla tundra alla macchia mediterranea",
        "Dalla gariga alla taiga",
        "Dai terrazzamenti ai fiordi"
      ], 0, "Nell'Europa continentale prevale dapprima la foresta; verso est, dove piove meno, il paesaggio lascia spazio alla steppa."),
      q("dq-g3-05", "g3", "Salendo dal fondovalle a una vetta molto alta, perché cambia la vegetazione?", [
        "Perché aumenta la distanza dall'Equatore di migliaia di chilometri",
        "Perché tutte le precipitazioni scompaiono oltre i boschi",
        "Perché temperatura e condizioni ambientali cambiano con l'altitudine",
        "Perché l'uomo sostituisce sempre i boschi con rocce nude"
      ], 2, "Le fasce altimetriche dipendono soprattutto dal raffreddamento e dalle diverse condizioni che si incontrano salendo."),
      q("dq-g3-06", "g3", "Perché proteggere una zona umida è utile anche oltre i suoi confini?", [
        "Perché impedisce agli uccelli di migrare",
        "Perché trasforma ogni area circostante in un parco",
        "Perché elimina automaticamente l'inquinamento europeo",
        "Perché offre una tappa essenziale a specie che si spostano tra regioni diverse"
      ], 3, "Le zone umide protette possono essere nodi fondamentali lungo le rotte degli uccelli migratori."),

      q("dq-g4-01", "g4", "Perché in Italia ambienti diversi compaiono a distanze relativamente brevi?", [
        "La forma allungata, i rilievi e l'influenza dei mari creano condizioni varie",
        "Il territorio italiano è formato quasi soltanto da pianure",
        "Alpi e Appennini hanno ovunque la stessa altitudine",
        "La latitudine non cambia e il mare non influenza il clima"
      ], 0, "Estensione nord-sud, altitudini e vicinanza al mare combinano climi alpini, continentali, appenninici e mediterranei."),
      q("dq-g4-02", "g4", "In una zona dell'Appennino l'erosione crea forme incise e argillose. Quali elementi del paesaggio stai osservando?", [
        "Fiordi e falesie",
        "Calanchi e crete",
        "Risorgive e lagune",
        "Polder e delta"
      ], 1, "Calanchi e crete sono forme create dall'erosione in alcune aree appenniniche, tra cui Toscana ed Emilia-Romagna."),
      q("dq-g4-03", "g4", "Quale associazione tra lago italiano e origine è corretta?", [
        "Garda-vulcanica, Bolsena-tettonica, Trasimeno-glaciale",
        "Garda-tettonica, Bolsena-glaciale, Trasimeno-vulcanica",
        "Garda-glaciale, Bolsena-vulcanica, Trasimeno-tettonica",
        "Garda-artificiale, Bolsena-alluvionale, Trasimeno-marina"
      ], 2, "Il Garda è di origine glaciale, il Bolsena occupa un antico cratere vulcanico e il Trasimeno ha origine tettonica."),
      q("dq-g4-04", "g4", "Un comune costruisce su un'area che assorbiva l'acqua piovana. Quale effetto è più probabile durante un temporale intenso?", [
        "L'acqua penetrerà più facilmente nel terreno cementificato",
        "Il rischio di alluvione diminuirà in ogni zona vicina",
        "La pioggia non raggiungerà più i corsi d'acqua",
        "Aumenterà il deflusso superficiale e quindi il rischio idrogeologico"
      ], 3, "Superfici impermeabili assorbono meno acqua e ne accelerano il deflusso, aggravando allagamenti e piene."),
      q("dq-g4-05", "g4", "Quale vulcano italiano è quiescente ma resta sotto stretta sorveglianza?", [
        "Il Vesuvio",
        "Il Monte Bianco",
        "Il Gran Sasso",
        "Il Corno Grande"
      ], 0, "Il testo distingue il Vesuvio, oggi quiescente e sorvegliato, dai vulcani ancora attivi Etna, Vulcano e Stromboli."),
      q("dq-g4-06", "g4", "Quale intervento ridurrebbe meglio il rischio di frane e alluvioni?", [
        "Costruire nuovi capannoni vicino a ogni corso d'acqua",
        "Limitare il consumo di suolo e curare versanti e fiumi",
        "Rendere impermeabili tutti i terreni agricoli",
        "Concentrare nuove case lungo ogni tratto di costa"
      ], 1, "Proteggere suolo, pendii e corsi d'acqua riduce l'esposizione ai fenomeni naturali e i danni aggravati dalla cementificazione."),

      q("dq-g5-01", "g5", "Perché il welfare state può ridurre le disuguaglianze?", [
        "Perché concentra sanità e istruzione soltanto nelle grandi imprese",
        "Perché sostituisce ogni lavoro con un sussidio permanente",
        "Perché rende accessibili servizi come sanità, scuola e pensioni",
        "Perché elimina le differenze culturali tra i popoli europei"
      ], 2, "Servizi e prestazioni pubbliche proteggono i cittadini e rendono meno dipendenti dal reddito alcuni bisogni fondamentali."),
      q("dq-g5-02", "g5", "Quale combinazione aiutò Roma a integrare territori molto diversi?", [
        "Soltanto fortezze isolate e lingue locali separate",
        "Abolizione delle città e riduzione degli scambi",
        "Comunità autonome senza moneta né diritto comuni",
        "Strade, città, latino, moneta, commerci e diritto"
      ], 3, "Infrastrutture e regole comuni favorirono comunicazioni, scambi e una cultura condivisa in gran parte dell'Impero."),
      q("dq-g5-03", "g5", "Perché l'Europa occidentale medievale viene definita policentrica?", [
        "Perché il potere era diviso tra sovrani, feudatari, Chiesa e città",
        "Perché un solo imperatore controllava stabilmente ogni territorio",
        "Perché le città commerciali non avevano alcuna autonomia",
        "Perché tutte le decisioni erano prese a Costantinopoli"
      ], 0, "Nell'Occidente medievale convivevano molti centri di potere politico, religioso ed economico."),
      q("dq-g5-04", "g5", "Quale scambio descrive meglio il sistema coloniale vantaggioso per le madrepatrie?", [
        "Le colonie vendevano manufatti costosi e compravano materie prime europee",
        "Le colonie fornivano risorse e lavoro a basso costo e compravano manufatti",
        "Madrepatrie e colonie rinunciavano ai commerci oceanici",
        "Le colonie controllavano le industrie e i governi europei"
      ], 1, "Le potenze europee ricavavano materie prime e profitti, mentre vendevano prodotti lavorati ai territori controllati."),
      q("dq-g5-05", "g5", "Quale nuova tensione sociale nacque con la Rivoluzione industriale?", [
        "Il conflitto tra sacerdoti egizi e scribi",
        "La rivalità tra poleis greche e colonie fenicie",
        "Il contrasto tra imprenditori proprietari e operai salariati",
        "La lotta tra satrapi persiani e città sumere"
      ], 2, "Il capitalismo industriale rafforzò la borghesia imprenditoriale e creò una numerosa classe operaia che chiedeva diritti e salari migliori."),
      q("dq-g5-06", "g5", "Perché le due guerre mondiali segnarono la perdita della supremazia europea?", [
        "Perché eliminarono ogni città e industria dal continente",
        "Perché restaurarono definitivamente gli antichi imperi",
        "Perché interruppero ogni relazione con Stati Uniti e Russia",
        "Perché indebolirono l'Europa e favorirono nuove superpotenze"
      ], 3, "Distruzioni e crisi economiche ridussero il peso europeo, mentre Stati Uniti e Unione Sovietica divennero le potenze dominanti."),
      q("dq-g5-07", "g5", "Perché dopo la scoperta delle Americhe molte potenze italiane persero importanza economica?", [
        "Il centro dei traffici si spostò dal Mediterraneo verso l'Atlantico",
        "Le repubbliche marinare unificarono politicamente la penisola",
        "L'Italia smise di avere città e attività artigianali",
        "Le potenze europee rinunciarono alle rotte oceaniche"
      ], 0, "Lo spostamento dei grandi commerci verso l'Atlantico ridusse il vantaggio delle città italiane legate alle rotte mediterranee."),

      q("dq-g6-01", "g6", "In una città due strade principali, una est-ovest e una nord-sud, si incrociano nel foro. A quale strato storico appartiene questa pianta?", [
        "Alla città romana organizzata intorno a decumano e cardo",
        "Alla città industriale nata intorno agli slums",
        "Al paesaggio agrario dei campi aperti",
        "Alla città diffusa cresciuta lungo le autostrade"
      ], 0, "La pianta romana a scacchiera era imperniata su decumano e cardo, che si incrociavano nel foro."),
      q("dq-g6-02", "g6", "Perché spesso intorno ai monasteri medievali nascevano villaggi?", [
        "I monaci proibivano ogni coltivazione fuori dalle mura",
        "I monasteri erano costruiti soltanto nei centri industriali",
        "Bonifiche, assistenza e nuove tecniche attiravano attività e abitanti",
        "I contadini erano obbligati a lasciare definitivamente le campagne"
      ], 2, "I monasteri erano centri religiosi e culturali, ma anche punti di organizzazione agricola e assistenza."),
      q("dq-g6-03", "g6", "Perché molti castelli medievali sorgevano in posizione elevata?", [
        "Per facilitare la coltivazione dei polder",
        "Per avvicinarsi ai porti delle città industriali",
        "Per rendere invisibili le vie commerciali",
        "Per controllare e difendere territorio e comunicazioni"
      ], 3, "L'altura offriva vantaggi militari e permetteva al signore di sorvegliare terre, strade e insediamenti."),
      q("dq-g6-04", "g6", "Quale organizzazione agraria rende più visibili proprietà separate e gestione individuale?", [
        "Campi chiusi da siepi, filari o muretti",
        "Campi aperti coltivati senza alcuna divisione visibile",
        "Pascoli privi di insediamenti e vie di accesso",
        "Terreni urbani occupati da fabbriche"
      ], 0, "Le recinzioni degli enclosure delimitano chiaramente le singole proprietà, a differenza dei campi aperti."),
      q("dq-g6-05", "g6", "Perché le prime grandi regioni industriali sorsero spesso vicino a giacimenti di carbone o corsi d'acqua?", [
        "Perché fabbriche e macchine avevano bisogno di fonti di energia",
        "Perché le industrie potevano funzionare soltanto dentro i castelli",
        "Perché i centri urbani avevano vietato ferrovie e canali",
        "Perché il carbone veniva usato soprattutto per delimitare i campi"
      ], 0, "Le prime fabbriche si concentrarono presso il carbone e anche lungo corsi d'acqua sfruttati per l'energia idraulica."),
      q("dq-g6-06", "g6", "Che cosa mostra il Grand Tour sulla società europea dell'epoca?", [
        "Che il viaggio era diventato accessibile a ogni lavoratore",
        "Che serviva soprattutto a cercare impiego nelle fabbriche",
        "Che i giovani delle classi ricche viaggiavano per formazione culturale",
        "Che le città d'arte avevano perso ogni importanza"
      ], 2, "Il Grand Tour era un viaggio educativo delle élite verso luoghi considerati fondamentali per arte, cultura e antichità."),

      q("dq-g7-01", "g7", "Che cosa mette a confronto l'indice di vecchiaia?", [
        "Il numero degli anziani e quello dei giovani",
        "Le nascite e le immigrazioni",
        "Gli abitanti e la superficie dello Stato",
        "La popolazione urbana e quella rurale"
      ], 0, "L'indice di vecchiaia misura il rapporto tra anziani e giovani presenti in una popolazione."),
      q("dq-g7-02", "g7", "Un Paese ha saldo naturale negativo ma popolazione quasi stabile. Quale fattore può compensare la perdita?", [
        "Un saldo migratorio positivo",
        "Una diminuzione della speranza di vita",
        "Un aumento dell'emigrazione rispetto all'immigrazione",
        "Una densità più bassa senza nuovi arrivi"
      ], 0, "Se gli immigrati superano gli emigrati, il saldo migratorio positivo può compensare più morti che nascite."),
      q("dq-g7-03", "g7", "Perché congedi parentali, servizi per l'infanzia e incentivi possono sostenere la natalità?", [
        "Perché riducono alcuni ostacoli economici e organizzativi per le famiglie",
        "Perché aumentano automaticamente la mortalità della popolazione",
        "Perché sostituiscono il lavoro con l'emigrazione permanente",
        "Perché eliminano la speranza di vita dagli indicatori demografici"
      ], 0, "Nel testo i Paesi del Nord con politiche familiari efficaci mantengono valori di natalità più elevati rispetto a molte aree del Sud e dell'Est."),
      q("dq-g7-04", "g7", "Perché commerci e spostamenti possono accelerare una grande epidemia?", [
        "Perché rendono ogni malattia più grave nel singolo malato",
        "Perché impediscono l'uso di qualsiasi misura sanitaria",
        "Perché collegano rapidamente popolazioni e territori lontani",
        "Perché aumentano automaticamente la natalità"
      ], 2, "Persone e merci in movimento possono trasportare un contagio lungo rotte che uniscono regioni diverse."),
      q("dq-g7-05", "g7", "Quale frase valuta in modo più completo un lockdown?", [
        "Ha soltanto effetti sanitari positivi e nessun costo",
        "Ha soltanto conseguenze economiche e non riduce i contatti",
        "È uguale a un vaccino perché impedisce biologicamente l'infezione",
        "Può ridurre il contagio ma produce anche costi sociali ed economici"
      ], 3, "Limitare i contatti può contenere la diffusione, ma chiusure e isolamento incidono su scuola, lavoro e relazioni."),
      q("dq-g7-06", "g7", "Perché vaccini, antibiotici e migliori condizioni igieniche hanno ridotto la mortalità epidemica?", [
        "Prevengono alcuni contagi e rendono più efficaci cura e controllo delle infezioni",
        "Eliminano per sempre la possibilità che compaiano nuove malattie",
        "Rendono inutili ospedali, ricerca e prevenzione",
        "Agiscono soltanto sulla struttura per età della popolazione"
      ], 0, "Progresso medico e igiene riducono diffusione e gravità di molte malattie, pur senza cancellare ogni rischio."),

      q("dq-g8-01", "g8", "Una famiglia lascia il proprio Paese perché non trova lavoro. Quale causa prevale?", [
        "Una causa esclusivamente naturale",
        "Una causa economica",
        "Una causa legata al pendolarismo quotidiano",
        "Una causa dovuta alla crescita zero"
      ], 1, "La ricerca di occupazione e condizioni di vita migliori è una delle principali spinte economiche alla migrazione."),
      q("dq-g8-02", "g8", "Che cosa distingue soprattutto una migrazione forzata da una scelta economica?", [
        "La durata del viaggio verso il Paese d'arrivo",
        "Il mezzo di trasporto utilizzato dalla persona",
        "La fuga da guerra, persecuzione o pericolo grave",
        "Il fatto che la destinazione si trovi in Europa"
      ], 2, "Profughi, richiedenti asilo e rifugiati si spostano perché la sicurezza o la libertà sono minacciate."),
      q("dq-g8-03", "g8", "Perché l'invecchiamento europeo può aumentare la domanda di immigrazione?", [
        "Perché elimina ogni bisogno di nuovi lavoratori",
        "Perché trasforma automaticamente emigranti in rifugiati",
        "Perché impedisce i ricongiungimenti familiari",
        "Perché alcuni settori cercano lavoratori mentre la popolazione attiva diminuisce"
      ], 3, "Una popolazione anziana e poche nuove generazioni possono creare bisogno di lavoro coperto anche da persone immigrate."),
      q("dq-g8-04", "g8", "Perché tra 1951 e 1971 molti italiani si spostarono dal Sud al triangolo industriale?", [
        "Le fabbriche del boom economico offrivano più occasioni di lavoro",
        "Le città del Nord stavano tornando a un'economia agricola",
        "Le regioni meridionali erano il centro dell'industria automobilistica",
        "Lo spostamento era un ricongiungimento tra Stati diversi"
      ], 0, "Il miracolo economico concentrò industrie e occupazione in particolare tra Milano, Torino e Genova."),
      q("dq-g8-05", "g8", "Quale rischio presenta un modello che riconosce comunità diverse ma crea poche occasioni d'incontro?", [
        "La perdita automatica di ogni cultura d'origine",
        "La separazione tra gruppi che vivono fianco a fianco",
        "L'eliminazione di ogni forma di pluralità",
        "La trasformazione di tutti i migranti in pendolari"
      ], 1, "Il riconoscimento delle differenze è positivo, ma senza dialogo e partecipazione può produrre comunità separate."),
      q("dq-g8-06", "g8", "Perché le seconde generazioni rendono insufficiente considerare l'immigrazione soltanto temporanea?", [
        "Perché tornano necessariamente nel Paese dei genitori",
        "Perché non frequentano scuole né comunità del Paese in cui vivono",
        "Perché crescono nella società europea e pongono questioni di piena appartenenza",
        "Perché sono sempre lavoratori ospiti con un contratto breve"
      ], 2, "I figli di immigrati spesso nascono o crescono nel Paese d'arrivo e partecipano stabilmente alla sua vita sociale."),

      q("dq-g9-01", "g9", "Quando città vicine si saldano, quale nuova esigenza diventa più importante?", [
        "Separare completamente trasporti e servizi di ogni comune",
        "Ridurre ogni collegamento tra i diversi centri",
        "Trasferire tutte le funzioni in un solo centro storico",
        "Coordinare mobilità e servizi nell'intero agglomerato"
      ], 3, "Una conurbazione funziona come un'area continua: problemi e spostamenti superano i confini del singolo comune."),
      q("dq-g9-02", "g9", "Perché università prestigiose e grandi ospedali aumentano il rango di una città?", [
        "Sono servizi rari che attirano persone da un territorio ampio",
        "Sono servizi di base presenti nello stesso modo in ogni villaggio",
        "Diminuiscono sempre il movimento di persone nella rete urbana",
        "Trasformano una rete policentrica in un'area rurale"
      ], 0, "La gerarchia urbana dipende dalla qualità e dalla rarità delle funzioni offerte, oltre che dalla popolazione."),
      q("dq-g9-03", "g9", "Perché alcuni centri storici perdono residenti mentre aumentano negozi e alloggi turistici?", [
        "Perché ogni edificio storico viene demolito",
        "Perché prezzi elevati e attività per visitatori sostituiscono funzioni residenziali",
        "Perché le città vietano ogni forma di commercio nel centro",
        "Perché università e ospedali si trasferiscono nei borghi rurali"
      ], 1, "L'aumento dei valori immobiliari e la specializzazione turistica possono trasformare il centro in un quartiere-vetrina."),
      q("dq-g9-04", "g9", "Quale funzione distingue un CBD dal centro storico?", [
        "Concentra soprattutto monumenti medievali e antiche botteghe",
        "Ospita soltanto abitazioni sparse e campi agricoli",
        "Concentra banche, assicurazioni, grandi aziende e uffici",
        "È privo di collegamenti con il resto della città"
      ], 2, "Il Central Business District è il quartiere degli affari e può essere distinto dal nucleo storico della città."),
      q("dq-g9-05", "g9", "Che cosa distingue una megalopoli da una singola conurbazione?", [
        "Comprende più metropoli e conurbazioni collegate da reti efficienti",
        "È formata da una sola città priva di rapporti con altri centri",
        "Riunisce esclusivamente piccoli villaggi agricoli senza servizi",
        "Coincide sempre con il centro storico di una capitale"
      ], 0, "Una megalopoli è una vasta regione urbana che collega più metropoli e conurbazioni e concentra importanti attività."),
      q("dq-g9-06", "g9", "Quale progetto rappresenta meglio una smart city?", [
        "Sensori per regolare traffico ed energia, mobilità condivisa e partecipazione dei cittadini",
        "Nuove strade senza trasporto pubblico né controllo dei consumi",
        "Tecnologie usate soltanto per aumentare la pubblicità commerciale",
        "Quartieri isolati in cui ogni servizio richiede l'automobile"
      ], 0, "Una smart city unisce strumenti digitali, sostenibilità, pianificazione e partecipazione, non soltanto tecnologia."),

      q("dq-g10-01", "g10", "Una famiglia non riesce a riscaldare adeguatamente la casa né a pagare con regolarità le bollette. Quale condizione descrive il testo?", [
        "La grave privazione materiale",
        "La delocalizzazione industriale",
        "La terziarizzazione dell'economia",
        "Il south working"
      ], 0, "La grave privazione materiale indica l'impossibilità di permettersi beni e servizi essenziali, tra cui riscaldamento e bollette."),
      q("dq-g10-02", "g10", "In una fabbrica sensori, macchine e operatori scambiano dati in tempo reale. Qual è il vantaggio più coerente con l'Industria 4.0?", [
        "Eliminare ogni decisione umana e ogni manutenzione",
        "Produrre senza reti digitali né raccolta di dati",
        "Coordinare processi e intervenire più rapidamente su errori e bisogni",
        "Tornare alle tecnologie basate soltanto su vapore e carbone"
      ], 2, "Un sistema cyber-fisico collega persone, oggetti e macchine per rendere produzione e controllo più informati e flessibili."),
      q("dq-g10-03", "g10", "Perché durante il Covid-19 turismo e ristorazione furono colpiti più di molti servizi digitali?", [
        "Perché non impiegavano alcun lavoratore",
        "Perché producevano soltanto materie prime agricole",
        "Perché ricevettero automaticamente tutti gli stessi ricavi del 2019",
        "Perché dipendevano da spostamenti e presenza fisica limitati dalle chiusure"
      ], 3, "Le restrizioni colpirono soprattutto le attività fondate su viaggi, incontri e presenza del pubblico."),
      q("dq-g10-04", "g10", "Una persona senza lavoro lo sta cercando attivamente. Fa parte della popolazione attiva?", [
        "Sì, perché la forza lavoro comprende occupati e persone in cerca di occupazione",
        "No, perché comprende esclusivamente chi ha già un contratto",
        "Sì, ma soltanto se lavora nel settore primario",
        "No, perché chi cerca lavoro appartiene sempre ai NEET"
      ], 0, "La popolazione attiva comprende sia chi lavora sia chi è disponibile e cerca un'occupazione."),
      q("dq-g10-05", "g10", "Come può l'agricoltura produrre di più impiegando meno lavoratori rispetto al passato?", [
        "Riducendo ogni investimento in macchine e conoscenze",
        "Aumentando produttività attraverso meccanizzazione e tecnologie",
        "Sostituendo tutte le coltivazioni con servizi finanziari",
        "Eliminando distribuzione e trasformazione dei prodotti"
      ], 1, "Macchine, capitali e innovazioni permettono a pochi addetti di ottenere una produzione elevata."),
      q("dq-g10-06", "g10", "Quale effetto territoriale può avere il south working descritto nel materiale?", [
        "Obbligare tutte le imprese a trasferire la sede nel Mezzogiorno",
        "Eliminare le differenze tra Nord e Sud in pochi mesi",
        "Permettere di lavorare per un'impresa lontana restando nel luogo di residenza",
        "Trasformare il lavoro digitale in un'attività agricola"
      ], 2, "Il lavoro a distanza può separare la sede dell'impresa dal luogo in cui vive il lavoratore e modificare i flussi territoriali."),

      q("dq-g11-01", "g11", "Quale limite ambientale può accompagnare un'agricoltura molto intensiva?", [
        "Una produttività necessariamente più bassa",
        "L'assenza totale di investimenti e macchinari",
        "La scomparsa di ogni legame con l'industria alimentare",
        "Un uso elevato di fertilizzanti, prodotti chimici e risorse"
      ], 3, "L'agricoltura intensiva è produttiva, ma l'impiego di molti input richiede attenzione agli effetti su suolo, acqua e ambiente."),
      q("dq-g11-02", "g11", "Se si interrompono i trasporti, perché può risentirne anche un'azienda agricola moderna?", [
        "Perché l'agroindustria collega campi, fornitori, trasformazione e distribuzione",
        "Perché l'agricoltura moderna non vende mai i propri prodotti",
        "Perché ogni azienda produce internamente macchine, energia e imballaggi",
        "Perché le attività agricole appartengono al settore terziario"
      ], 0, "L'agroindustria è una filiera: un problema in trasporto o distribuzione può influire su produzione e vendita."),
      q("dq-g11-03", "g11", "Perché la scarsità di petrolio e gas rende strategica la transizione energetica europea?", [
        "Perché le rinnovabili aumentano necessariamente tutte le importazioni",
        "Perché ridurre la dipendenza dai fossili migliora sicurezza e sostenibilità",
        "Perché l'Europa non consuma energia in industria e trasporti",
        "Perché solare ed eolico sono combustibili fossili prodotti localmente"
      ], 1, "Rinnovabili ed efficienza possono ridurre sia le emissioni sia la vulnerabilità dovuta all'importazione di fonti fossili."),
      q("dq-g11-04", "g11", "Perché ricerca, grandi banche e funzioni di comando si concentrano soprattutto nelle metropoli?", [
        "Perché i piccoli centri non possono offrire alcun servizio",
        "Perché il settore primario vieta queste attività nelle campagne",
        "Perché richiedono reti, capitali e lavoratori molto qualificati",
        "Perché appartengono tutte al turismo balneare"
      ], 2, "I servizi avanzati e il quaternario cercano ambienti con competenze, collegamenti e istituzioni specializzate."),
      q("dq-g11-05", "g11", "Come può l'Italia esportare molti prodotti industriali pur avendo poche materie prime?", [
        "Vendendo soprattutto risorse minerarie non lavorate",
        "Rinunciando alle capacità artigianali e progettuali",
        "Evitando gli scambi con gli altri Paesi europei",
        "Trasformando risorse importate grazie a competenze, design e organizzazione"
      ], 3, "L'industria italiana crea valore lavorando materie prime con capacità tecniche, qualità, moda, design e specializzazione."),
      q("dq-g11-06", "g11", "Perché i distretti di piccole e medie imprese poterono competere dopo la crisi degli anni Settanta?", [
        "Specializzazione, tradizione artigiana, qualità e collaborazione resero flessibile la produzione",
        "Ogni impresa produceva da sola qualsiasi bene senza specializzarsi",
        "La crescita dipendeva dall'abbandono delle esportazioni",
        "I distretti sostituirono il Nord-Est con un'unica grande fabbrica statale"
      ], 0, "Reti locali di imprese specializzate sfruttarono competenze artigiane, flessibilità e capacità di esportare."),

      q("dq-g12-01", "g12", "Quale affermazione descrive correttamente il rapporto tra spazio Schengen e Unione Europea?", [
        "I partecipanti coincidono sempre e i controlli interni non possono tornare",
        "Schengen riguarda soltanto i Paesi che usano l'euro",
        "I partecipanti non coincidono perfettamente e controlli temporanei possono essere reintrodotti",
        "Schengen sostituisce la cittadinanza nazionale con quella europea"
      ], 2, "Lo spazio Schengen normalmente elimina i controlli alle frontiere interne, ma non coincide perfettamente con l'UE e ammette controlli temporanei per sicurezza o emergenza."),
      q("dq-g12-02", "g12", "Che cosa significa che l'Unione Europea è sovranazionale?", [
        "Che ogni Stato ha perso tutte le proprie competenze",
        "Che le decisioni comuni sono sempre facoltative",
        "Che gli Stati affidano alcune competenze a istituzioni capaci di decisioni comuni",
        "Che l'UE funziona come una semplice alleanza senza trattati"
      ], 2, "Gli Stati restano sovrani, ma nei campi stabiliti dai trattati condividono poteri con istituzioni europee."),
      q("dq-g12-03", "g12", "L'UE stabilisce un risultato ambientale, lasciando agli Stati la scelta delle leggi per raggiungerlo. Quale atto sta usando?", [
        "Un regolamento applicato direttamente nello stesso modo",
        "Una sentenza della Corte dei conti",
        "Un orientamento non vincolante del Consiglio europeo",
        "Una direttiva da recepire nelle norme nazionali"
      ], 3, "La direttiva fissa obiettivi vincolanti, mentre gli Stati scelgono forme e strumenti del recepimento."),
      q("dq-g12-04", "g12", "Quale descrizione del processo legislativo europeo è più corretta?", [
        "La Commissione propone di solito le leggi; Parlamento e Consiglio dell'UE le discutono e approvano",
        "Il Consiglio europeo approva da solo ogni regolamento e direttiva",
        "La Banca Centrale Europea elegge il Parlamento ogni cinque anni",
        "La Corte dei conti propone le leggi e la Commissione emette sentenze"
      ], 0, "Le tre istituzioni hanno ruoli distinti: iniziativa della Commissione e decisione legislativa di Parlamento e Consiglio."),
      q("dq-g12-05", "g12", "Una regione perde abitanti e ha infrastrutture insufficienti. Quale politica europea è pensata per ridurre questo divario?", [
        "La politica monetaria della Banca Centrale Europea",
        "La politica di coesione",
        "La sola abolizione dei controlli di Schengen",
        "L'elezione diretta della Commissione Europea"
      ], 1, "La coesione finanzia infrastrutture, servizi, imprese e innovazione nelle regioni più deboli."),
      q("dq-g12-06", "g12", "Una cittadina italiana vive in un altro Stato dell'UE. Quale possibilità deriva dalla cittadinanza europea?", [
        "Sostituire automaticamente la cittadinanza italiana con quella del nuovo Stato",
        "Votare alle elezioni politiche nazionali del nuovo Stato senza condizioni",
        "Partecipare alle elezioni comunali ed europee secondo le regole previste",
        "Ignorare le leggi nazionali perché valgono soltanto quelle europee"
      ], 2, "La cittadinanza UE completa quella nazionale e consente, tra l'altro, partecipazione comunale ed europea nello Stato di residenza." )
    ]
  };
})();
