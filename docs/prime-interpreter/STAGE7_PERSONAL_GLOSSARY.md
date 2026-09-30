# Prime Interpreter — Stage 7: Personal Glossary

## Purpose
Keep recurring names, titles, project vocabulary, technical terms and community-specific terminology consistent.

## Public surface
Only one new command family:
- `/glossary add`
- `/glossary list`
- `/glossary remove`

Translation itself does not gain another action. `/translate` automatically uses matching saved terminology.

## Example
`/glossary add term:"gateway intent" translation:"gateway intent" from:English to:Vietnamese note:"Keep Discord technical term unchanged"`

Then:
`/translate text:"Enable the gateway intent." to:Vietnamese`

## Scope
- personal per user
- isolated per guild
- language-pair specific
- upsert behavior: adding the same term again updates it
- `/glossary list` shows up to 25 recent entries
- `/translate` loads up to 30 matching terms into its context

## Safety / reliability
Glossary entries are translation preferences, not facts. The translation prompt says to use them only when the source term occurs with the intended meaning.

Stage 7 deliberately does not create a complex organization-wide terminology approval system. A future administrative layer can be added only if Prime Kingdom actually needs shared official terminology.
