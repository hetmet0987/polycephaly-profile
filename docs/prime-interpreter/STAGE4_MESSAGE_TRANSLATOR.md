# Prime Interpreter — Stage 4: Message Translator

Stage 4 solves a practical Discord problem: translating an existing message without copying its text.

## Use

One-time preference:
`/translation-language language:Vietnamese`

For any accessible message:
1. Right-click the message.
2. Choose Copy Message Link.
3. Run `/translate-message link:<link>`.

Optional one-off target:
`/translate-message link:<link> to:Japanese`

## Design

- Result is ephemeral/private to the requester.
- The source message stays unchanged.
- Only the explicitly linked message is fetched.
- No MESSAGE_CONTENT gateway intent is required.
- No automatic channel monitoring.
- Only messages from the current guild are accepted.
- Discord permissions still apply: if the bot cannot access the channel/message, translation fails safely.
- Message content is not stored in the Stage 4 log; only IDs and translation metadata are recorded.

This deliberately keeps Stage 4 simple rather than adding reaction menus, channel auto-translation, or large configuration panels.
