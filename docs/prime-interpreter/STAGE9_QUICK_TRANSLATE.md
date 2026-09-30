# Prime Interpreter — Stage 9: Quick Translate

Stage 9 reduces everyday translation to one text field.

1. Set once: `/quick-language language:Vietnamese`
2. Translate anytime: `/quick-translate text:"..."`

Quick Translate automatically uses source Auto Detect, Natural mode, preserved tone, and matching Personal Glossary entries.

The preference is stored per user and per guild. `/translate` remains the advanced command for context, tone, mode, source and per-request target selection.

This Stage deliberately avoids automatic channel-wide message reading and does not require MESSAGE_CONTENT intent.
