# Prime Seneschal S10.8
## Fast Kingdom Deployment Engine

S10.8 keeps the S10.7 canonical permission plan unchanged and replaces the
slow S7-era deployment loop.

### Old deployment pattern

For nearly every category/channel, the old executor performed:

- GET channel
- GET channel again for snapshot
- scan every managed role
- one permission request per diff
- GET channel again for verification

Across 140 resources this created hundreds of redundant reads and made the
Discord interaction appear stuck for many minutes.

### S10.8 deployment pattern

1. Fetch the entire guild channel map once.
2. Compile the full Kingdom permission diff in memory.
3. Skip resources and role overwrites that are already correct.
4. Write snapshots from the cached live state; no extra Discord GET is needed.
5. Apply only the precompiled permission differences.
6. Update the Discord interaction during deployment.
7. Perform one final bulk guild-channel fetch.
8. Verify all eligible resources against the canonical plan.
9. Keep the existing rollback path if a write or final verification fails.

### Performance characteristics

The expensive Discord writes cannot be removed because Discord stores role
permission overwrites individually. S10.8 therefore optimizes the avoidable
work: repeated channel reads, repeated role scans and per-resource verification
reads.

Progress is emitted:
- when live state is loaded;
- when the complete diff is compiled;
- about every 20 permission writes;
- before final verification;
- when complete.

Each individual Discord permission write also has a 25-second watchdog so a
single stalled REST request cannot leave the UI waiting forever.

### Resume behavior

No special destructive resume mode is required. If a prior run stopped after
some successful writes, the next run recompiles the diff from current Discord
state. Already-correct writes are automatically skipped.

### Canonical plan

S10.8 does not redesign permission policy. It continues to use the embedded
S10.7 canonical plan:
`memory/prime_kingdom_permission_plan_s10_7.json`.
