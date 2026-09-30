# Prime Seneschal S10
## Sovereign Activation & Controlled Kingdom Deployment

S10 is the first stage that may apply the verified S7 permission memory to live Discord resources. It does not expose Apply All and remains disabled by default.

### Activation chain

S7 Permission Memory -> S8 Simulation -> S9 Freshness/Preflight -> S10 Owner Approval -> W1..W6 -> Post-deployment S6 compliance.

### Required gates

Both environment switches must be true:

```env
ENABLE_PERMISSION_EXECUTOR=true
ENABLE_SOVEREIGN_SETUP=true
```

The owner must then open Sovereign Activation, pass a fresh census and all-resource preflight, and explicitly approve activation. Approval is bound to a structural census fingerprint and the exact S7 permission-memory fingerprint.

### Structural freshness

The census fingerprint includes guild identity, owner identity, role identity/managed state, categories, channels, kinds and parent topology. It intentionally excludes generated timestamps and current permission overwrites, so a successful wave does not invalidate the approval merely because that wave changed the intended VIEW/SEND bits.

### Controlled waves

- W1 Public & Community: 39 resources
- W2 Government & Administration: 25 resources
- W3 Audit & Intelligence: 15 resources
- W4 Defence & Prime Marshal: 9 resources
- W5 Judiciary: 16 resources
- W6 Foreign Affairs & Institutions: 33 resources

All 137 setup-eligible resources are classified. The three uncategorized/runtime channels remain preserve-only.

Later waves require COMPLETED receipts from every previous wave with matching census and memory fingerprints.

### Mutation boundary

Only role overwrite bits VIEW_CHANNEL and SEND_MESSAGES are managed. Guild-level role permissions are not changed. GROUP_HEADER roles remain ignored. Discord-managed/bot roles remain preserved. S5 temporary member access remains outside the static deployment model.

### Failure handling

Each resource is snapshotted before mutation. A resource write/verification failure attempts immediate rollback of that resource. A later failure in a wave triggers reverse-order rollback of resources already applied in that wave. The wave receipt records COMPLETED, ROLLED_BACK, or ROLLBACK_PARTIAL_FAILURE.
