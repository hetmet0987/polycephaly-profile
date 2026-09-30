# Prime Herald — Stage 1

## Royal Communications Office

Stage 1 establishes the official communications branch of Prime Herald while deliberately keeping **The Prime Time journalism separate** until Stage 2.

### Compact command surface

- `/herald create` — create an official communication as DRAFT
- `/herald queue` — inspect recent internal work
- `/herald view` — inspect one communication
- `/herald publish` — approve and publish
- `/setup roles` — discover/create and persist Prime Herald role bindings
- `/language me` / `/language server` — 8-language locale system
- `/help`

### Role recognition

`/setup roles` searches exact canonical role names first. Missing roles are created. Every recognized role ID is stored in `herald_role_bindings`, so later renames or Discord ordering do not become the authorization source of truth.

Authority ranks:
- 100 Herald High Command
- 90 Editor-in-Chief
- 80 Deputy Editor / Royal Press Secretary
- 70 Senior Editor
- 65 Press Officer
- 55 Fact Checker
- 50 Journalist / Media Analyst
- 40 Correspondent
- 20 Herald Staff

Stage 1 policy:
- Correspondent+ may create drafts.
- Herald Staff+ may inspect the internal queue.
- Press Officer+ may publish official communications.
- Owner IDs and Discord administrators may run `/setup roles`.

### Shared database

Prime Herald uses a dedicated `prime_herald_schema_migrations` ledger instead of SQLx's global migration history, avoiding collisions with Prime Chancellor, Nexus, Regent, Legate, Marshal and Justiciar in a shared PostgreSQL database.

### i18n

English, Vietnamese, German, French, Spanish, Japanese, Korean and Simplified Chinese are supported with `ME → SERVER → DEFAULT_LANG` fallback.


## Stage 2 — The Prime Time Newsroom

Stage 2 introduces a second, deliberately separate publication system:

- `HER-######` — official Prime Herald communications.
- `PT-######` — The Prime Time journalism.

Commands:
- `/news create`
- `/news view`
- `/news queue`
- `/news latest`
- `/news publish`

The newsroom records section, article type, headline-intensity level, headline,
deck, dateline, body and an internal source/context note.

Editorial authority is separate from official communications authority:
Royal Press Secretary does not automatically receive The Prime Time publishing
authority. Senior Editor / Deputy Editor / Editor-in-Chief / Herald High Command
may publish journalism.

Use `/help topic:Examples & Workflows` for copyable examples.
See `THE_PRIME_TIME_EDITORIAL_STYLEBOOK.md`.


## Practical UX Rework
The recommended public interface is now `/herald` + `/help`. News, breaking news and official announcements publish immediately to a chosen public channel. Drafts are explicitly private. The legacy `/news` command is no longer registered.


## Stage 3 — Simple Editorial Review

Important drafts can now follow `Save Draft → Submit Review → Approve / Needs Changes → Publish`. Normal news and announcements may still publish directly. Stage 3 adds buttons and a change-note modal rather than separate approval commands. See `STAGE3_SIMPLE_EDITORIAL_REVIEW.md`.


## Stage 4 — Groq Editorial Assistant

`/herald assist` turns rough facts into a private editorial preview or saved draft. It can write news, improve writing, create a headline/deck, summarize, or draft an official announcement. AI never publishes automatically. See `STAGE4_GROQ_EDITORIAL_ASSISTANT.md`.


## Stage 5 — The Prime Time Newsroom Desk

Use `/newsroom` for one private view of active drafts, your stories, items awaiting review and approved items. Every story shows the exact next action. See `STAGE5_NEWSROOM_DESK.md`.


## Stage 6 — The Prime Time Public Edition

Stage 6 improves public article presentation with attribution, optional imagery and a small Reader Desk. It adds no new editorial workflow. See `STAGE6_PUBLIC_EDITION.md`.


## Stage 7 — Crisis Communications

Use `/crisis start → update → resolve` when one incident needs repeated public updates. `/crisis status` is the private staff check. Stage 7 adds the `⚠ ┊ CRISIS PRESS OFFICER` role; rerun `/setup roles` after upgrading. See `STAGE7_CRISIS_COMMUNICATIONS.md`.


## Stage 8 — Publication Scheduler

Use `/schedule add`, `/schedule list`, and `/schedule cancel` for automatic timed publication of finished The Prime Time articles. See `STAGE8_PUBLICATION_SCHEDULER.md`.


## Stage 9 — The Prime Time Editions

Use `/edition preview` and `/edition publish` to turn the last 24 hours of published reporting into one clean front page. See `STAGE9_THE_PRIME_TIME_EDITIONS.md`.
