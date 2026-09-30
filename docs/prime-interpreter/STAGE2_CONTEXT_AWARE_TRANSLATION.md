# Prime Interpreter — Stage 2: Context-Aware Translation

Stage 2 improves the existing `/translate` command instead of adding another command family.

## Simple rule

Normal translation:

`/translate text:"..." to:English`

Context-sensitive translation:

`/translate text:"..." to:English context:"What the conversation is about"`

The `context` field is never translated. It is only used to resolve meaning.

## Stage 2 additions

- optional `context`;
- optional `tone`;
- confidence: HIGH / MEDIUM / LOW;
- up to two alternative interpretations when ambiguity remains;
- all 45 Stage 1 translation languages can now be entered by name or code.

## Why language entry changed

Discord allows at most 25 fixed choices on one option. Stage 1 exposed only the first 25 choices even though the backend listed 45 languages.

Stage 2 fixes this by accepting free text:

- German or de
- Japanese or ja
- Vietnamese or vi
- Chinese (Traditional) or zh-TW

This keeps the full language set accessible.

## Meaning protection

Context may resolve:
- pronouns;
- slang;
- idioms;
- jargon;
- ambiguous words;
- intended register.

Context may not create new facts.

## Tone

Default: Preserve original tone.

Optional:
- Neutral
- Friendly
- Professional

Tone changes register only, never factual meaning.

## Ambiguity

If a materially ambiguous phrase cannot be safely resolved, Prime Interpreter should:
1. produce the most conservative translation;
2. lower confidence;
3. explain the ambiguity briefly;
4. show up to two alternative meanings.

## Example

Source:
`I saw her duck.`

Context:
`We were discussing a woman avoiding a flying ball.`

This context indicates that “duck” is a verb.

Without enough context, the bot may warn that “duck” could also be a noun.

## UX rule

Stage 2 does not add `/context`, `/tone`, `/ambiguity`, or `/confidence` commands.

Everything remains inside `/translate`.
