# Prime Maestro — Stage 9
## DJ, Permissions & Community Controls

Stage 9 adds server-safe music governance without creating a large new command surface. `/play`, `/music`, and `/help` remain the public entry points.

### DJ and session-host authority

Configure one or more Discord role IDs:

```env
MAESTRO_DJ_ROLE_IDS=123456789012345678,234567890123456789
```

When at least one DJ role is configured, destructive/shared player controls are reserved for a DJ or the session host. The session host is the requester who opens an empty Prime Maestro session and remains host until the session is cleared.

Protected controls include Pause/Resume, Stop, Loop, Shuffle, Clear Up Next, Remove and Move. Queue viewing, Favorites, My Music, Server Profile and health/status viewing remain lightweight.

If `MAESTRO_DJ_ROLE_IDS` is blank, Prime Maestro preserves the earlier same-voice control behavior.

### Vote skip

Skip is intentionally different from destructive controls:

- current requester: immediate skip
- session host: immediate skip
- DJ: immediate skip
- other human listeners: one vote each

```env
MAESTRO_VOTE_SKIP_PERCENT=50
```

Votes are tied to the current track ID. A track change naturally invalidates the old vote state.

### Fair queue and anti-spam

```env
MAESTRO_MAX_PENDING_PER_USER=10
MAESTRO_REQUEST_COOLDOWN_SECS=3
```

The queue limit counts upcoming tracks owned by the requesting user. The currently playing track is not counted against the pending allowance. The request cooldown applies to `/play` searches/requests and can be disabled with `0`.

### Optional channel restrictions

```env
MAESTRO_ALLOWED_TEXT_CHANNEL_IDS=
MAESTRO_ALLOWED_VOICE_CHANNEL_IDS=
```

Values are comma-separated Discord channel IDs. Blank means unrestricted for that channel type.

### Compact controls

The Stage 7/8 player adds only one governance entry point: **♛ Controls**. It reports safe, non-secret policy information such as configured DJ-role count, queue limit, cooldown, vote threshold and channel-policy status.

### Retained systems

Stage 9 keeps all earlier layers:

- Stage 4 Queue & Session Engine
- Stage 5 Smart Search & Match
- Stage 6 Audio Quality & Resilience
- Stage 7 Royal Music Experience
- Stage 8 Personal Music & Server Profiles

Apple Music remains outside the active stack.
