# KI-Impact Group – Projektregeln

> Letzte Review: 2026-10-07 · Bei jedem "deploy" prüfen, ob der Block **Aktuelle Events** noch stimmt.

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

## Aktuelle Events (einziger Block, der sich laufend ändert — Stand: 2026-10-07)
- **Aktueller Modus: Herbst 2026** — Highlight #1 above the fold ist die **KI-Werkstatt** (IFC Tuttlingen × KI-Impact, Termin folgt; mailto mark@finnern.com, Subject "KI-Werkstatt: mein Thema"). Highlight #2 = **Rückblick Quantencomputing / MiiS 30.09.** (hl-Block `#rueckblick-quantencomputing`, Link auf SB-Artikel + history.html#quantencomputing) — ersetzen, sobald Mark das nächste eigene Event nennt.
- Timeline „Was jetzt kommt": KI-Werkstatt-Karte (Termin folgt) → „KI außer Kontrolle?" Online / MiiS (Termin folgt, Vormerkung wirtschaftsfoerderung@schramberg.de, Bild ki-ausser-kontrolle.png) → VISION 6.–8.10. → Rafati 08.10. → 1. KI-Night SBH 12.10. → flownight x HOW2START Offenburg 15.10. (#flownight) → …
- Quantencomputing (30.09.) ist in history.html (`#quantencomputing`, mit SB-Artikel + 2 LinkedIn-Posts); Kurzlink /quant zeigt dorthin.
- Sommerpause-Karte und sommerpause.png sind raus (Datei bleibt im Repo, nicht verlinkt). og:image vorerst ki-impact-logo-banner.png — durch Werkstatt-Motiv ersetzen, sobald vorhanden.
- IHK n8n-Kurs (DIGIPAG): Start 22.09. hat nicht stattgefunden — Karte ist raus. Erst wieder eintragen, wenn Mark einen bestätigten neuen Starttermin nennt.
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
- [ ] Falls n8n-Karte drin: IHK-Link zeigt auf https://ihkakademie.de/DIGIPAG
- [ ] Keine erfundenen URLs — alle geprüft
- [ ] Kein Event mit überschrittenem Datum mehr auf der Seite
- [ ] `git diff HEAD` vor dem Commit lesen und prüfen
