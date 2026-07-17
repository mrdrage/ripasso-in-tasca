# Procedura di rilascio

## Preflight

1. Lavorare su un branch dedicato e ispezionare `git status`.
2. Eseguire `node scripts/audit-content.mjs` e `git diff --check`.
3. Verificare che ogni voce di `APP_SHELL` esista.
4. Controllare lo staging: nessun PDF, fotografia, scansione, OCR grezzo o output locale.
5. Se cambia un file runtime, assegnare a `CACHE_NAME` in `sw.js` una versione nuova e monotona.
6. Avviare un server locale e completare la checklist di `docs/VERIFICATION.md`.

## Versionamento della cache

La cache corrente è `ripasso-in-tasca-v10`. Non riutilizzare né diminuire una versione già pubblicata. Documentazione e script non entrano in `APP_SHELL`; una modifica esclusivamente documentale non richiede incremento.

## Pubblicazione

La produzione è servita dalla root del branch principale tramite GitHub Pages:

```text
https://mrdrage.github.io/ripasso-in-tasca/
```

Flusso raccomandato:

```bash
git switch main
git pull --ff-only
git merge --ff-only <branch-verificato>
git push origin main
```

Se il merge fast-forward non è possibile, esaminare la divergenza e usare un normale merge revisionabile; non riscrivere la cronologia pubblicata.

## Verifica post-pubblicazione

- URL principale, manifest, `sw.js` e file dati rispondono correttamente via HTTPS;
- il Service Worker installa il nuovo `CACHE_NAME`;
- una seconda apertura funziona offline;
- una prova completa salva cronologia ed errori;
- nessun file escluso compare nel repository pubblico.

## Rollback

Usare `git revert` o una correzione successiva, mai force push. Se il rollback modifica asset runtime, pubblicare comunque un identificatore di cache superiore a tutti quelli precedenti; non ripristinare un nome cache già usato.
