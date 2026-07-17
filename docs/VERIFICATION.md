# Verifica e benchmark

## Controlli riproducibili

Requisiti: Node.js per l'audit, Python 3 o altro server statico per il test browser.

```bash
node scripts/audit-content.mjs
git diff --check
python3 -m http.server 8000
```

Verifica statica dell'app shell:

```bash
python3 - <<'PY'
import pathlib, re
text = pathlib.Path('sw.js').read_text()
paths = re.findall(r'"\./([^" ]*)"', text)
missing = [p for p in paths if p and not pathlib.Path(p).exists()]
raise SystemExit(f"Asset mancanti: {missing}" if missing else "APP_SHELL: OK")
PY
```

## Checklist browser

1. Aprire `http://localhost:8000/` senza errori console.
2. Controllare 320, 360, 412, 430 e 1440 px senza overflow orizzontale.
3. Aprire sintesi e versione completa di un capitolo per materia.
4. Completare prove facili e difficili, con tutti i capitoli e capitoli specifici.
5. Controllare feedback, cronologia, errori, spiegazione e replay.
6. Verificare le quattro modalità speciali.
7. Esportare, cancellare e reimportare un JSON di statistiche.
8. In DevTools, attendere l'attivazione del Service Worker, passare offline e ricaricare.

## Baseline verificata

La baseline seguente descrive una sessione controllata sullo stato documentato; non sostituisce una nuova misurazione dopo modifiche.

| Area | Esito |
| --- | --- |
| Contenuti | 272 domande: 114 Storia, 158 Geografia |
| Difficoltà | 130 `easy`, 142 `hard`; minimo 5+5 per capitolo |
| Responsive | nessun overflow alle larghezze previste; home con scostamento centrale 0 px |
| Funzionale | due prove complete, dettaglio errori e replay verificati |
| Stress locale | 20 sessioni × 30 errori: 13.609 byte, rendering circa 81 ms |
| Offline | 14 risorse precache; reload offline circa 160 ms |
| App shell | circa 502 KiB |
| Runtime | nessun errore JavaScript o console osservato |

Profilo Android a risorse limitate simulato: CPU 6× rallentata, 2 core, heap 128 MB e rete Slow 4G. Risultati osservati: FCP circa 1,11 s, LCP circa 2,81 s, apertura setup 9,4 ms, prima domanda 25,4 ms, feedback 9,4 ms.

Le misure dipendono da hardware, browser e cache. Registrare ambiente e metodo quando si aggiorna questa baseline.

## Criteri di rilascio

- audit contenuti superato;
- `git diff --check` senza output;
- tutti gli asset di `APP_SHELL` esistenti;
- nessun file sorgente o temporaneo in staging;
- percorso principale e offline verificati;
- `CACHE_NAME` incrementato per ogni modifica runtime;
- documentazione aggiornata se cambiano contratti o metriche.
