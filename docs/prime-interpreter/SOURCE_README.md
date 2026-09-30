# Prime Interpreter — Stage 1: Universal Translator

Prime Interpreter is the Royal Language & Interpretation Service of Prime Kingdom.

## Translation technology

Stage 1 uses a provider-oriented architecture.

Current provider:
- Groq API
- `openai/gpt-oss-120b`
- JSON response mode
- low-temperature translation prompt

Why:
- contextual multilingual understanding;
- idiom/slang handling;
- automatic source-language detection;
- Natural / Literal / Formal register control;
- fast inference.

The Discord layer does not depend on Groq-specific behavior beyond `GroqTranslator`.
Future stages can add DeepL, Google Cloud Translation, Microsoft Translator or local
translation providers and route between them without redesigning `/translate`.

## UX

Most people only need:

`/translate text:"..." to:English`

Optional:
- `from`
- `mode: Natural | Literal | Formal`

Source defaults to Auto Detect. Translation results are private in Stage 1 so the user can verify them before reposting.

## Languages

Prime Interpreter UI: 8 languages.
Translation layer: 45+ language targets in Stage 1.

These are intentionally separate.

## Shared database

Uses the shared Prime Kingdom PostgreSQL database with its own ledger:
`prime_interpreter_schema_migrations`.


## Stage 2 — Context-Aware Translation

`/translate` now supports optional context and tone, shows confidence, and exposes ambiguity when necessary. All 45 translation languages can be entered by name or code. See `STAGE2_CONTEXT_AWARE_TRANSLATION.md`.


## Stage 3 — Conversation Interpreter

Two users can opt into a translated conversation with `/conversation language → start → say → end`. The partner must accept, and Prime Interpreter never auto-reads the channel. See `STAGE3_CONVERSATION_INTERPRETER.md`.


## Stage 4 — Message Translator

Translate an existing Discord message from its message link with `/translate-message`. Save a usual target with `/translation-language`. No channel-wide listener is enabled. See `STAGE4_MESSAGE_TRANSLATOR.md`.


## Stage 5 — Document Translation

Translate UTF-8 TXT/Markdown files with `/translate-document` and receive a translated file back. See `STAGE5_DOCUMENT_TRANSLATION.md`.


## Stage 6 — Language Assistant

Use `/explain` to understand slang, idioms, nuance, tone and relevant cultural meaning. Simple and Detailed modes keep the public command surface compact. See `STAGE6_LANGUAGE_ASSISTANT.md`.


## Stage 7 — Personal Glossary

Save preferred terminology with `/glossary`; matching entries are applied automatically by `/translate`. See `STAGE7_PERSONAL_GLOSSARY.md`.


## Stage 8 — Translation Review

Use `/review-translation` to compare an original with an existing translation, flag meaningful errors and receive a corrected version only when needed. See `STAGE8_TRANSLATION_REVIEW.md`.


## Stage 9 — Quick Translate

Set a usual target with `/quick-language`, then translate everyday text with the one-field `/quick-translate` command. See `STAGE9_QUICK_TRANSLATE.md`.


## Stage 10 — Personal Preferences

Final main feature stage: manage personal translation defaults through `/preferences`. Future work should move to stabilization rather than command growth. See `STAGE10_PERSONAL_PREFERENCES.md`.
