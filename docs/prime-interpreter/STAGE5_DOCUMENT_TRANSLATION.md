# Prime Interpreter — Stage 5: Document Translation

## Purpose
Translate a complete text document without forcing the user to paste it into a slash-command field.

## Command
`/translate-document file:<attachment> to:<language>`

Optional:
- `from`
- `mode`: Natural / Literal / Formal

## Supported in Stage 5
- UTF-8 `.txt`
- UTF-8 `.md`
- up to 1 MB
- up to 12,000 characters per translation pass
- all 45 Prime Interpreter translation languages

## Output
Prime Interpreter returns a new `.txt` or `.md` attachment containing the translated document.

The translation prompt explicitly preserves:
- headings
- paragraphs
- lists
- Markdown syntax
- URLs
- names
- numbers
- meaningful line breaks

It is instructed not to summarize, omit sections, add commentary, or invent content.

## Privacy
The document translation response is ephemeral. The database log stores filename and translation metadata, not the document text.

## Why PDF/DOCX are not included yet
PDF and DOCX require extraction plus layout-aware reconstruction. Pretending they are equivalent to plain text would produce poor results and conflict with Prime Interpreter's simplified, reliable UX direction. They should be introduced as a later dedicated document pipeline.
