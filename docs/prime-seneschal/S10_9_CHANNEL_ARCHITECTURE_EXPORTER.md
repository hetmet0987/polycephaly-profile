# Prime Seneschal S10.9
## Channel & Category Architecture Exporter

S10.9 adds a dedicated owner-facing export designed specifically for rebuilding
Prime Seneschal's canonical permission memory from the real Discord layout.

### Workflow

`/seneschal -> Administration -> Channel Map`

The button always performs a fresh Discord scan first. It then generates:

- `prime_kingdom_channel_map_....json`
- `prime_kingdom_channel_map_....txt`

### What the export contains

For every category:
- category ID, name and position;
- current category permission overwrites;
- every real child channel grouped under that category.

For every channel:
- channel ID and name;
- channel type;
- position;
- parent category ID and name;
- topic;
- NSFW state;
- permission-sync status;
- all explicit permission overwrites with resolved role names when available.

The export also includes:
- all uncategorized channels;
- complete role ID/name reference;
- managed-role flag;
- guild identity and census totals.

### Intended use

The export is an observed-state architecture document. It does not treat the
current permission overwrites as correct policy.

The owner can send the JSON back to ChatGPT. The canonical permission memory
can then be rebuilt with knowledge of the exact category/channel topology,
instead of relying mainly on role names or inferred channel semantics.
