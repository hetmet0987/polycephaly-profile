# Prime Seneschal S0.5
## Prime Kingdom Administrative Codex Foundation

Prime Seneschal is the Royal Administrative Authority of Prime Kingdom.

S0 is deliberately **read-only**. Its purpose is to discover and export the current Discord structure so the later Administrative Codex can be built from real server data rather than screenshots or assumptions.

### Public commands
- `/seneschal` — compact control center
- `/census [scan|status|export]` — census workflow
- `/seneschal-help` — operator guide

### S0 reads
- Guild identity
- All guild roles
- Role hierarchy positions
- Guild-level role permissions
- All categories
- All non-category guild channels
- Parent category relationships
- Category/channel permission overwrites
- Whether each channel is permission-synced with its parent
- Basic channel metadata

### S0 does NOT do
- No role creation/deletion/editing
- No role reordering
- No channel/category creation/deletion/editing
- No permission mutation
- No moderation
- No automatic Administrative Codex generation
- No AI guessing about what current permissions *should* mean

### Output
Each scan persists:
- `prime_kingdom_census_<guild>_<timestamp>.txt`
- `prime_kingdom_census_<guild>_<timestamp>.json`

The TXT is for human review. The JSON is the machine-readable observed-state dataset that will later be transformed into the approved Administrative Codex after review.

### Setup
1. Copy `.env.example` to `.env`.
2. Fill `DISCORD_TOKEN`, `GUILD_ID`, and `OWNER_USER_IDS`.
3. Optional: set `COMMAND_CHANNEL_ID` to restrict the control surface.
4. Invite Prime Seneschal to Prime Kingdom with the `bot` and `applications.commands` scopes.
5. For S0, **do not give Administrator**.
6. Run `cargo run --release`.
7. Use `/seneschal` → **Scan Prime Kingdom** → **Export Census**.
8. Send both exported files back for Administrative Codex mapping.

### Security model
S0 requests only the `GUILDS` gateway intent. Discovery uses Discord guild HTTP reads. The implementation contains no role/channel/category/permission mutation calls.


The census is observed state only; it is **not the future Administrative Codex**.


## S0.5 — Administrative Codex Foundation

S0.5 bundles the Prime Kingdom census captured on 2026-09-09 and converts it into a structured **Administrative Codex Foundation**.

This stage does **not** decide or apply final permissions.

### Confidence states

- `CONFIRMED` — explicitly confirmed by the Prime Kingdom owner.
- `PROPOSED` — inferred from current names/structure and must be reviewed before becoming authority.

The first confirmed administrative rule is:

`KAC-CONF-001` — decorative section-header roles formatted like `━━━━〔 ... 〕━━━━` are grouping metadata only. Prime Seneschal must ignore them when assigning permissions and should leave their permissions empty.

### Safety gates

The bundled Codex has:

- `permission_compiler_enabled = false`
- `discord_mutation_enabled = false`
- `observed_state_is_authority = false`
- all categories/channels `permission_compile_eligible = false`

This prevents S0.5 from turning current Discord configuration or inferred mappings into enforced law.

### S0.5 Control Center

Open `/seneschal` and use:

- **Administrative Codex** — review the foundation summary.
- **Role Groups** — see confirmed decorative grouping roles.
- **Export Codex** — download `prime_kingdom_administrative_codex_s0_5.json`.

The existing S0 Census functions remain available.


## S0.7 — Administrative Authority & Jurisdiction Mapping

S0.7 adds a proposed authority graph without enabling permissions.

New contextual controls under `/seneschal`:

- **Authority & Jurisdiction**
- **Review Gates**
- **Authority Principles**
- **Export Map**

The map distinguishes Discord hierarchy from government authority and jurisdiction.
It also surfaces unresolved ambiguity instead of converting assumptions into permission law.

S0.7 remains read-only:
`PERMISSION EFFECT = NONE`.


## S0.8 — Permission Policy Blueprint & Dry-Run Compiler

S0.8 is the final preparation stage before Stage 1.

New controls under `/seneschal`:

- **Permission Blueprint**
- **Permission Dry Run**
- **Safety Gates**
- **Export Blueprint**

S0.8 computes only candidate `VIEW_CHANNEL` differences.
Every candidate is blocked and non-executable.

```text
DRY_RUN_ONLY = true
APPLY_ENABLED = false
DISCORD_MUTATION = false
EXECUTABLE_CHANGES = 0
```

No slash-command bloat is added; the project still exposes the same three public commands.


# Stage 1 — Kingdom Administrative Intelligence Foundation

Prime Seneschal is now in formal Stage 1.

S1 converts the S0–S0.8 preparation data into a unified administrative
intelligence snapshot. `/seneschal` gains a fourth contextual row:

- **Kingdom Intelligence**
- **Institutions**
- **Authority Graph**
- **Readiness**
- **Export Intelligence**

The public slash-command surface remains unchanged.

S1 is intentionally intelligence-only and cannot mutate Discord permissions.


# Stage 2 — Institution & Administrative Structure Management Foundation

S2 introduces reviewable permission plans, safety gates, snapshot/verification
requirements, and rollback foundations. The Discord permission executor remains
uninstalled, so S2 cannot modify server permissions.

The public slash-command surface remains at three commands; S2 is exposed
contextually through `/seneschal`.

# Stage 3 — Safe Permission Executor

S3 adds the first real permission mutation path. It is deliberately narrow and disabled by default. The executor only applies owner-confirmed `VIEW_CHANNEL` exact diffs to category role overwrites from S2 plans, snapshots the current overwrite state before mutation, reads Discord back after mutation, and attempts rollback if verification fails.

Set `ENABLE_PERMISSION_EXECUTOR=true` only when intentionally testing/applying an approved plan. There is no auto-apply and the three-command public surface is preserved.


