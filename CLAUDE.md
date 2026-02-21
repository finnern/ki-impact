# KI-Impact Group – Projektregeln

## Workflow
- Änderungen immer direkt in `index.html` im Projektordner speichern
- **Aktiver Branch: `dev`** — Pushes gehen nach `dev`, NICHT nach `main`
- `dev`-Branch ist privat / nicht live — GitHub Pages deployed nur von `main`
- **Iterieren:** Claude editiert → `git commit + push → dev` (kein Live-Update)
- **Vorschau:** Mark macht `git pull` im Terminal, dann `file:///Users/markfinnern/Developer/ki-impact/index.html`
- **Live schalten:** Mark sagt "deploy" → Claude merged `dev` → `main` → Seite geht live
- **Nie nach `main` pushen ohne explizites "deploy"** von Mark

## Seitenstruktur (Reihenfolge einhalten!)
1. **KI-Impact Highlight #1** – Sammelbestattung (14. April) — immer ganz oben
2. **KI-Impact Highlight #2** – Betriebsnachfolge (25. Februar) — immer direkt unter #1
3. **Make it in Schramberg** – lokale Schramberg-Events
4. **Mario Herger** – direkt nach Make it in Schramberg
5. **Eigene Angebote & Training** – n8n / IHK Kurs
6. **Nächste Veranstaltungen** – zeitnah bevorstehende regionale Events
7. **Innovation in der Region & BW** – BW-weite Events und Jahresformate

## URLs – nur diese verwenden (nie abändern!)
- IHK n8n Kurs: `https://ihkakademie.de/DIGIPAG`
- IPAI Heilbronn: `https://ip.ai/en/`
- Innovationspark Horb: `https://innovationsparkhorb.de/`
- St. Georgen: `https://www.st-georgen.de/wirtschaft-bauen-und-wohnen/wirtschaftsstandort`

## Regeln für Events
- **Nur verifizierte Events** mit bestätigten Daten eintragen
- Keine URLs erfinden oder aus dem Gedächtnis ergänzen — immer suchen und bestätigen
- Bei unklaren Terminen: "Termin 2026 noch offen" schreiben, Link zur Eventseite setzen
- Vergangene Events entfernen sobald das Datum überschritten ist

## Design
- Farbschema: `#2c3e50` (dunkel), `#ffd700` (gold), `#e67e22` (orange), `#fffef7` (hintergrund)
- Tag-Farben: `.tag-red` = sofort/diese Woche, `.tag-blue` = bestätigter Termin, `.tag-green` = bestätigt Sommer+, `.tag-orange` = KI-Impact eigene Events
- Keine externen CSS-Frameworks — alles inline im `<style>`-Block
