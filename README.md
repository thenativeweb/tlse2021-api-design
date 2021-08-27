# Todo-Anwendung

## Konsistenzgrenze (Aggregate)

- Die einzelne Aufgabe

### Schreiben (Commands)

- Erinnere mich! Notiere! Schreib auf! (CREATE)
- Passe an! Ändere! Aktualisiere! (UPDATE)
- Zuweisen an! (UPDATE / DELETE)
- Markiere als erledigt! (DELETE => UPDATE)
- Verwirf! (DELETE)

### Lesen (Queries)

- Welche offenen Aufgaben gibt es noch?
- Wer war heute besonders fleißig?
- Was ist schon erledigt?
- …?

### Live-Feedback (Events)

- jotted down
