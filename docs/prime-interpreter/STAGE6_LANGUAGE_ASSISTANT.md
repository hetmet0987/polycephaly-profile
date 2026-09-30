# Prime Interpreter — Stage 6: Language Assistant

## Purpose
Translation answers "what does this say?" Stage 6 answers "what does this actually mean?"

## Command
`/explain text:<expression> in:<language>`

Optional:
- `from`: source language, otherwise Auto Detect
- `depth`: Simple / Detailed
- `context`: short situation used only to resolve ambiguity

## Examples
`/explain text:"We're cooked." in:Vietnamese`

`/explain text:"Break a leg!" in:Vietnamese depth:Detailed`

`/explain text:"That's sick." in:Vietnamese context:"A friend is praising a new car."`

## Simple
Returns a concise plain-language meaning.

## Detailed
May additionally show:
- nuance / idiom / implication
- tone and register
- cultural note only when relevant
- up to two short illustrative usage examples

## Reliability rules
The model is explicitly told:
- not to invent surrounding events;
- not to treat examples as claims about the user;
- to use context only for disambiguation;
- to admit ambiguity when it remains;
- to provide HIGH / MEDIUM / LOW confidence.

## Privacy
Responses are ephemeral. The Stage 6 database log stores translation metadata and character count, not the text being explained.

## Design philosophy
Stage 6 adds one intuitive public command: `/explain`.
It deliberately avoids separate commands such as `/slang`, `/idiom`, `/tone`, `/culture`, and `/meaning`; those are internal explanation dimensions exposed only when Detailed mode is useful.
