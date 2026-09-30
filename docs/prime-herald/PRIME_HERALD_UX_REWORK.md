# Prime Herald — Practical UX Rework

## Public rule
`/herald news`, `/herald breaking`, and `/herald announce` publish immediately
to the selected public Discord channel.

Only `/herald save-draft`, `/herald drafts`, `/help`, setup feedback, permission
errors and small publication confirmations are ephemeral/private.

## Public command surface
- `/herald news`
- `/herald breaking`
- `/herald announce`
- `/herald save-draft`
- `/herald drafts`
- `/herald publish-draft`
- `/help`
- `/language`
- `/setup roles`

The former public `/news` command is no longer registered. Its Stage 2 backend
is retained for compatibility and stored records.

## Design rule
Technical IDs, lifecycle labels and database classifications remain backend
concerns. Public articles should look like publications, not database records.

## Product rule for future stages
Every new action must answer:
1. Who uses it?
2. When would they use it in a real Discord server?
3. Can a first-time user understand it without knowing Prime Herald's architecture?
4. Is a new command truly necessary, or can the existing Publishing Desk absorb it?