# S3.1 — Full i18n & Language Purity Rework

S3.1 expands all eight language packs into navigation, status values,
permission-plan presentation, executor results, errors, and help/workflow text.

Technical identifiers such as `VIEW_CHANNEL`, IDs, module codes, and environment
variable names remain untranslated by design.

S3.1 does not alter the Safe Permission Executor's security contract.


# S4 — Institution Governance & Ownership Control

S4 adds institution ownership contracts, governance-role classification,
resource ownership resolution, conflict detection, review gates, and a gated
bridge to the existing S3 Safe Permission Executor.

No new dangerous mutation primitive is added. Ownership does not imply Discord
Administrator or management permissions. GROUP_HEADER remains excluded.


# S5 — Dynamic Access & Temporary Delegation System

S5 adds the temporary-access policy model, member-scoped templates, TTL
requirements, grant lifecycle, journal foundation, restoration contract, and
S3/S4 governance bridge.

The S5 UI is intentionally preview/governance only. A real temporary grant
executor is not exposed until durable expiry reconciliation is available.


# S5.1 — Kingdom Permission Deployment Planner & Preflight

Adds kingdom-wide execution waves, Staff/Admin/Government and Royal Audit review
surfaces, Prime Marshal two-team classification gates, a live `VIEW_CHANNEL` /
`MANAGE_CHANNELS` preflight, and exportable deployment planning.

No Apply All operation is introduced. No unconfirmed Team I/Team II role
mapping is guessed.

# S5.2 — Classification Approval & Wave Executor

Adds plan-hash-bound owner approvals, per-wave review, per-category gated
execution, repeated live preflight, and partial-apply rollback hardening.
There is still no server-wide Apply All operation, and Prime Marshal Team I / II
membership is not guessed.


# S6 — Administrative Drift, Reconciliation & Compliance

S6 adds live read-only drift scanning, drift classification, compliance
scorecards, persisted evidence reports, and a reconciliation planner.

S6 never silently repairs Discord state. Any `RESTORE_INTENDED` action is routed
back through the S5.2 approval/preflight/snapshot/exact-diff/verify/rollback
execution contract.


# S7 — Sovereign Administrative Automation & Delegation Engine

Adds complete Prime Kingdom permission memory, category/channel view+chat
policies, delegation packages, whole-kingdom preflight, a separately gated
Tổng hợp & Setup control, transaction journaling, verification, and global
rollback attempts.

`ENABLE_SOVEREIGN_SETUP=false` remains the default.


# S8 — Administrative Policy Simulation, Impact Analysis & Readiness Governance

S8 simulates the complete S7 permission memory before any whole-Kingdom setup.
It adds an effective access matrix, exposure/lockout checks, chat-authority
analysis, readiness scoring, approval-pack export, and an S9 readiness gate.

S8 performs no Discord mutation and intentionally defers the full setup path.

# S9 — Sovereign Deployment Readiness & Controlled Rollout Governance

S9 adds live-state freshness validation, rollout waves, whole-Kingdom preflight
aggregation, rollback contracts and a sealed activation gate. It does not apply
permissions; full setup remains deferred to the later activation stage.

# S10 — Sovereign Activation & Controlled Kingdom Deployment

S10 opens owner-gated live deployment through six ordered waves. It binds approval to structural live-state and S7 memory fingerprints, re-preflights each wave, snapshots every resource, verifies writes, and rolls back a failed wave. There is no Apply All button and execution remains disabled by default until both execution environment gates are enabled.

## S10.4 — Interaction Reliability Hotfix

S10.4 hardens Discord interaction acknowledgements. `/seneschal` now renders its
control panel in the initial callback, a local single-instance guard prevents two
Seneschal processes from racing the same interaction, and interaction IDs are
deduplicated in-process. Heavy actions continue to defer immediately before work.

If startup reports that guard port `38471` is already in use, first check for a
second Seneschal process. Only change `SENESCHAL_INSTANCE_GUARD_PORT` when the port
is legitimately occupied by another application.


# S10.7 — Canonical Prime Kingdom Permission Plan

S10.7 replaces runtime permission inference with one embedded deterministic
permission plan compiled from the supplied Prime Kingdom census.

Coverage:
- 106 roles
- 25 categories
- 115 channels
- 0 preserve-only channels
- 0 inherited/guessed channel policies

The normal deployment workflow is simply:

`/seneschal -> Deployment -> Apply Preset Plan`

Every channel has an explicit VIEW_CHANNEL/SEND_MESSAGES policy.


# S10.8 — Fast Kingdom Deployment Engine

S10.8 keeps the S10.7 preset permission plan but replaces the old per-resource
GET/snapshot/verify loop with a bulk-read, precompiled-diff deployment engine.

The Discord interaction now shows live phase/resource/write progress while
permission writes are running.


# S10.9 — Channel & Category Architecture Exporter

Use:

`/seneschal -> Administration -> Channel Map`

Seneschal performs a fresh live scan and returns a grouped JSON + TXT file
containing every category, every child channel, uncategorized channels,
permission-sync state, explicit overwrites and a role reference table.

Send the JSON export back when the canonical permission memory needs to be
rebuilt against the real Prime Kingdom channel/category architecture.


# S10.10 — Channel-Aware Canonical Permission Memory Rebuild

S10.10 rebuilds Prime Seneschal's permission memory from the live Channel Map
captured on 2026-09-13.

The plan treats category visibility as the primary source of truth:
- 25 category base policies;
- 89 channels deliberately synchronized to their parent category;
- 26 explicit channel exceptions, including three uncategorized channels;
- 106-role reference preserved;
- 15 decorative role headers ignored;
- managed bot roles preserved.

This directly addresses partial/contradictory category visibility caused by
independent channel overrides.
