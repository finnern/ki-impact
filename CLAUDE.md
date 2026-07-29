# KI-Impact Group – Projektregeln

> Letzte Review: 2026-07-29 · Bei jedem "deploy" prüfen, ob der Block **Aktuelle Events** noch stimmt.

## Workflow
- Änderungen immer direkt in `index.html` im Projektordner speichern
- **Aktiver Branch: `dev`** — Pushes gehen nach `dev`, NICHT nach `main`
- `dev`-Branch ist privat / nicht live — GitHub Pages deployed nur von `main`
- **Iterieren:** Claude editiert → `git commit + push → dev` (kein Live-Update)
- **Vorschau:** Mark macht `git pull` im Terminal, dann `file:///Users/markfinnern/Developer/ki-impact/index.html`
- **Live schalten:** Mark sagt "deploy" → Claude merged `dev` → `main` → Seite geht live
- **Nie nach `main` pushen ohne explizites "deploy"** von Mark

## Seitenstruktur (Reihenfolge einhalten!)
1. **KI-Impact Highlight #1** – das nächste eigene KI-Impact-Event (siehe Aktuelle Events)
2. **KI-Impact Highlight #2** – das übernächste eigene Event oder Rückblick auf das letzte
3. **Make it in Schramberg** – lokale Schramberg-Events
4. **Mario Herger** – direkt nach Make it in Schramberg
5. **Eigene Angebote & Training** – n8n / IHK Kurs
6. **Nächste Veranstaltungen** – zeitnah bevorstehende regionale Events
7. **Innovation in der Region & BW** – BW-weite Events und Jahresformate

## Aktuelle Events (einziger Block, der sich laufend ändert — Stand: 2026-07-29)
- **Aktueller Modus: Sommerpause** — oben (above the fold) steht die Sommerpause-Karte statt der Highlight-Event-Karten #1/#2. Herbstprogramm entsteht aus der LinkedIn-Diskussion.
- Timeline „Was jetzt kommt" startet im September 2026: n8n-Kurs IHK (Start 22. Sept.), Quantencomputing / Make it in Schramberg (September, Termin folgt), diverse TechnologyMountains-Termine (17. Sept.)
- Alle Events vor dem 29.07.2026 (China 15. Juli, Sammelbestattung 14. April, Betriebsnachfolge 25. Februar) sind vorbei und stehen nicht mehr live auf der Seite
- Sobald Herbst-Highlights feststehen: Sommerpause-Karte durch Highlight #1/#2 ersetzen (siehe Seitenstruktur)
- Neue Highlights: Mark nennt Event + Datum + Anmeldelink — nie selbst recherchieren und ungeprüft eintragen

## URLs – nur diese verwenden (nie abändern!)
- IHK n8n Kurs: `https://ihkakademie.de/DIGIPAG`
- IPAI Heilbronn: `https://ip.ai/en/`
- Innovationspark Horb: `https://innovationsparkhorb.de/`
- St. Georgen: `https://www.st-georgen.de/wirtschaft-bauen-und-wohnen/wirtschaftsstandort`

## Regeln für Events
- **Nur verifizierte Events** mit bestätigten Daten eintragen
- Keine URLs erfinden oder aus dem Gedächtnis ergänzen — immer suchen und bestätigen
- Bei unklaren Terminen: "Termin 2026 noch offen" schreiben, Link zur Eventseite setzen
- Vergangene Events entfernen sobald das Datum überschritten ist (gilt auch für Highlights und Checklisten-Einträge)
- **Make it in Schramberg-Events**: immer Logo `make-it-in-schramberg-logo.png` mit `tline-img-flex` einbinden (Pattern siehe bestehende MiiS-Karten)

## Design
- Farbschema: `#2c3e50` (dunkel), `#ffd700` (gold), `#e67e22` (orange), `#fffef7` (hintergrund)
- Tag-Farben: `.tag-red` = sofort/diese Woche, `.tag-blue` = bestätigter Termin, `.tag-green` = bestätigt Sommer+, `.tag-orange` = KI-Impact eigene Events
- Keine externen CSS-Frameworks — alles inline im `<style>`-Block

## Checkliste vor jedem Commit (nie weglassen!)
- [ ] Alle Anmelde-mailto-Links für **aktuelle** Events vorhanden (Liste siehe Aktuelle Events)
- [ ] Jeder mailto-Link hat `subject=` UND `body=` mit Name/Unternehmen/Telefon-Felder
- [ ] Highlight #1 und #2 entsprechen dem Block Aktuelle Events
- [ ] IHK-Link zeigt auf https://ihkakademie.de/DIGIPAG
- [ ] Keine erfundenen URLs — alle geprüft
- [ ] Kein Event mit überschrittenem Datum mehr auf der Seite
- [ ] `git diff HEAD` vor dem Commit lesen und prüfen
