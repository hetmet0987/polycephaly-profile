# Prime Interpreter — Stage 8: Translation Review

## Purpose
Review a translation that already exists.

`/translate` answers: "Translate this."
`/review-translation` answers: "Is this translation actually correct?"

## Command
`/review-translation original:<source> translation:<existing translation> to:<target language>`

Optional:
`from:<source language>`

## Review policy
The reviewer checks meaningful problems:
- omitted or added meaning
- actor / agency
- negation
- tense / modality
- quantities
- names, numbers, URLs and identifiers
- idioms and slang
- terminology consistency
- wording that materially harms meaning/readability

It is explicitly told not to invent errors just to appear critical and not to rewrite good translations for stylistic preference.

## Verdicts
GOOD
- Translation is accurate and natural enough.
- No unnecessary rewrite is shown.

NEEDS_FIX
- One or more meaningful problems exist.
- Up to five issues are shown.
- A complete corrected translation is returned.

## Privacy
Review results are ephemeral.
The database stores metadata, verdict, issue count and confidence, not the source text or translation.

## Why one command?
Separate commands for grammar checking, omission checking, terminology checking, accuracy scoring and correction would make the bot harder to learn. Stage 8 hides those review dimensions behind one practical `/review-translation` command.
