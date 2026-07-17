/* Contenuti ricavati e riorganizzati esclusivamente dai materiali presenti nella cartella. */
(function () {
  const section = (title, paragraphs, key = "") => ({ title, paragraphs, key });
  const choice = (id, chapter, prompt, options, answer, explanation) => ({
    id,
    chapter,
    type: "choice",
    prompt,
    options,
    answer,
    explanation
  });
  const oral = (id, chapter, prompt, checklist) => ({ id, chapter, prompt, checklist });

  const historyChapters = [
    {
      id: "h1",
      number: 1,
      title: "Studiare la storia",
      subtitle: "Definizione, fonti, scrittura e orientamento nel tempo",
      minutes: 12,
      sections: [
        section("Che cos'è la storia", [
          `La parola storia deriva dal greco historía e significa indagine o ricerca. La storia non è quindi soltanto un insieme di date: studia il passato degli esseri umani, il modo in cui hanno vissuto, lavorato e organizzato la società e le trasformazioni che hanno prodotto nel tempo.`,
          `Con storia possiamo indicare sia i fatti realmente accaduti sia la loro ricostruzione. La storiografia è il lavoro con cui gli studiosi ordinano, spiegano e interpretano quei fatti. La ricerca storica riguarda guerre e sovrani, ma anche vita quotidiana, economia, religione, tecniche, cultura e rapporti sociali.`,
          `Conoscere il passato aiuta a capire il presente, perché leggi, lingue, città, abitudini e conflitti hanno radici lontane. La storia non offre ricette automatiche, ma insegna a riconoscere cause, conseguenze, cambiamenti e continuità.`
        ], "La storia è un'indagine sul passato umano fondata su prove."),
        section("Il metodo dello storico e le fonti", [
          `Lo storico non inventa il passato: raccoglie le fonti disponibili, le analizza, le confronta, valuta se sono attendibili e propone una spiegazione. La spiegazione deve essere fondata sui documenti e può essere discussa e migliorata da altri studiosi.`,
          `Le fonti scritte comprendono leggi, lettere, contratti, cronache e iscrizioni. Le fonti materiali sono utensili, armi, monete, abitazioni, tombe e resti di cibo. Le fonti iconografiche comprendono dipinti, sculture, mappe e fotografie; quelle orali sono racconti, testimonianze e tradizioni tramandate.`
        ]),
        section("Quando manca la scrittura", [
          `La preistoria è il lunghissimo periodo precedente all'invenzione della scrittura. Non è un tempo senza importanza: comprende l'evoluzione umana, l'uso degli strumenti e del fuoco, le prime forme d'arte, l'agricoltura e la nascita dei villaggi.`,
          `Senza testi scritti, archeologi, paleontologi e antropologi lavorano soprattutto su fossili e reperti. Non sempre conosciamo nomi e date precise, ma analisi dei materiali e sistemi di datazione permettono di ottenere informazioni sempre più affidabili.`
        ]),
        section("La scrittura e il tempo storico", [
          `La scrittura nacque intorno alla metà del IV millennio a.C. nelle prime civiltà urbane della Mesopotamia. Serviva inizialmente a contare prodotti, registrare scambi, tasse, debiti e proprietà; in seguito conservò anche miti, leggi e conoscenze. Per convenzione, con la scrittura termina la preistoria e comincia la storia.`,
          `La cronologia ordina gli eventi nel tempo. Gli anni precedenti la nascita di Cristo sono indicati con a.C., quelli successivi con d.C.; non esiste un anno zero. Un secolo dura cento anni e un millennio mille. Il I secolo d.C. va dall'anno 1 al 100, mentre il V secolo a.C. va dal 500 al 401 a.C.`
        ], "Con gli anni a.C. i numeri diminuiscono avvicinandosi alla nascita di Cristo.")
      ]
    },
    {
      id: "h2",
      number: 2,
      title: "Dalla preistoria alla storia",
      subtitle: "Evoluzione umana e civiltà della Mesopotamia fino ai Persiani",
      minutes: 28,
      sections: [
        section("Evoluzione e ominazione", [
          `La Terra si formò circa 4,5 miliardi di anni fa e la specie umana è il risultato recente di una lunghissima storia naturale. Nell'Ottocento Charles Darwin spiegò l'evoluzione attraverso la selezione naturale: gli individui con caratteristiche più adatte all'ambiente hanno maggiori possibilità di sopravvivere, riprodursi e trasmetterle ai discendenti. L'uomo non discende dalle scimmie attuali: uomini e scimmie antropomorfe hanno antichi antenati comuni.`,
          `Il processo di ominazione iniziò in Africa. Il bipedismo liberò le mani e favorì l'uso di oggetti; nel tempo aumentarono le dimensioni del cervello, la capacità di progettare e la cooperazione. L'Australopiteco camminava sugli arti inferiori; Homo habilis costruiva i choppers; Homo erectus usava il fuoco e uscì dall'Africa; i Neanderthal erano adatti ai climi freddi e seppellivano i morti; Homo sapiens sviluppò strumenti raffinati, arte, linguaggi complessi e capacità simboliche.`
        ]),
        section("Paleolitico, Mesolitico e Neolitico", [
          `Nel Paleolitico gli esseri umani vivevano in piccoli gruppi nomadi di cacciatori, pescatori e raccoglitori. La loro era un'economia di prelievo. Usavano pietra scheggiata, osso e legno; il fuoco serviva per scaldarsi, cuocere, illuminare e difendersi. Sepolture, pitture rupestri e statuette mostrano credenze e capacità artistiche.`,
          `Dopo l'ultima glaciazione, intorno al 10.000 a.C., il Mesolitico fu una fase di adattamento: si perfezionarono arco e frecce, pesca e raccolta e iniziò l'addomesticamento di alcuni animali.`,
          `Nel Vicino Oriente, intorno all'8000 a.C., la rivoluzione agricola del Neolitico trasformò il rapporto con la natura. Agricoltura e allevamento produssero cibo, favorirono la sedentarizzazione e la crescita dei villaggi. Ceramica, tessitura, aratro, ruota e metallurgia migliorarono la produzione. La divisione del lavoro fece nascere artigiani, mercanti, sacerdoti e guerrieri e aumentò le differenze sociali.`
        ], "Il Neolitico trasforma un'economia di prelievo in un'economia di produzione."),
        section("Le civiltà fluviali e la Mesopotamia", [
          `Le più antiche civiltà urbane nacquero lungo grandi fiumi: in Egitto lungo il Nilo e in Mesopotamia tra Tigri ed Eufrate. Canali, argini e dighe richiedevano lavoro collettivo; l'irrigazione aumentò i raccolti e creò eccedenze da conservare e scambiare.`,
          `Verso il 4000 a.C. comparvero città con templi, magazzini, mura, istituzioni e lavoratori specializzati. Per amministrare prodotti, tributi e scambi si sviluppò la scrittura: nacquero archivi, leggi e amministrazioni più complesse.`
        ]),
        section("Sumeri e Accadi", [
          `I Sumeri si stabilirono nella Mesopotamia meridionale e si organizzarono in città-Stato indipendenti come Uruk, Ur e Lagash. Inventarono la scrittura cuneiforme, incisa su tavolette d'argilla. La ziqqurat era il centro religioso, economico e amministrativo. La società era teocratica e gerarchica: re, sacerdoti e funzionari dominavano su guerrieri, mercanti, artigiani, contadini, servi e schiavi.`,
          `Verso il 2350 a.C. Sargon, re degli Accadi, conquistò le città sumere e costruì uno dei primi grandi imperi. Il sovrano governava popoli e territori diversi e il palazzo divenne il principale centro politico. Dopo il crollo accadico vi fu una fase neo-sumerica; in seguito gli Amorrei favorirono la nascita della civiltà babilonese.`
        ]),
        section("Babilonesi e Ittiti", [
          `Hammurabi unificò gran parte della Mesopotamia e fece incidere una raccolta di 282 leggi. Il codice regolava proprietà, famiglia, lavoro, debiti e reati; le pene variavano secondo la classe sociale e spesso seguivano la legge del taglione. I Babilonesi svilupparono matematica e astronomia e usarono un sistema basato sul numero 60.`,
          `Gli Ittiti, popolo indoeuropeo stanziato in Anatolia, avevano capitale Hattusa. Perfezionarono la lavorazione del ferro e usarono cavalli e carri da guerra. Nel 1275 a.C. circa combatterono a Qadesh contro l'Egitto di Ramses II; la battaglia fu seguita da un trattato di pace. Il loro Stato crollò intorno al 1200 a.C.`
        ]),
        section("Assiri, neobabilonesi e Persiani", [
          `Tra IX e VII secolo a.C. gli Assiri costruirono un vasto impero grazie a un esercito organizzato, armi di ferro e macchine d'assedio. Deportazioni e terrore assicuravano un controllo immediato, ma alimentavano rivolte. Assurbanipal raccolse a Ninive una grande biblioteca; nel 612 a.C. Medi e Babilonesi distrussero la città.`,
          `Il regno neobabilonese raggiunse il massimo splendore con Nabucodonosor II, che nel 586 a.C. conquistò Gerusalemme. Nel 539 a.C. Babilonia cadde nelle mani di Ciro il Grande.`,
          `Ciro fondò l'impero persiano achemenide e rispettò spesso religioni e tradizioni dei vinti. Dario I divise l'impero in satrapie, controllate da satrapi e ispettori chiamati “occhi e orecchie del re”, e costruì strade e stazioni di posta. Lo zoroastrismo descrive il mondo come lotta tra Bene e Male e invita ogni persona a scegliere attraverso pensieri, parole e azioni.`
        ], "I Persiani resero più stabile un impero multietnico con amministrazione, strade e tolleranza.")
      ]
    },
    {
      id: "h3",
      number: 3,
      title: "L'Egitto: dono del Nilo",
      subtitle: "Nascita, regni, società, religione e vita oltre la morte",
      minutes: 18,
      sections: [
        section("Il Nilo e la nascita del regno", [
          `Erodoto definì l'Egitto “dono del Nilo”. Le piene annuali lasciavano sui campi il limo, un fango fertile che permetteva raccolti abbondanti. Il fiume era anche una via di comunicazione e commercio. Quando il Sahara divenne più arido, molte popolazioni si concentrarono nella valle e impararono a organizzare insieme i lavori agricoli.`,
          `Si formarono il Basso Egitto a nord, nel delta, e l'Alto Egitto a sud, lungo la valle. Intorno al 3100 a.C. Narmer, identificato anche con Menes, unificò i due regni. Il sovrano fu chiamato faraone.`
        ]),
        section("Le grandi fasi della storia egizia", [
          `Nell'Antico Regno, con capitale Menfi, il faraone consolidò il potere e furono costruite le grandi piramidi. Dopo una crisi, il Medio Regno riportò unità e favorì l'espansione verso la Nubia. Verso il 1750 a.C. gli Hyksos occuparono il delta e introdussero nuove tecniche militari, come il carro da guerra.`,
          `Ahmose cacciò gli Hyksos e diede inizio al Nuovo Regno, con capitale Tebe. L'Egitto si espanse in Siria, Palestina e Nubia. Akhenaton tentò di imporre il culto di Aton, ma Tutankhamon ripristinò il culto di Amon. Ramses II affrontò gli Ittiti a Qadesh. Dopo le invasioni dei popoli del mare e crisi interne, il regno decadde e l'Egitto passò sotto dinastie straniere, Persiani, Tolomei e infine Romani.`
        ]),
        section("La società egizia", [
          `La società era organizzata come una piramide. Al vertice stava il faraone, dio vivente e capo politico, religioso e militare: l'Egitto era quindi uno Stato teocratico. Sotto di lui vi erano sacerdoti, il visir, funzionari e scribi. Gli scribi sapevano leggere e scrivere e registravano tasse, raccolti e ordini. Seguivano militari e artigiani; alla base stavano contadini e schiavi.`,
          `I contadini coltivavano le terre, pagavano tributi e prestavano lavoro allo Stato per canali, templi e altre grandi opere.`
        ]),
        section("Scrittura, religione e aldilà", [
          `I geroglifici potevano rappresentare oggetti, suoni o idee. Furono decifrati nell'Ottocento grazie alla stele di Rosetta. Gli Egizi erano politeisti: Ra era il dio Sole, Geb la Terra, Nut il Cielo; Anubi, Sobek e Thot avevano forme animali o miste. Il mito di Osiride, Iside e Horus collegava morte e rinascita.`,
          `Gli Egizi credevano nella vita ultraterrena. Per conservarne il corpo praticavano la mummificazione e deponevano nella tomba oggetti utili. Il defunto doveva affrontare un giudizio davanti agli dèi prima di entrare nel regno dei morti.`
        ], "Nilo, faraone e religione sono i tre fili che tengono insieme la civiltà egizia.")
      ]
    },
    {
      id: "h4",
      number: 4,
      title: "Fenici ed Ebrei",
      subtitle: "Due popoli sulla costa orientale del Mediterraneo",
      minutes: 14,
      sections: [
        section("L'antica Palestina", [
          `La Palestina, o terra di Canaan, collegava Egitto, Mesopotamia e Asia Minore. Era attraversata da vie commerciali e comprendeva montagne, boschi, pianure e aree desertiche. Piccoli centri e città-Stato subirono spesso l'influenza di grandi imperi. La crisi provocata dai popoli del mare intorno al 1200 a.C. favorì la nascita di nuove civiltà, tra cui Ebrei e Fenici.`
        ]),
        section("Gli Ebrei: patriarchi, esodo e regno", [
          `La Bibbia è una fonte centrale per la storia ebraica, ma gli storici la confrontano con l'archeologia. Secondo la tradizione, gruppi semitici nomadi guidati da patriarchi partirono dalla Mesopotamia verso Canaan. Abramo fu il primo grande patriarca; Giacobbe, chiamato anche Israele, ebbe dodici figli, considerati capostipiti delle tribù.`,
          `Una carestia spinse gli Ebrei in Egitto. Secondo il racconto biblico, Mosè li liberò dalla schiavitù durante l'esodo e ricevette nel Sinai le Tavole della Legge. Tornati in Palestina, si unirono sotto Saul, David e Salomone. David fece di Gerusalemme la capitale e Salomone costruì il primo tempio. Dopo di lui il regno si divise: Israele fu conquistato dagli Assiri e Giuda dai Babilonesi, che deportarono molti abitanti a Babilonia.`
        ]),
        section("La religione ebraica", [
          `Gli Ebrei erano monoteisti e credevano in un solo Dio, Jahvé, non rappresentato con immagini e non legato a una forza della natura. L'alleanza univa Dio e popolo: Dio offriva protezione e il popolo doveva rispettarne le leggi. I profeti richiamavano fede e giustizia nei momenti di crisi.`
        ]),
        section("I Fenici e l'alfabeto", [
          `I Fenici erano un popolo semitico della costa dell'attuale Libano. Sidone, Tiro, Byblos e Berito erano città-Stato indipendenti. Cedri del Libano e porpora erano risorse preziose. Dopo il 1200 a.C. i Fenici ampliarono i commerci e fondarono scali e colonie nel Mediterraneo, tra cui Cartagine.`,
          `Le città erano guidate da re e influenzate dalle famiglie mercantili. La divisione politica le rese deboli davanti ai grandi imperi, ma la loro eredità fu duratura: un alfabeto fonetico più semplice, adottato e modificato dai Greci e poi dai Romani.`
        ], "Ebrei: monoteismo. Fenici: navigazione, commercio e alfabeto.")
      ]
    },
    {
      id: "h5",
      number: 5,
      title: "Civiltà cretese e micenea",
      subtitle: "Palazzi, commerci, guerrieri e mondo omerico",
      minutes: 14,
      sections: [
        section("La civiltà minoica", [
          `Creta occupava una posizione favorevole tra Grecia, Asia Minore, Egitto e Vicino Oriente. La civiltà minoica, dal leggendario re Minosse, fu aperta agli scambi e legata alla navigazione. La sua supremazia marittima è detta talassocrazia. Olio, vino e prodotti artigianali venivano scambiati con rame, stagno, oro e pietre.`,
          `I palazzi di Cnosso e Festo erano residenze del sovrano ma anche centri politici, economici e amministrativi con magazzini e laboratori. I Cretesi usarono una scrittura geroglifica e la Lineare A, non ancora completamente decifrata. Dopo una prima crisi intorno al 1700 a.C., terremoti, eruzioni, maremoti e instabilità indebolirono l'isola, che passò sotto il controllo miceneo.`
        ]),
        section("I Micenei", [
          `I Micenei, chiamati Achei dai Greci successivi, erano indoeuropei stanziati nella Grecia continentale. Micene, Tirinto e Pilo erano città fortificate dominate dal palazzo. Il wànax era il sovrano principale; il lawagétas aveva probabilmente funzioni militari. Nobili guerrieri, sacerdoti, scribi, artigiani, contadini e schiavi formavano una società gerarchica.`,
          `I Micenei conquistarono Creta, controllarono rotte commerciali e usarono la Lineare B per l'amministrazione. La loro espansione verso l'Asia Minore è collegata alla guerra di Troia. Intorno al 1200 a.C. i palazzi furono distrutti: tra le possibili cause vi sono Dori, popoli del mare, carestie, cambiamenti climatici e rivolte interne.`
        ]),
        section("Il mondo dei poemi omerici", [
          `Dopo il crollo miceneo iniziò il Medioevo ellenico, o “secoli bui”: scomparve la scrittura e le comunità tornarono a villaggi più piccoli guidati da basileis. Questa fase preparò però la nascita della polis.`,
          `Iliade e Odissea, attribuite a Omero, non sono cronache ma conservano ricordi, valori e mentalità del mondo greco antico. Onore, coraggio, fama e ospitalità erano valori fondamentali. I cantori trasmettevano oralmente le storie degli eroi e svolgevano una funzione educativa.`
        ], "Minoici: dominio del mare e palazzi. Micenei: città fortificate e guerrieri.")
      ]
    },
    {
      id: "h6",
      number: 6,
      title: "Il mondo greco arcaico",
      subtitle: "Ambiente, colonizzazione, polis e cultura comune",
      minutes: 15,
      sections: [
        section("Ambiente e popolazioni", [
          `Tra IX e VIII secolo a.C. il mondo greco si trasformò. Dori, Ioni ed Eoli si distribuirono in aree diverse: i Dori soprattutto nel Peloponneso, gli Ioni in Attica e sulle coste dell'Asia Minore, gli Eoli in Beozia e in alcune isole. Montagne, pianure separate, coste frastagliate e isole favorirono comunità indipendenti; il mare facilitò contatti e commerci.`,
          `Ripresero scrittura, economia e scambi. I Greci adattarono l'alfabeto fenicio; strumenti in ferro e nuove colture aumentarono la produzione e la popolazione.`
        ]),
        section("La seconda colonizzazione", [
          `La crescita demografica rese insufficienti le terre coltivabili e aumentò i conflitti tra piccoli proprietari e aristocratici. Dall'VIII secolo a.C. molte città fondarono nuove poleis nel Mediterraneo e nel Mar Nero. L'Italia meridionale e la Sicilia presero il nome di Magna Grecia; tra le colonie vi furono Cuma, Paestum, Taranto, Crotone e Siracusa.`
        ]),
        section("La polis e i cittadini", [
          `La polis comprendeva il centro abitato, il territorio circostante e la comunità dei cittadini. L'acropoli era la parte alta e fortificata; l'asty la città bassa; l'agorà la piazza del mercato, delle assemblee e della discussione politica.`,
          `Gli opliti erano cittadini-soldati che combattevano nella falange. Poiché difendevano la città, chiesero maggiore partecipazione. Il governo poteva essere monarchico, aristocratico, oligarchico, tirannico o democratico. Donne, stranieri e schiavi erano esclusi dalla cittadinanza politica.`
        ]),
        section("Religione e panellenismo", [
          `Le poleis erano indipendenti, ma lingua, miti, poemi omerici, religione e feste univano i Greci. Gli dèi erano antropomorfi: avevano aspetto e sentimenti umani, pur essendo immortali. Accanto ai culti ufficiali esistevano misteri e oracoli; a Delfi la Pizia pronunciava i responsi di Apollo.`,
          `I giochi panellenici di Olimpia si svolgevano ogni quattro anni in onore di Zeus e durante le gare veniva proclamata una tregua sacra. Rafforzavano il panellenismo, cioè il sentimento di appartenenza a una cultura comune.`
        ], "Le poleis erano politicamente divise, ma culturalmente unite.")
      ]
    },
    {
      id: "h7",
      number: 7,
      title: "Sparta e Atene",
      subtitle: "Due modelli di polis: oligarchia militare e democrazia",
      minutes: 16,
      sections: [
        section("Sparta e la sua società", [
          `Sparta, in Laconia, fu fondata secondo la tradizione dai Dori. Le guerre messeniche le diedero un territorio fertile; per controllare una popolazione sottomessa molto numerosa costruì uno Stato rigido e militarizzato.`,
          `Gli spartiati erano cittadini con pieni diritti e si dedicavano alla guerra; i perieci erano liberi, artigiani e commercianti, ma senza diritti politici; gli iloti erano servi legati alla terra. L'educazione collettiva dei maschi iniziava a sette anni e puntava su obbedienza, disciplina e resistenza.`
        ]),
        section("Le istituzioni spartane", [
          `Due re svolgevano funzioni militari e religiose. La gherusia era il consiglio degli anziani, l'appella l'assemblea degli spartiati adulti e cinque efori controllavano leggi e operato dei re. Il potere apparteneva quindi a pochi cittadini: Sparta era una polis oligarchica.`
        ]),
        section("Atene prima della democrazia", [
          `Atene, in Attica, era aperta al mare e ai commerci grazie al Pireo. Dopo la monarchia il potere passò agli aristocratici. Gli arconti erano i magistrati principali e l'Areopago controllava i magistrati e giudicava i reati più gravi. I meteci erano stranieri residenti, liberi di lavorare ma senza diritti politici.`,
          `Dracone mise per iscritto leggi penali molto severe, limitando la giustizia privata. Nel 594 a.C. Solone cancellò i debiti dei contadini, vietò la schiavitù per debiti e divise i cittadini in classi di reddito: la partecipazione non dipendeva più soltanto dalla nascita.`
        ]),
        section("Pisistrato e Clistene", [
          `Pisistrato instaurò una tirannide nel 560 a.C., ma sostenne piccoli proprietari, commercio, flotta, lavori pubblici e cultura. Dopo la cacciata di suo figlio Ippia, Clistene realizzò nel 508 a.C. una riforma decisiva.`,
          `Clistene creò dieci tribù territoriali che mescolavano città, costa e interno. La bulé di cinquecento cittadini preparava le leggi; l'ecclesia, aperta ai cittadini maschi adulti, decideva su proposte, guerra e pace. L'ostracismo consentiva di allontanare per dieci anni una persona ritenuta pericolosa per lo Stato.`
        ], "Sparta privilegiava stabilità e disciplina; Atene ampliò gradualmente la partecipazione politica.")
      ]
    },
    {
      id: "h8",
      number: 8,
      title: "Guerre persiane e supremazia ateniese",
      subtitle: "Dalla rivolta ionica alla potenza navale di Atene",
      minutes: 12,
      sections: [
        section("La rivolta ionica", [
          `L'impero persiano conquistò la Lidia e le città greche della Ionia, che persero autonomia e pagarono tributi. Nel 499 a.C. Aristagora di Mileto guidò una rivolta sostenuta da Atene ed Eretria. Dopo l'incendio di Sardi, i Persiani reagirono e nel 494 a.C. distrussero Mileto. Dario decise allora di punire le città greche.`
        ]),
        section("La prima guerra persiana", [
          `Nel 490 a.C. l'esercito persiano sbarcò a Maratona. Gli Ateniesi guidati da Milziade, pur inferiori di numero, rafforzarono le ali della falange e accerchiarono il nemico. La vittoria dimostrò che una polis poteva resistere a un grande impero.`,
          `Temistocle comprese che il pericolo continuava e usò l'argento delle miniere del Laurio per costruire triremi. La flotta sarebbe stata decisiva nella guerra successiva.`
        ]),
        section("La seconda guerra persiana", [
          `Nel 480 a.C. Serse invase la Grecia. Atene e Sparta si allearono nella Lega di Corinto. Alle Termopili Leonida e i suoi uomini rallentarono i Persiani, ma furono aggirati dopo il tradimento di Efialte.`,
          `La popolazione ateniese fu evacuata a Salamina. Temistocle attirò la flotta persiana in uno stretto braccio di mare e le triremi greche ottennero una vittoria decisiva. Nel 479 a.C. i Greci vinsero a Platea e presso capo Micale, liberando le città ioniche.`
        ]),
        section("La supremazia di Atene", [
          `Le guerre aumentarono il prestigio di Atene e della sua flotta. I cittadini poveri, impiegati come rematori, acquistarono maggiore importanza politica. Sparta tornò a concentrarsi sul Peloponneso, mentre molte poleis dell'Egeo si affidarono ad Atene per continuare la difesa contro i Persiani. La città divenne così il centro di una nuova alleanza navale e avviò la propria supremazia.`
        ], "Maratona mostrò la forza degli opliti; Salamina rese decisiva la flotta ateniese.")
      ]
    }
  ];

  const geographyChapters = [
    {
      id: "g0",
      number: 0,
      title: "Che cosa studia la geografia",
      subtitle: "Il rapporto tra uomo, ambiente, territorio e paesaggio",
      minutes: 8,
      sections: [
        section("Uomo e ambiente", [
          `La geografia studia gli ambienti della Terra e il modo in cui le comunità umane vivono, usano e trasformano questi ambienti. Non descrive soltanto fiumi, montagne, città e Stati: cerca le relazioni tra elementi naturali ed elementi umani.`,
          `Tra gli elementi naturali vi sono rilievi, pianure, fiumi, laghi, mari, clima e vegetazione. Strade, abitazioni, campi coltivati, porti, industrie, città e vie di comunicazione sono invece elementi umani. Il geografo osserva come funzionano insieme e come cambiano nel tempo.`
        ]),
        section("Territorio e paesaggio", [
          `L'uomo trasforma il territorio costruendo case, strade, ponti, porti, fabbriche e campi coltivati. Questi interventi possono migliorare la vita, ma possono anche provocare consumo di suolo, inquinamento, traffico e maggiori rischi ambientali.`,
          `Il territorio è uno spazio abitato, organizzato e usato dagli esseri umani e comprende anche aspetti non immediatamente visibili, come confini, economia e amministrazione. Il paesaggio è invece l'aspetto visibile di quel territorio. Può essere naturale o fortemente umanizzato e cambia continuamente.`
        ]),
        section("Il lavoro del geografo", [
          `Il geografo osserva il territorio, raccoglie dati, confronta informazioni e spiega le relazioni tra ambiente naturale e attività umane. Utilizza carte, immagini satellitari, statistiche, grafici, censimenti e strumenti digitali. Lo scopo non è soltanto conoscere i luoghi, ma capire come usarli in modo più equilibrato.`
        ], "Territorio è lo spazio organizzato; paesaggio è il modo in cui quello spazio appare.")
      ]
    },
    {
      id: "g1",
      number: 1,
      title: "Gli strumenti della geografia",
      subtitle: "Carte, dati, grafici e indicatori",
      minutes: 12,
      sections: [
        section("Le carte geografiche", [
          `Una carta geografica è una rappresentazione ridotta, simbolica e approssimata della superficie terrestre. È ridotta perché usa una scala; simbolica perché ricorre a colori e segni spiegati dalla legenda; approssimata perché una superficie sferica non può essere riportata su un foglio senza deformazioni.`,
          `Le carte fisiche rappresentano rilievi, pianure e acque; quelle politiche Stati e confini; le carte tematiche mostrano un fenomeno particolare; piante e mappe descrivono spazi piccoli con molti dettagli. Più il denominatore della scala è grande, più il territorio rappresentato è ampio e meno dettagliato.`
        ]),
        section("Orientamento e strumenti digitali", [
          `I punti cardinali sono Nord, Sud, Est e Ovest. Paralleli e meridiani formano il reticolato geografico; latitudine e longitudine permettono di individuare una posizione. GPS e cartografia digitale aiutano a localizzare punti e calcolare percorsi.`,
          `Il GIS, sistema informativo geografico, raccoglie e confronta dati diversi sullo stesso territorio: popolazione, strade, fiumi, servizi, aree agricole o zone a rischio. È utile ad amministrazioni, imprese, studiosi e cittadini.`
        ]),
        section("Statistica, grafici e indicatori", [
          `La statistica organizza dati su popolazione, economia, lavoro, clima e trasporti. I valori possono essere assoluti, percentuali, medie o rapporti. Istogrammi, grafici lineari e aerogrammi rendono visibili confronti, cambiamenti nel tempo e composizione di un totale.`,
          `Gli indicatori demografici comprendono natalità, mortalità, saldo naturale, saldo migratorio, densità e speranza di vita. La piramide delle età mostra la popolazione per sesso e fasce di età. Tra gli indicatori economici vi sono PIL, PIL pro capite e ISU: il PIL misura il valore della produzione, mentre l'ISU considera anche istruzione e speranza di vita.`
        ], "Un indicatore riassume un fenomeno, ma va letto insieme ad altri dati.")
      ]
    },
    {
      id: "g2",
      number: 2,
      title: "L'Europa fisica",
      subtitle: "Rilievi, acque, climi e degrado degli ambienti",
      minutes: 14,
      sections: [
        section("Una penisola dell'Eurasia", [
          `L'Europa è la grande penisola occidentale dell'Eurasia. A nord è delimitata dal Mar Glaciale Artico, a ovest dall'Oceano Atlantico e a sud dal Mediterraneo. Il confine orientale è convenzionale e segue Monti Urali, fiume Ural, Mar Caspio, Caucaso, Mar Nero, Bosforo e Dardanelli. Coste frastagliate, mari, penisole e isole hanno favorito fin dall'antichità scambi e commerci.`
        ]),
        section("Montagne, pianure e coste", [
          `Alpi, Pirenei, Carpazi, Balcani e Caucaso sono montagne giovani, alte e appuntite. I rilievi antichi di Scozia, Scandinavia, Urali e Massiccio Centrale francese sono più bassi e arrotondati dall'erosione. Una vasta fascia di pianure attraversa l'Europa dalla Francia alla Russia; la Pianura Padana è di origine alluvionale.`,
          `Le coste atlantiche settentrionali sono alte e frastagliate: in Norvegia i ghiacciai hanno scavato i fiordi; altrove compaiono falesie. Molte coste mediterranee sono più basse e sabbiose, soprattutto presso i delta.`
        ]),
        section("Fiumi, laghi e climi", [
          `Il Volga è il fiume più lungo d'Europa; il Danubio attraversa numerosi Stati. Una foce è a delta quando i detriti formano rami e nuove terre, a estuario quando il mare risale un corso a imbuto. I laghi possono essere glaciali, vulcanici, tettonici o artificiali; il Mar Caspio è il più grande bacino chiuso di acqua salata.`,
          `Il clima oceanico è mite e piovoso; il continentale ha inverni freddi ed estati calde; il mediterraneo estati calde e secche e inverni miti; il subartico inverni lunghi ed estati brevi. Latifoglie, macchia mediterranea, taiga e tundra corrispondono ai diversi climi.`
        ]),
        section("Il degrado ambientale", [
          `Traffico, industria e riscaldamento producono polveri sottili. L'aumento dei gas serra provoca riscaldamento globale, scioglimento dei ghiacciai, innalzamento dei mari ed eventi estremi. Parchi, aree protette, energie rinnovabili, riciclaggio e riduzione della plastica sono alcune risposte europee.`
        ], "La varietà fisica europea deriva dall'incontro tra rilievi, mari, latitudine e azione umana.")
      ]
    },
    {
      id: "g3",
      number: 3,
      title: "Gli ambienti europei",
      subtitle: "Le cinque grandi regioni ambientali",
      minutes: 12,
      sections: [
        section("Europa del Nord e atlantica", [
          `L'Europa del Nord comprende Islanda, Scandinavia e Russia settentrionale. Il clima subartico ha inverni lunghi ed estati brevi. A nord domina la tundra di muschi e licheni, più a sud la taiga di conifere. Oltre il Circolo Polare si osservano sole di mezzanotte ed effetti delle antiche glaciazioni.`,
          `L'Europa atlantica è influenzata dall'oceano e dalla Corrente del Golfo: temperature miti e piogge frequenti favoriscono prati e pascoli. Falesie, dune e il bocage, paesaggio di campi e siepi, caratterizzano regioni diverse.`
        ]),
        section("Europa continentale e mediterranea", [
          `Nell'interno del continente l'escursione termica è forte: gli inverni sono freddi e le estati calde. Le foreste lasciano gradualmente spazio alla steppa verso est, dove terreni fertili hanno favorito grandi produzioni cerealicole.`,
          `L'Europa mediterranea ha estati calde e secche e inverni miti e piovosi. Macchia mediterranea e gariga sono vegetazioni tipiche. L'uomo ha trasformato il territorio con ulivi, viti e terrazzamenti.`
        ]),
        section("Europa alpina e tutela", [
          `Alpi, Pirenei, Carpazi, Balcani e Caucaso appartengono alla regione alpina. Clima e vegetazione cambiano con l'altitudine in fasce altimetriche: fondovalle, boschi, pascoli, rocce e ghiacciai.`,
          `Parchi e aree protette conservano paesaggi e biodiversità: la Lapponia tutela ambienti artici e cultura saami; Doñana protegge una zona umida; Engadina, Foresta Bavarese e Peak District sono altri esempi europei.`
        ], "Nord, Atlantico, Continente, Mediterraneo e Montagna: il clima guida la lettura degli ambienti.")
      ]
    },
    {
      id: "g4",
      number: 4,
      title: "L'Italia: gli ambienti naturali",
      subtitle: "Rilievi, pianure, acque e fragilità del territorio",
      minutes: 12,
      sections: [
        section("Una penisola fragile", [
          `L'Italia si estende nel Mediterraneo tra le Alpi e le isole maggiori Sicilia e Sardegna. Il territorio è soprattutto collinare e montuoso. Si trova tra la placca euroasiatica e quella africana: per questo terremoti e vulcani sono frequenti.`,
          `Il clima alpino è freddo; quello padano è continentale e nebbioso; nell'Appennino cambia con la quota; lungo molte coste domina il clima mediterraneo.`
        ]),
        section("Alpi, Appennini e pianure", [
          `Le Alpi formano un arco giovane, ricco di ghiacciai e cime oltre i 4000 metri. Gli Appennini percorrono la penisola per circa 1500 chilometri e sono più bassi; l'erosione ha formato calanchi e crete in alcune zone.`,
          `La Pianura Padana è la più vasta pianura italiana ed è formata dai detriti dei fiumi. Nell'alta pianura il terreno è permeabile, nella bassa pianura è impermeabile e compaiono risorgive. Maremma, Agro Pontino, Tavoliere e Piana di Metaponto sono pianure minori.`
        ]),
        section("Acque, coste e consumo di suolo", [
          `Po e Adige, alimentati anche da ghiacciai, sono fiumi alpini perenni. Arno e Tevere sono appenninici e hanno portata più variabile. Garda, Maggiore e Como sono laghi glaciali; Bolsena, Bracciano e Nemi vulcanici; il Trasimeno è tettonico.`,
          `Frane e alluvioni diventano più pericolose con cementificazione e consumo di suolo. Costruire senza rispettare corsi d'acqua ed equilibrio del terreno aumenta il rischio idrogeologico. Anche l'urbanizzazione delle coste può produrre erosione e una città lineare lungo il litorale.`
        ], "La fragilità naturale italiana è aggravata quando l'uso del suolo non rispetta il territorio.")
      ]
    },
    {
      id: "g5",
      number: 5,
      title: "Geostoria dello spazio europeo",
      subtitle: "Come il territorio si è formato dall'antichità a oggi",
      minutes: 22,
      sections: [
        section("Un continente aperto", [
          `I confini dell'Europa sono cambiati nel tempo e le sue culture sono nate da incontri e fratture. La fitta rete di città è l'elemento umano più caratteristico del territorio. Un altro tratto importante è il welfare state, con servizi pubblici come sanità, istruzione e pensioni per ridurre le disuguaglianze.`
        ]),
        section("Eredità greca e romana", [
          `I Greci fondarono porti e colonie sulle coste mediterranee. Le poleis sperimentarono forme politiche diverse; Atene sviluppò la democrazia dei cittadini maschi liberi. Filosofia, geometria e astronomia contribuirono alla cultura occidentale.`,
          `Roma unì territori vastissimi in un solo Stato, costruì strade, ponti, acquedotti e città. Latino, diritto romano, moneta e rete stradale favorirono l'integrazione, anche se l'influenza fu più forte nelle aree centrali che ai confini settentrionali e orientali.`
        ]),
        section("Il Medioevo e la frattura tra Est e Ovest", [
          `Dopo il 476 l'Occidente conobbe regni romano-germanici e feudalesimo, basato su rapporti tra sovrano, signori e vassalli. Carlo Magno costruì un grande impero, ma l'unità durò poco. Chiesa e monasteri conservarono cultura e trasformarono campagne; dopo l'anno Mille città e commerci ripresero.`,
          `Comuni, repubbliche marinare e Lega anseatica crearono reti di scambio. In Oriente l'Impero bizantino sopravvisse fino al 1453. Lo scisma del 1054 separò Chiesa cattolica e ortodossa e approfondì la distanza tra le due Europe.`
        ]),
        section("Età moderna e colonialismo", [
          `Le esplorazioni oceaniche spostarono i traffici verso Atlantico, Americhe, Africa e Asia. Spagna e Portogallo guidarono la prima fase coloniale; poi si affermarono Olanda, Inghilterra e Francia. Colonie e madrepatrie formarono un sistema economico disuguale: materie prime e lavoro a basso costo arricchivano gli Stati europei.`,
          `La Riforma protestante di Lutero e lo scisma anglicano crearono nuove fratture religiose e guerre. Intanto si consolidò un'Europa composta da molti Stati.`
        ]),
        section("Industria, guerre e perdita del primato", [
          `La Rivoluzione industriale iniziò in Inghilterra nel Settecento e diffuse capitalismo, fabbriche, borghesia imprenditoriale e classe operaia. Medicina, igiene e tecnologia aumentarono speranza di vita e popolazione; nacquero sindacati e movimenti dei lavoratori.`,
          `Le due guerre mondiali distrussero imperi, economie e città. Dopo il 1945 Europa e colonie persero centralità davanti a Stati Uniti e URSS, mentre la decolonizzazione ridisegnò il mondo.`
        ]),
        section("La formazione dell'Italia", [
          `Dopo Roma la penisola rimase divisa per secoli, pur conservando un ruolo culturale e commerciale importante. Tra Settecento e Ottocento nacque il Risorgimento. Nel 1861 il Regno di Sardegna guidò l'unificazione; Roma fu annessa al Regno d'Italia nel 1870 e divenne capitale nel 1871. Dopo la Prima guerra mondiale furono annessi nuovi territori. Nel 1946 un referendum trasformò l'Italia in repubblica.`
        ], "La geostoria legge il paesaggio europeo come risultato di civiltà, scambi, conflitti e istituzioni.")
      ]
    },
    {
      id: "g6",
      number: 6,
      title: "I paesaggi tradizionali",
      subtitle: "Come l'uomo ha trasformato Europa e Italia nei secoli",
      minutes: 16,
      sections: [
        section("Monasteri, castelli e vie", [
          `Strade romane, monasteri e castelli hanno organizzato il territorio europeo. Nel Medioevo i monaci bonificarono e coltivarono terre abbandonate, introdussero tecniche agricole e favorirono la nascita di villaggi. I castelli controllavano terre, scambi e pedaggi e attiravano artigiani e contadini.`
        ]),
        section("I paesaggi agrari", [
          `Nei campi aperti, o open field, terreni non recintati circondano villaggi rurali. Nei campi chiusi, o enclosure e bocage, siepi, alberi e muretti separano proprietà e pascoli.`,
          `Latifondi estensivi caratterizzano parti del Sud Italia e della penisola iberica. Nell'Italia centrale la mezzadria divideva le terre in poderi lavorati da famiglie contadine. Coltura promiscua, orto mediterraneo e agricoltura asciutta adattavano coltivazioni e acqua al clima. Nei Paesi Bassi i polder hanno strappato terre al mare con dighe e bonifiche.`
        ]),
        section("Città antiche e medievali", [
          `Le città romane avevano spesso pianta regolare: cardo e decumano si incrociavano nel foro. Dopo la crisi dell'Impero, molte città si spopolarono; dall'XI secolo commerci e crescita demografica ne favorirono la rinascita.`,
          `Le città medievali erano circondate da mura, con strade strette e una piazza dominata da cattedrale e palazzo comunale. Venezia, Genova, città anseatiche e centri delle Fiandre divennero potenti grazie ai commerci.`
        ]),
        section("Grand Tour e paesaggi industriali", [
          `Dal Seicento i giovani aristocratici compivano il Grand Tour per completare la formazione. L'Italia era la meta principale per antichità, Rinascimento, clima e paesaggi; la scoperta di Pompei ed Ercolano aumentò l'interesse.`,
          `La Rivoluzione industriale trasformò campagne e città. Fabbriche vicine a carbone e corsi d'acqua attirarono popolazione; periferie e slums erano sovraffollati e privi di servizi. Strade, canali, ferrovie, porti e navi a vapore ridisegnarono il paesaggio. Molte antiche aree industriali sono oggi riconvertite.`
        ], "Ogni paesaggio conserva tracce sovrapposte di epoche e modi di produrre diversi.")
      ]
    },
    {
      id: "g7",
      number: 7,
      title: "La popolazione europea",
      subtitle: "Densità, crescita zero, invecchiamento ed epidemie",
      minutes: 15,
      sections: [
        section("Distribuzione e urbanizzazione", [
          `L'Europa ha una densità media elevata, ma gli abitanti non sono distribuiti in modo uniforme. Le maggiori concentrazioni si trovano nell'Europa centro-occidentale e in aree costiere; montagne e regioni settentrionali sono meno abitate. Circa tre europei su quattro vivono in aree urbane.`
        ]),
        section("La transizione demografica", [
          `Per secoli crescita, carestie ed epidemie si alternarono. Dopo l'anno Mille tecniche agricole migliori sostennero la popolazione; dal Settecento industrializzazione, medicina e igiene produssero una crescita molto rapida. Le guerre mondiali causarono milioni di morti, seguite dal baby boom degli anni Cinquanta e Sessanta.`,
          `Oggi in molti Paesi il tasso di fecondità è sotto il livello di ricambio. La crescita zero nasce da natalità e mortalità quasi equivalenti; senza immigrazione alcuni Stati perderebbero abitanti. Costi dei figli, urbanizzazione, lavoro femminile e rinvio della maternità contribuiscono al calo delle nascite. Politiche familiari più efficaci possono attenuarlo.`
        ]),
        section("Invecchiamento e Italia", [
          `L'aumento della speranza di vita e la bassa natalità fanno crescere la quota di anziani. Questo aumenta la pressione su sanità, assistenza e pensioni e riduce la popolazione attiva.`,
          `L'Italia presenta una piramide dell'età quasi rovesciata: pochi giovani e molti over 65. L'immigrazione ha compensato in parte il saldo naturale negativo, ma il rapporto tra anziani e giovani resta tra i più alti.`
        ]),
        section("Epidemie e pandemia", [
          `Peste antonina, peste di Giustiniano, peste nera e influenza “spagnola” modificarono profondamente popolazione ed economia. Isolamento, quarantena e lazzaretti furono usati prima di vaccini, antibiotici e igiene moderna.`,
          `Il Covid-19 raggiunse l'Europa nel 2020. Lockdown, chiusure, distanziamento e mascherine limitarono i contagi ma ebbero costi sociali ed economici. Vaccini sviluppati rapidamente, lavoro da remoto e didattica a distanza segnarono la risposta alla crisi.`
        ], "Invecchiamento significa più anziani non solo perché si vive più a lungo, ma anche perché nascono meno bambini.")
      ]
    },
    {
      id: "g8",
      number: 8,
      title: "I movimenti migratori",
      subtitle: "Chi parte, chi arriva e come cambia la società",
      minutes: 13,
      sections: [
        section("Emigrare e immigrare", [
          `Emigrare significa lasciare il luogo in cui si vive; immigrare significa entrare in un Paese per stabilirvisi. Le cause possono essere economiche, politiche, religiose o ambientali. Tra il 1840 e il 1932 circa cinquanta milioni di europei partirono soprattutto verso Americhe e Australia.`,
          `Italiani, tedeschi, irlandesi, spagnoli e portoghesi furono tra i principali emigranti. Dopo la Seconda guerra mondiale molti italiani raggiunsero Germania, Svizzera, Belgio e Francia. Guerre e persecuzioni produssero anche migrazioni forzate.`
        ]),
        section("L'Europa come terra d'arrivo", [
          `Negli ultimi decenni l'Europa occidentale è diventata una grande area d'immigrazione. I migranti economici cercano lavoro; profughi e rifugiati fuggono da guerre o persecuzioni e possono chiedere asilo; i ricongiungimenti familiari permettono di raggiungere parenti già residenti. Paesi un tempo di emigrazione, come Italia e Spagna, hanno vissuto un'inversione migratoria.`
        ]),
        section("Migrazioni interne e fuga dei cervelli", [
          `In Italia, tra 1951 e 1971, milioni di persone si spostarono dal Sud verso il triangolo industriale Milano-Torino-Genova e verso Roma. Oggi continuano movimenti regionali e interregionali. La fuga dei cervelli riguarda giovani qualificati che cercano all'estero migliori opportunità.`
        ]),
        section("Integrazione e società multietnica", [
          `Una società multietnica comprende persone di culture diverse. Il modello assimilazionista chiede di adottare lingua e valori del Paese ospitante; il modello pluralista valorizza la conservazione delle differenze; il vecchio modello del lavoratore ospite considerava l'immigrazione temporanea.`,
          `Integrazione, seconde generazioni e cittadinanza richiedono diritti, scuola, lavoro e partecipazione. Xenofobia e razzismo nascono quando la diversità viene trasformata in minaccia.`
        ], "Le migrazioni non sono un'eccezione recente: hanno modellato l'Europa in ogni epoca.")
      ]
    },
    {
      id: "g9",
      number: 9,
      title: "Le città dell'Europa di oggi",
      subtitle: "Metropoli, reti urbane, città diffusa e smart city",
      minutes: 12,
      sections: [
        section("Metropoli e conurbazioni", [
          `L'Europa è fortemente urbanizzata. L'espansione può unire centri vicini in una conurbazione, come nella Ruhr. La Randstad olandese collega Amsterdam, Rotterdam, L'Aia, Utrecht e altri centri. Più metropoli connesse formano grandi regioni urbane.`
        ]),
        section("Reti e gerarchie urbane", [
          `Una rete urbana è l'insieme delle città collegate da movimenti di persone, merci, capitali e informazioni. In un sistema monocentrico una capitale domina, come Parigi o Londra. In un sistema policentrico le funzioni si dividono: in Italia Roma è capitale politica e Milano centro economico; in Germania Berlino, Francoforte, Amburgo e Monaco hanno ruoli diversi.`,
          `Le città maggiori offrono servizi rari e avanzati, mentre i centri minori forniscono servizi di base. I pendolari si spostano ogni giorno tra residenza e luogo di lavoro o studio.`
        ]),
        section("Il paesaggio metropolitano", [
          `Il centro storico concentra monumenti e spazi antichi, ma turismo e prezzi possono allontanare i residenti e trasformarlo in quartiere vetrina. Il CBD, quartiere centrale degli affari, ospita banche e grandi imprese; periferie, industrie, ospedali, stadi e interporti occupano spazi più esterni.`
        ]),
        section("Città diffusa e smart city", [
          `La città diffusa si estende lungo vie di comunicazione con villette, capannoni, centri commerciali e infrastrutture, senza un centro netto. Produce consumo di suolo, traffico e servizi più difficili da organizzare.`,
          `Il paradosso urbano è che la città offre lavoro, studio e cultura ma concentra anche inquinamento, costi e disuguaglianze. Le smart city usano tecnologie, pianificazione e partecipazione per migliorare traffico, energia, rifiuti e mobilità condivisa.`
        ], "Una città è un nodo di relazioni: conta per ciò che collega e per le funzioni che offre.")
      ]
    },
    {
      id: "g10",
      number: 10,
      displayNumber: 11,
      title: "L'economia europea",
      subtitle: "Ricchezza, innovazione e differenze territoriali",
      minutes: 18,
      sections: [
        section("Un'economia avanzata", [
          `L'Europa conserva un ruolo importante nella ricchezza e negli scambi mondiali. Ospita multinazionali dell'energia, automobile, alimentazione, banche e distribuzione. Le funzioni di comando si concentrano in grandi aree urbane.`,
          `L'Industria 4.0 collega macchine, oggetti e persone attraverso reti digitali. Internet delle cose, big data, stampa 3D, realtà aumentata e robot collaborativi formano sistemi cyber-fisici e trasformano produzione e servizi.`
        ]),
        section("Differenze economiche e sociali", [
          `La ricchezza non è uniforme. L'Europa occidentale concentra tecnologie, attività qualificate e grandi imprese; varie aree orientali e periferiche hanno economie più fragili. PIL pro capite e ISU aiutano a confrontare il benessere, ma le medie nascondono differenze.`,
          `Il cuore economico europeo va dall'Inghilterra meridionale alla Pianura Padana e dalla Francia orientale alla Germania occidentale. Capitali, ricerca e lavoro qualificato si concentrano nelle metropoli, mentre alcune aree rurali rischiano spopolamento. Povertà, precarietà giovanile e differenze di genere mostrano che crescita e benessere non coincidono.`
        ]),
        section("Covid, lavoro e settori", [
          `La pandemia del 2020 colpì turismo, ristorazione, cultura e attività in presenza. Aumentarono disoccupazione, povertà, didattica a distanza, lavoro da remoto e gig economy. Sostegni pubblici limitarono i danni ma aumentarono spesa e debito.`,
          `Primario, secondario e terziario comprendono rispettivamente produzione di materie prime, trasformazione industriale e servizi. Nei Paesi avanzati domina il terziario. Meccanizzazione, automazione e delocalizzazione riducono addetti agricoli e industriali. I NEET sono giovani che non studiano, non lavorano e non seguono formazione.`
        ]),
        section("Gli squilibri italiani", [
          `La questione meridionale indica lo storico divario tra Centro-Nord e Mezzogiorno. Dal 1950 la Cassa per il Mezzogiorno finanziò bonifiche e grandi impianti, ma molte “cattedrali nel deserto” rimasero isolate e crearono pochi posti.`,
          `Oggi la divisione Nord-Sud non basta: esistono poli dinamici, comunità prospere, territori resilienti, aree fragili e zone depresse. La frattura tra città forti e aree interne in declino attraversa più regioni.`
        ], "Per valutare un'economia servono produzione, distribuzione della ricchezza, lavoro e qualità della vita.")
      ]
    },
    {
      id: "g11",
      number: 11,
      displayNumber: 12,
      title: "I settori economici",
      subtitle: "Agricoltura, industria, servizi e il caso italiano",
      minutes: 18,
      sections: [
        section("Il settore primario", [
          `L'agricoltura europea di mercato è spesso intensiva: usa pochi lavoratori ma molti capitali, macchine e tecnologie. Agricoltura, allevamento, industria alimentare e distribuzione formano l'agroindustria. Pianure, clima temperato, irrigazione e politiche europee sostengono la produttività.`,
          `Aziende grandi e tecnologiche prevalgono nel Centro-Ovest; nel Sud-Est sopravvivono più aziende familiari. Allevamento intensivo è comune nell'Europa occidentale e nordica; ovini e caprini sono più diffusi in aree mediterranee e orientali.`
        ]),
        section("Industria ed energia", [
          `L'Europa affronta la concorrenza di Paesi con costi inferiori, ma mantiene punti di forza in qualità, formazione e tecnologia. La scarsità di materie prime e l'alto consumo creano un deficit energetico. La transizione energetica sposta gradualmente la produzione da combustibili fossili a fonti rinnovabili.`,
          `Germania, Italia e Francia sono grandi potenze industriali. Chimica, farmaceutica, macchinari, meccanica di precisione e automobile sono settori forti; aerospazio, robotica e biotecnologie dipendono dagli investimenti in ricerca. Green Deal e Agenda 2030 collegano innovazione e sostenibilità.`
        ]),
        section("Terziario e quaternario", [
          `La terziarizzazione è la crescita dei servizi. Esistono servizi per persone, collettività e imprese; i servizi avanzati si concentrano nelle grandi città. Il quaternario comprende funzioni di comando politico ed economico, grandi banche, governi, borse e multinazionali.`,
          `Turismo balneare, montano, culturale, religioso e naturalistico ha grande peso. Ricerca e brevetti indicano capacità di innovazione.`
        ]),
        section("L'industria italiana", [
          `Dopo la Seconda guerra mondiale il boom del 1955-1963 trasformò l'Italia. Il triangolo Milano-Torino-Genova attirò milioni di lavoratori. Negli anni Settanta crebbero Nord-Est e Centro con distretti di piccole e medie imprese.`,
          `L'Italia importa energia e materie prime ed esporta macchinari, mezzi di trasporto, alimenti, farmaci, moda e design. Punti deboli sono bassa spesa in ricerca e dimensione ridotta di molte imprese. L'economia circolare punta su riuso, riparazione e riciclaggio invece del modello “produci, usa e getta”.`
        ], "Terziarizzazione non significa fine dell'industria: industria e servizi avanzati dipendono sempre più l'una dagli altri.")
      ]
    },
    {
      id: "g12",
      number: 12,
      displayNumber: 13,
      title: "L'Unione Europea e la cittadinanza",
      subtitle: "Dalla CECA alle istituzioni, alle politiche e ai diritti comuni",
      minutes: 20,
      sections: [
        section("Le tappe dell'integrazione", [
          `Dopo la Seconda guerra mondiale gli Stati dell'Europa occidentale cercarono cooperazione per evitare nuovi conflitti e ricostruire l'economia. Con il Trattato di Parigi nacque nel 1952 la CECA tra Belgio, Paesi Bassi, Lussemburgo, Francia, Germania Ovest e Italia. Mettere in comune carbone e acciaio rendeva più difficile preparare una nuova guerra.`,
          `I Trattati di Roma del 1957 crearono CEE ed EURATOM. La CEE puntava al mercato comune e alla libera circolazione. Nel 1979 il Parlamento fu eletto direttamente. Maastricht, entrato in vigore nel 1993, creò l'Unione Europea e preparò l'unione monetaria. L'euro circola come moneta fisica dal 2002.`
        ]),
        section("Come funziona l'UE", [
          `L'UE è sovranazionale: gli Stati restano sovrani ma affidano alcune competenze a istituzioni comuni. I regolamenti si applicano direttamente; le direttive fissano risultati che gli Stati devono tradurre in norme nazionali.`,
          `La Commissione propone leggi e gestisce politiche; il Consiglio dell'UE riunisce i ministri e approva le leggi insieme al Parlamento, eletto dai cittadini. Il Consiglio europeo dei capi di Stato o di governo indica gli orientamenti generali. BCE, Corte di giustizia e Corte dei conti svolgono funzioni monetarie, giuridiche e di controllo.`
        ]),
        section("Politiche comuni", [
          `La Politica agricola comune sostiene agricoltori e sicurezza alimentare. La politica di coesione finanzia infrastrutture, innovazione e servizi nelle regioni più deboli. Il Green Deal collega riduzione delle emissioni, uso efficiente delle risorse e tutela della biodiversità. L'UE interviene anche in ricerca, formazione, trasporti e aiuti umanitari.`
        ]),
        section("Cittadinanza e integrazione", [
          `Le società europee sono plurali per migrazioni, minoranze e cambiamenti storici. Assimilazione, multiculturalismo e integrazione interculturale sono modelli diversi: l'approccio interculturale insiste su dialogo, partecipazione e adattamento reciproco. Integrazione significa scuola, lingua, lavoro, salute, abitazione e pari opportunità.`,
          `La cittadinanza nazionale attribuisce diritti e doveri. Quella europea completa, non sostituisce, la cittadinanza di uno Stato membro e permette di circolare, vivere, studiare e lavorare nell'Unione alle condizioni previste. Chi risiede in un altro Stato membro può votare alle elezioni comunali ed europee. Schengen elimina normalmente molti controlli alle frontiere interne, ma non coincide esattamente con l'UE.`
        ], "L'Unione Europea nasce per sostituire il conflitto con regole, istituzioni e cooperazione.")
      ]
    }
  ];

  const historyQuestions = [
    choice("hq1", "h1", "Che cosa significa in origine la parola greca historía?", ["Memoria", "Indagine o ricerca", "Legge", "Calendario"], 1, "La storia nasce come indagine fondata sulle tracce del passato."),
    choice("hq2", "h1", "Quale tra queste è una fonte materiale?", ["Una cronaca", "Una testimonianza orale", "Una moneta", "Una fotografia"], 2, "Monete, utensili, edifici e tombe sono reperti materiali."),
    choice("hq3", "h1", "Perché l'invenzione della scrittura segna convenzionalmente l'inizio della storia?", ["Elimina le fonti orali", "Permette documenti più precisi e duraturi", "Fa nascere l'agricoltura", "Introduce l'anno zero"], 1, "Registri, leggi e archivi ampliano le fonti disponibili."),
    choice("hq4", "h1", "Quali anni comprende il V secolo a.C.?", ["500-401 a.C.", "501-600 a.C.", "400-301 a.C.", "5-95 a.C."], 0, "Nei secoli a.C. il conteggio procede verso numeri più piccoli."),
    choice("hq5", "h1", "Qual è il compito corretto dello storico?", ["Inventare ciò che manca", "Usare solo fonti scritte", "Confrontare e interpretare fonti attendibili", "Imparare tutte le date"], 2, "Il metodo storico raccoglie, verifica e mette in relazione fonti diverse."),

    choice("hq6", "h2", "Che cosa spiega la selezione naturale di Darwin?", ["Le specie restano immutabili", "Gli individui più adatti hanno più possibilità di riprodursi", "L'uomo discende dalle scimmie attuali", "Ogni cambiamento è improvviso"], 1, "Le caratteristiche vantaggiose possono essere trasmesse ai discendenti."),
    choice("hq7", "h2", "Quale trasformazione caratterizza soprattutto il Neolitico?", ["La caccia ai grandi animali", "La nascita di agricoltura e allevamento", "La scomparsa dei villaggi", "L'uso esclusivo della pietra scheggiata"], 1, "La rivoluzione agricola portò produzione del cibo e sedentarizzazione."),
    choice("hq8", "h2", "Che cos'era una città-Stato sumera?", ["Una provincia persiana", "Una città autonoma con territorio e governo propri", "Una colonia fenicia", "Un accampamento nomade"], 1, "Ur, Uruk e Lagash erano comunità politiche indipendenti."),
    choice("hq9", "h2", "Per che cosa è ricordato soprattutto Hammurabi?", ["L'invenzione dell'alfabeto", "Una raccolta di 282 leggi", "La biblioteca di Ninive", "La strada reale"], 1, "Il codice regolava proprietà, famiglia, lavoro, debiti e reati."),
    choice("hq10", "h2", "Come amministrò Dario il vasto impero persiano?", ["Lo divise in satrapie", "Abolì tutte le tradizioni locali", "Eliminò strade e monete", "Affidò ogni potere ai sacerdoti"], 0, "Satrapie, controllori e rete stradale tenevano unito l'impero."),
    choice("hq11", "h2", "Quale caratteristica rese fragile l'impero assiro?", ["L'assenza di esercito", "Il controllo basato su terrore e deportazioni", "La mancanza di città", "La tolleranza verso tutti i ribelli"], 1, "La repressione funzionava nel breve periodo ma alimentava rivolte."),

    choice("hq12", "h3", "Perché l'Egitto è definito “dono del Nilo”?", ["Il fiume proteggeva da ogni invasione", "Piene e limo rendevano fertile la valle", "Il Nilo nasce nel Mediterraneo", "Le piramidi erano costruite nel fiume"], 1, "Il limo lasciato dalle piene sosteneva l'agricoltura."),
    choice("hq13", "h3", "Chi unificò Alto e Basso Egitto intorno al 3100 a.C.?", ["Ramses II", "Narmer", "Akhenaton", "Ahmose"], 1, "Narmer, identificato anche con Menes, avviò il regno unito."),
    choice("hq14", "h3", "Che cosa significa che l'Egitto era uno Stato teocratico?", ["Il potere era diviso tra città", "Potere politico e religioso erano uniti", "Governavano soltanto gli scribi", "Non esistevano sacerdoti"], 1, "Il faraone era insieme sovrano e figura divina."),
    choice("hq15", "h3", "Qual era il compito principale degli scribi?", ["Guidare la cavalleria", "Registrare tasse, raccolti e ordini", "Costruire solo piramidi", "Mummificare i faraoni"], 1, "La scrittura li rendeva essenziali per la burocrazia."),
    choice("hq16", "h3", "Perché gli Egizi praticavano la mummificazione?", ["Per preparare il corpo alla vita ultraterrena", "Per punire i nemici", "Per imparare i geroglifici", "Per fertilizzare il suolo"], 0, "La conservazione del corpo era necessaria secondo le credenze sull'aldilà."),

    choice("hq17", "h4", "Perché la Palestina era una regione strategica?", ["Era isolata dal mare", "Collegava Egitto, Mesopotamia e Asia Minore", "Non aveva vie commerciali", "Era un unico grande impero"], 1, "La sua posizione la rendeva luogo di transito e contesa."),
    choice("hq18", "h4", "Che cosa indica l'esodo nella tradizione ebraica?", ["La fondazione di Cartagine", "La liberazione dall'Egitto guidata da Mosè", "La conquista assira", "Il viaggio di Abramo a Babilonia"], 1, "Durante l'esodo Mosè avrebbe ricevuto le Tavole della Legge."),
    choice("hq19", "h4", "Quale innovazione fenicia ebbe una grande eredità culturale?", ["Il carro da guerra", "L'alfabeto fonetico", "La ziqqurat", "La mummificazione"], 1, "Greci e Romani adattarono l'alfabeto fenicio."),
    choice("hq20", "h4", "Quale coppia associa correttamente popolo e caratteristica?", ["Ebrei-talassocrazia", "Fenici-monoteismo", "Ebrei-monoteismo", "Fenici-piramidi"], 2, "Il monoteismo è centrale nella religione ebraica."),
    choice("hq21", "h4", "Quale città fu una colonia fenicia molto importante?", ["Sparta", "Cartagine", "Menfi", "Ninive"], 1, "Cartagine nacque sulla costa dell'Africa settentrionale."),

    choice("hq22", "h5", "Che cosa significa talassocrazia?", ["Governo dei sacerdoti", "Dominio sul mare", "Regno diviso in satrapie", "Potere degli opliti"], 1, "La forza minoica dipendeva da navi e commerci."),
    choice("hq23", "h5", "Quale funzione avevano i palazzi minoici?", ["Solo religiosa", "Solo militare", "Politica, economica e amministrativa", "Esclusivamente funeraria"], 2, "Palazzi come Cnosso contenevano magazzini, laboratori e uffici."),
    choice("hq24", "h5", "Chi era il wànax nella società micenea?", ["Il sovrano principale", "Uno schiavo", "Un mercante fenicio", "Il capo di un'orchestra"], 0, "Il wànax dominava il sistema palaziale miceneo."),
    choice("hq25", "h5", "Perché il periodo dopo il crollo miceneo è detto “secoli bui”?", ["Non esisteva il Sole", "Ci sono poche fonti scritte", "Tutte le città erano sotterranee", "I Greci non commerciavano mai"], 1, "La scrittura scomparve per alcuni secoli e le fonti diminuirono."),
    choice("hq26", "h5", "Quale scrittura amministrativa usarono i Micenei?", ["Geroglifici egizi", "Lineare B", "Alfabeto latino", "Cuneiforme persiano"], 1, "La Lineare B è stata decifrata e registra attività dei palazzi."),

    choice("hq27", "h6", "Perché l'ambiente greco favorì poleis indipendenti?", ["Le pianure erano tutte unite", "Montagne e coste separavano le comunità", "Non esistevano isole", "Il mare impediva ogni contatto"], 1, "Rilievi e vallate dividevano, mentre il mare collegava."),
    choice("hq28", "h6", "Perché iniziò la seconda colonizzazione greca?", ["Per scarsità di terre e tensioni sociali", "Per fuggire dai Persiani nel V secolo", "Per abolire la scrittura", "Per costruire piramidi"], 0, "Crescita demografica e conflitti sulla terra spinsero a fondare nuove poleis."),
    choice("hq29", "h6", "Che cos'era l'agorà?", ["La parte alta fortificata", "La piazza della vita pubblica e del mercato", "Una nave da guerra", "Il consiglio spartano"], 1, "Nell'agorà si commerciava, si discuteva e si tenevano assemblee."),
    choice("hq30", "h6", "Chi erano gli opliti?", ["Sacerdoti di Delfi", "Cittadini-soldati della falange", "Schiavi persiani", "Navigatori fenici"], 1, "Il loro ruolo militare sostenne richieste di partecipazione politica."),
    choice("hq31", "h6", "Che cosa indica il panellenismo?", ["Il dominio di Atene", "Il senso di appartenenza culturale dei Greci", "Una legge persiana", "La divisione tra Dori e Ioni"], 1, "Lingua, miti, culti e giochi univano comunità politicamente divise."),

    choice("hq32", "h7", "Quale gruppo spartano aveva pieni diritti politici?", ["Iloti", "Perieci", "Spartiati", "Meteci"], 2, "Gli spartiati erano cittadini-soldati; perieci e iloti erano esclusi."),
    choice("hq33", "h7", "Quale istituzione spartana controllava anche l'operato dei re?", ["Gli efori", "La bulé", "L'Areopago", "L'ecclesia"], 0, "I cinque efori vigilavano sulle leggi e sui re."),
    choice("hq34", "h7", "Quale riforma fu introdotta da Solone?", ["La schiavitù per debiti", "La cancellazione dei debiti e classi di reddito", "L'abolizione dell'assemblea", "Le satrapie"], 1, "Solone ridusse la crisi dei contadini e ampliò la partecipazione."),
    choice("hq35", "h7", "Che cosa fece Clistene nel 508 a.C.?", ["Creò tribù territoriali e rafforzò bulé ed ecclesia", "Fondò Sparta", "Conquistò la Persia", "Scrisse l'Iliade"], 0, "La sua riforma ridusse il peso delle famiglie aristocratiche."),
    choice("hq36", "h7", "Chi erano i meteci ad Atene?", ["Schiavi pubblici", "Stranieri residenti senza diritti politici", "Re-sacerdoti", "Soldati spartani"], 1, "Potevano lavorare e vivere in città, ma non partecipare alla politica."),

    choice("hq37", "h8", "Quale evento precedette le guerre persiane?", ["La rivolta ionica", "La guerra del Peloponneso", "La conquista romana", "La fondazione di Cartagine"], 0, "Atene aiutò gli Ioni e Dario decise di punirla."),
    choice("hq38", "h8", "Chi guidò gli Ateniesi nella battaglia di Maratona?", ["Temistocle", "Milziade", "Leonida", "Serse"], 1, "Milziade organizzò la falange che accerchiò i Persiani."),
    choice("hq39", "h8", "Perché la flotta ateniese vinse a Salamina?", ["Combatté in pianura", "Attirò le navi persiane in uno spazio stretto", "Ricevette carri dagli Ittiti", "I Persiani non avevano navi"], 1, "Le triremi greche erano più manovrabili nello stretto."),
    choice("hq40", "h8", "Quale conseguenza ebbe la vittoria sui Persiani per Atene?", ["Perse tutta la flotta", "Divenne il centro di una nuova alleanza navale", "Fu governata da Dario", "Abbandonò il mare"], 1, "Prestigio e potenza navale prepararono la supremazia ateniese."),
    choice("hq41", "h8", "Quale sequenza è corretta?", ["Salamina-Maratona-rivolta ionica", "Rivolta ionica-Maratona-Termopili e Salamina-Platea", "Platea-rivolta ionica-Qadesh", "Maratona-Qadesh-Salamina"], 1, "La rivolta iniziò nel 499, Maratona fu nel 490, la seconda guerra nel 480-479 a.C.")
  ];

  const geographyQuestions = [
    choice("gq1", "g0", "Che cosa studia soprattutto la geografia?", ["Solo i nomi dei fiumi", "Le relazioni tra comunità umane e ambienti", "Soltanto i confini politici", "Esclusivamente il clima"], 1, "La geografia mette in relazione elementi naturali e attività umane."),
    choice("gq2", "g0", "Qual è la differenza tra territorio e paesaggio?", ["Sono sinonimi perfetti", "Il territorio è organizzato; il paesaggio è il suo aspetto visibile", "Il paesaggio comprende solo confini", "Il territorio è sempre naturale"], 1, "Il territorio comprende anche organizzazione, economia e amministrazione."),
    choice("gq3", "g0", "Quale tra questi è un elemento umano?", ["Un fiume", "Una catena montuosa", "Un porto", "Il clima"], 2, "Porti, strade, città e campi sono interventi umani."),
    choice("gq4", "g0", "Quale può essere una conseguenza negativa della trasformazione del territorio?", ["Consumo di suolo", "Comparsa dei punti cardinali", "Riduzione della scala cartografica", "Formazione dei meridiani"], 0, "Cementificazione e uso squilibrato del territorio possono creare rischi."),

    choice("gq5", "g1", "Perché una carta geografica è definita simbolica?", ["Perché è sempre segreta", "Perché usa colori e segni convenzionali", "Perché non ha una scala", "Perché mostra solo simboli religiosi"], 1, "La legenda spiega il significato dei simboli."),
    choice("gq6", "g1", "A che cosa serve un GIS?", ["A confrontare dati diversi sullo stesso territorio", "A misurare soltanto le temperature", "A sostituire ogni carta", "A calcolare i secoli"], 0, "Un GIS sovrappone e mette in relazione informazioni geografiche."),
    choice("gq7", "g1", "Quale indicatore considera anche istruzione e speranza di vita?", ["PIL", "ISU", "Saldo naturale", "Densità"], 1, "L'Indice di sviluppo umano va oltre la sola produzione economica."),
    choice("gq8", "g1", "Che cosa mostra una piramide delle età?", ["Le montagne di uno Stato", "La popolazione per sesso e fasce d'età", "Le esportazioni", "Le precipitazioni"], 1, "Forma della base e della parte alta aiutano a capire natalità e invecchiamento."),

    choice("gq9", "g2", "Perché l'Europa è una penisola dell'Eurasia?", ["È completamente separata dall'Asia", "Europa e Asia formano un'unica massa continentale", "È circondata solo dal Mediterraneo", "Non ha confini convenzionali"], 1, "Il confine orientale europeo è in gran parte stabilito per convenzione."),
    choice("gq10", "g2", "Quale catena è formata da montagne giovani?", ["Urali", "Massiccio Centrale", "Alpi", "Rilievi scozzesi"], 2, "Le Alpi hanno cime alte e profili più aspri."),
    choice("gq11", "g2", "Qual è la differenza tra delta ed estuario?", ["Il delta accumula detriti; l'estuario è una foce a imbuto", "Il delta è sempre artificiale", "L'estuario si trova solo nei laghi", "Non c'è differenza"], 0, "Il comportamento di fiume, detriti e mare produce forme diverse."),
    choice("gq12", "g2", "Quale clima ha estati calde e secche e inverni miti?", ["Oceanico", "Subartico", "Mediterraneo", "Polare"], 2, "È il clima tipico delle coste mediterranee."),

    choice("gq13", "g3", "Dove si trovano tundra e taiga?", ["Nell'Europa del Nord", "Solo nel Mediterraneo", "Nelle pianure italiane", "Sulle coste atlantiche meridionali"], 0, "Tundra e taiga corrispondono ai climi freddi del Nord."),
    choice("gq14", "g3", "Che cos'è il bocage?", ["Una foresta di conifere", "Un paesaggio di prati e campi delimitati da siepi", "Una steppa arida", "Un ghiacciaio"], 1, "È tipico di varie regioni dell'Europa atlantica."),
    choice("gq15", "g3", "Perché la steppa è importante per l'agricoltura?", ["Ha terreni spesso molto fertili", "È coperta da ghiaccio", "Riceve piogge continue", "Non ha vegetazione"], 0, "Le grandi distese erbose orientali hanno favorito i cereali."),
    choice("gq16", "g3", "Che cosa sono le fasce altimetriche?", ["Zone che cambiano con l'altitudine", "Confini tra Stati", "Tipi di industrie", "Rotte marittime"], 0, "Clima e vegetazione cambiano salendo dal fondovalle alle vette."),

    choice("gq17", "g4", "Perché l'Italia è esposta a terremoti e vulcani?", ["È priva di montagne", "Si trova tra la placca africana e quella euroasiatica", "È circondata dall'Atlantico", "Ha soltanto pianure alluvionali"], 1, "Il movimento delle due placche rende il territorio geologicamente attivo."),
    choice("gq18", "g4", "Quale differenza distingue Alpi e Appennini?", ["Gli Appennini sono più alti", "Le Alpi hanno molte cime oltre 4000 metri", "Le Alpi attraversano tutta la penisola", "Gli Appennini sono privi di erosione"], 1, "Gli Appennini sono più bassi e formano la spina dorsale della penisola."),
    choice("gq19", "g4", "Come si è formata la Pianura Padana?", ["Dall'accumulo di detriti fluviali", "Da un cratere vulcanico", "Dall'erosione marina", "Da una foresta abbattuta"], 0, "È una pianura alluvionale costruita soprattutto dai fiumi."),
    choice("gq20", "g4", "Che cosa aumenta il rischio idrogeologico?", ["La tutela dei corsi d'acqua", "Il consumo di suolo e la cementificazione", "La presenza di risorgive", "La riduzione delle costruzioni"], 1, "Suolo impermeabilizzato e costruzioni scorrette aggravano frane e alluvioni."),

    choice("gq21", "g5", "Quale eredità romana contribuì a unire l'Europa?", ["Una fitta rete di strade e il diritto", "L'abolizione delle città", "La scomparsa del commercio", "La divisione in poleis"], 0, "Infrastrutture, latino, moneta e diritto facilitarono l'integrazione."),
    choice("gq22", "g5", "Che cosa accadde con lo scisma del 1054?", ["Si divisero Chiesa cattolica e ortodossa", "Nacque l'euro", "Cadde Roma", "Iniziò la Rivoluzione industriale"], 0, "Lo scisma approfondì la frattura religiosa tra Ovest ed Est."),
    choice("gq23", "g5", "In che modo il colonialismo arricchì gli Stati europei?", ["Con scambi sempre paritari", "Sfruttando materie prime e lavoro delle colonie", "Rinunciando ai commerci oceanici", "Abolendo le piantagioni"], 1, "Il sistema coloniale era organizzato soprattutto a vantaggio delle madrepatrie."),
    choice("gq24", "g5", "Quando l'Italia divenne una repubblica?", ["1861", "1870", "1918", "1946"], 3, "Il referendum istituzionale del 1946 scelse la repubblica."),

    choice("gq25", "g6", "Quale ruolo ebbero i monasteri nel paesaggio medievale?", ["Bonificarono terre e diffusero tecniche agricole", "Distrussero tutte le campagne", "Costruirono solo porti", "Abolirono i villaggi"], 0, "Monaci e abbazie furono centri religiosi, culturali e agricoli."),
    choice("gq26", "g6", "Che differenza c'è tra open field ed enclosure?", ["I campi aperti non hanno recinzioni; quelli chiusi sono delimitati", "Uno è urbano e l'altro marino", "Sono due tipi di fabbrica", "Non c'è differenza"], 0, "Siepi, filari e muretti caratterizzano i campi chiusi."),
    choice("gq27", "g6", "Che cos'è un polder?", ["Un quartiere industriale", "Un terreno sottratto al mare con dighe e bonifiche", "Un castello medievale", "Un campo aperto polacco"], 1, "I Paesi Bassi hanno aumentato le terre coltivabili in questo modo."),
    choice("gq28", "g6", "Quale conseguenza ebbe l'urbanizzazione industriale ottocentesca?", ["La scomparsa delle periferie", "La crescita di slums sovraffollati e malsani", "Il ritorno generale alle campagne", "La fine delle ferrovie"], 1, "La rapida crescita urbana precedette servizi e piani adeguati."),

    choice("gq29", "g7", "Perché la popolazione europea non è distribuita uniformemente?", ["Territorio, clima, economia e città offrono condizioni diverse", "Tutti vivono sulle montagne", "Le coste sono disabitate", "Ogni Stato ha la stessa densità"], 0, "Le opportunità e le condizioni ambientali concentrano gli abitanti."),
    choice("gq30", "g7", "Che cos'è la crescita zero?", ["Assenza totale di migrazioni", "Nascite e morti quasi si equivalgono", "La popolazione raddoppia", "La speranza di vita è zero"], 1, "Il saldo naturale è vicino allo zero."),
    choice("gq31", "g7", "Da che cosa dipende l'invecchiamento della popolazione?", ["Solo dalle migrazioni", "Bassa natalità e maggiore speranza di vita", "Aumento della mortalità infantile", "Riduzione degli anziani"], 1, "Meno giovani e più persone longeve cambiano la struttura per età."),
    choice("gq32", "g7", "Quale misura fu usata durante il Covid-19?", ["Il feudalesimo", "Il lockdown", "Il Grand Tour", "La mezzadria"], 1, "Chiusure e limitazioni cercarono di contenere il contagio."),

    choice("gq33", "g8", "Qual è la differenza tra emigrare e immigrare?", ["Emigrare è partire; immigrare è arrivare per stabilirsi", "Sono sinonimi", "Emigrare riguarda solo i rifugiati", "Immigrare significa viaggiare per turismo"], 0, "Le due parole osservano lo stesso spostamento da punti di vista opposti."),
    choice("gq34", "g8", "Che cosa si intende per inversione migratoria?", ["Un Paese da terra di partenza diventa terra d'arrivo", "I migranti tornano sempre indietro", "Si chiudono tutte le frontiere", "Le città si svuotano"], 0, "Italia e Spagna sono esempi di questo cambiamento."),
    choice("gq35", "g8", "Qual è la differenza tra richiedente asilo e rifugiato?", ["Non c'è alcuna differenza", "Il richiedente attende una decisione; il rifugiato ha già ottenuto protezione", "Il rifugiato è sempre un migrante economico", "Il richiedente asilo viaggia soltanto per turismo"], 1, "Il richiedente asilo ha presentato una domanda ancora da valutare; il rifugiato ha ottenuto il riconoscimento della protezione."),
    choice("gq36", "g8", "Che cos'è la fuga dei cervelli?", ["L'emigrazione di giovani qualificati", "Lo spostamento quotidiano dei pendolari", "Un viaggio del Grand Tour", "La crescita delle nascite"], 0, "Competenze formate nel Paese cercano opportunità all'estero."),

    choice("gq37", "g9", "Che cos'è una conurbazione?", ["Un gruppo di centri urbani cresciuti fino a unirsi", "Una città senza collegamenti", "Una pianura agricola", "Una regione priva di abitanti"], 0, "La Ruhr è un esempio di area urbana continua."),
    choice("gq38", "g9", "Qual è la differenza tra rete monocentrica e policentrica?", ["Una è dominata da una città; l'altra divide le funzioni tra più città", "Una è antica e l'altra sempre medievale", "Una usa strade e l'altra no", "Non esiste differenza"], 0, "Parigi è un esempio monocentrico; l'Italia è più policentrica."),
    choice("gq39", "g9", "Quale problema produce la città diffusa?", ["Riduce sempre il traffico", "Aumenta consumo di suolo e dipendenza dall'auto", "Elimina i capannoni", "Concentra tutto in un centro compatto"], 1, "La dispersione rende anche più costoso fornire servizi."),
    choice("gq40", "g9", "Qual è lo scopo di una smart city?", ["Usare tecnologie e pianificazione per una città più sostenibile", "Sostituire tutti gli abitanti con robot", "Eliminare ogni centro storico", "Aumentare gli sprechi"], 0, "Dati, mobilità condivisa e partecipazione aiutano a gestire risorse e servizi."),

    choice("gq41", "g10", "Che cosa caratterizza l'Industria 4.0?", ["Macchine isolate senza dati", "Connessione digitale tra macchine, oggetti e persone", "Solo lavoro manuale", "Uso esclusivo del carbone"], 1, "Reti, sensori e dati creano sistemi cyber-fisici."),
    choice("gq42", "g10", "Perché il PIL pro capite da solo non misura tutto il benessere?", ["Non considera distribuzione, salute e istruzione", "Non usa numeri", "Misura solo la popolazione", "È uguale in ogni Stato"], 0, "Per questo si affianca ad altri indicatori come l'ISU."),
    choice("gq43", "g10", "Che cosa sono i NEET?", ["Imprese multinazionali", "Giovani che non studiano, non lavorano e non seguono formazione", "Pensionati europei", "Lavoratori agricoli"], 1, "Il fenomeno segnala difficoltà tra scuola e lavoro."),
    choice("gq44", "g10", "Perché alcune industrie del Mezzogiorno furono dette “cattedrali nel deserto”?", ["Erano edifici religiosi", "Restarono isolate dall'economia locale e crearono pochi posti", "Si trovavano solo nei deserti", "Producevano soltanto energia solare"], 1, "Grandi impianti senza un tessuto produttivo intorno ebbero effetti limitati."),

    choice("gq45", "g11", "Che cos'è l'agroindustria?", ["Il collegamento tra agricoltura, trasformazione e distribuzione", "Una sola azienda familiare", "L'abbandono delle tecnologie", "Un tipo di turismo"], 0, "La filiera unisce produzione agricola, industrie alimentari e mercato."),
    choice("gq46", "g11", "Che cosa significa transizione energetica?", ["Passare gradualmente dai fossili a fonti meno inquinanti", "Aumentare solo il carbone", "Chiudere ogni industria", "Importare tutta l'energia"], 0, "Rinnovabili ed efficienza riducono dipendenza ed emissioni."),
    choice("gq47", "g11", "Che cos'è la terziarizzazione?", ["La crescita del settore dei servizi", "Il ritorno di tutti all'agricoltura", "La scomparsa delle città", "La divisione in tre Stati"], 0, "Nei Paesi sviluppati servizi e funzioni avanzate dominano occupazione e reddito."),
    choice("gq48", "g11", "Quale principio appartiene all'economia circolare?", ["Usare e gettare", "Riparare, riusare e riciclare", "Estrarre più materie prime possibile", "Eliminare la manutenzione"], 1, "Il valore dei prodotti e dei materiali viene mantenuto più a lungo."),

    choice("gq49", "g12", "Perché nacque la CECA?", ["Per mettere in comune carbone e acciaio e ridurre il rischio di guerra", "Per creare subito l'euro", "Per dividere Francia e Germania", "Per abolire il Parlamento"], 0, "La cooperazione economica del dopoguerra aveva anche uno scopo di pace."),
    choice("gq50", "g12", "Quale trattato diede vita all'Unione Europea e preparò l'unione monetaria?", ["Trattato di Maastricht", "Pace di Qadesh", "Trattato di Versailles", "Editto di Milano"], 0, "Maastricht entrò in vigore nel 1993."),
    choice("gq51", "g12", "Qual è il ruolo principale della Commissione Europea?", ["Proporre leggi e gestire politiche comuni", "Eleggere i governi nazionali", "Comandare gli eserciti", "Sostituire tutti i tribunali"], 0, "Commissione, Consiglio e Parlamento partecipano con ruoli diversi al processo europeo."),
    choice("gq52", "g12", "Che rapporto c'è tra cittadinanza nazionale ed europea?", ["Quella europea sostituisce la nazionale", "La cittadinanza europea completa quella di uno Stato membro", "Sono indipendenti e incompatibili", "Quella europea riguarda solo l'euro"], 1, "Ogni cittadino di uno Stato membro è anche cittadino dell'Unione."),
    choice("gq53", "g12", "Qual è la differenza tra regolamento e direttiva europea?", ["Il regolamento si applica direttamente; la direttiva fissa risultati da recepire", "La direttiva si applica solo ai comuni", "Il regolamento non è vincolante", "Non c'è differenza"], 0, "I due atti incidono in modo diverso sugli ordinamenti nazionali.")
  ];

  const buildOral = (subject, chapters) => chapters.flatMap((chapter) => [
    oral(
      `${subject}-oral-${chapter.id}-1`,
      chapter.id,
      `Esponi in modo ordinato: ${chapter.title}.`,
      chapter.sections.map((item) => item.title)
    ),
    oral(
      `${subject}-oral-${chapter.id}-2`,
      chapter.id,
      `Parti da “${chapter.sections[0].title}” e collega cause, trasformazioni e conseguenze del capitolo.`,
      [...chapter.sections.map((item) => item.title), "Un collegamento finale o un confronto"]
    )
  ]);

  window.STUDY_DATA = {
    subjects: {
      history: {
        id: "history",
        name: "Storia",
        short: "ST",
        description: "Dalla ricerca storica alla supremazia ateniese",
        chapters: historyChapters,
        questions: historyQuestions,
        oral: buildOral("history", historyChapters)
      },
      geography: {
        id: "geography",
        name: "Geografia",
        short: "GE",
        description: "Ambienti, geostoria, società, economia e Unione Europea",
        chapters: geographyChapters,
        questions: geographyQuestions,
        oral: buildOral("geography", geographyChapters)
      }
    }
  };
})();
