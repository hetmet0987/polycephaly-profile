# Prime Seneschal S7
## Sovereign Administrative Automation & Delegation Engine

S7 introduces a bundled Prime Kingdom permission memory generated from the
2026-09-09 census and a controlled whole-kingdom setup workflow.

### Memory coverage

- 106 roles
- 25 categories
- 115 channels
- 15 GROUP_HEADER roles permanently ignored for permission assignment
- 16 Discord-managed/bot roles preserved
- 112 categorized channels eligible for policy setup
- 3 uncategorized/runtime channels remembered but preserved instead of guessed
- 30 channel-specific exceptions
- 82 channels normalized to inherit their category policy

### Managed permission surface

S7 only manages these channel permission bits:

- `VIEW_CHANNEL`
- `SEND_MESSAGES`

Guild-level role permissions are not rewritten.
Managed bot/integration roles are preserved.
Voice `CONNECT`/`SPEAK` is outside S7.
Temporary case/member access remains owned by S5.

### Policy memory

The memory stores:

`Role → Role Group → Category Policy → Channel Policy → View/Chat State`

Examples include:

- citizen community channels: verified citizens can view and chat
- government/cabinet/staff areas: government/staff role groups only
- Royal Audit/Kingdom Intelligence: restricted view with human posting denied
- War Room: Prime Marshal / Defence role groups
- Voice Team 1: Defence Command
- Voice Team 2: Defence Specialists
- Supreme Judiciary: judiciary roles, with case participants left to S5 temporary access
- public notices: broad view but restricted posting
- recruitment panel channels: citizens may view, posting controlled by workflow/staff

### Whole-kingdom setup

The `Sovereign Setup` / `Tổng hợp & Setup` control is a two-gate operation.

Required environment:

```env
ENABLE_PERMISSION_EXECUTOR=true
ENABLE_SOVEREIGN_SETUP=true
```

Workflow:

```text
Permission Memory
→ Whole-Kingdom Preflight
→ Final Owner Confirm
→ Category policies
→ Channel inheritance cleanup / exceptions
→ Read-back verification
→ S6 drift scan
```

Every resource is snapshotted. If any later resource fails, S7 attempts a
global reverse-order rollback of already-applied resources and persists a
transaction journal.

### Uncategorized resources

The census contains three uncategorized/runtime channels:

- `test`
- `⛔-do-not-post-here`
- `warroom-28127`

S7 remembers them but does not guess their intended access policy. They remain
`PRESERVE_OBSERVED`.

### Delegation packages

S7 also establishes policy packages for Government, Defence, Foreign Affairs,
Judiciary, and Citizen access. These are semantic access packages, not Discord
hierarchy authority and do not automatically change guild-level role
permissions.
