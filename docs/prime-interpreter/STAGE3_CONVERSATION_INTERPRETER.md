# Prime Interpreter — Stage 3: Conversation Interpreter

## Goal

Help two people who speak different languages communicate without enabling noisy server-wide auto-translation.

## Simple workflow

1. Save your normal conversation language:
   `/conversation language language:Vietnamese`

2. Invite another person:
   `/conversation start partner:@User`

3. The invited person explicitly presses **Accept**.

4. Either person sends a translated turn:
   `/conversation say text:"..."`

5. End:
   `/conversation end`

## Saved languages

If both users previously ran `/conversation language`, `/conversation start partner:@User` needs no language options.

If a language is not saved, the initiator may provide an override:
- `my-language`
- `partner-language`

Names and codes use the same 45-language resolver from Stage 2.

## Privacy / consent

Conversation translation is opt-in:
- the partner must accept the invitation;
- Prime Interpreter does not listen to or translate arbitrary channel messages;
- only explicit `/conversation say` content is sent to the translation provider.

The translated turn is public in the current channel so both participants can read the conversation.

## Translation behavior

The active session determines the source and target language automatically from the speaker.

Stage 3 uses:
- Natural mode
- Preserve original tone
- a small conversation context instruction
- Stage 2 confidence output

No conversation message text is stored in the Stage 3 conversation tables. Only lifecycle events such as ACCEPTED, TURN and ENDED are recorded.

## Scope

Stage 3 intentionally does not add:
- server-wide automatic translation;
- background message monitoring;
- group interpretation;
- voice interpretation;
- language-role automation.

Those can be considered later only if they remain understandable and useful.
