# Prime Maestro 1.0 — Stage 10

**Production Intelligence & Final Release** closes the Prime Maestro roadmap at Stage 10.

## Public commands

- `/play` — search/request music through Smart Match, exact resolution and the governed queue.
- `/music` — Royal Player, queue, Loop, intelligent Autoplay, Favorites, Server Profile, governance and production status.
- `/dj-roles` — configure `♬ ┊ GRAND MAESTRO`, `♩ ┊ GRAND CONDUCTOR`, `♪ ┊ ROYAL DJ`.
- `/help` — compact Stage 10 guide.

## Stage 10 additions

- Intelligent Autoplay from **actual server listening history** only.
- Re-resolves recommendations through exact authorized playback providers; never silently substitutes a cover/remix.
- `/music action:Production status` for uptime, sessions, cache, providers, DJ role count and resilience health.
- Startup self-test for local/profile paths and provider configuration.
- Production version `1.0.0`; Songbird remains pinned to `0.6.0`.
- Apple Music remains out of the active stack and no `APPLE_MUSIC_DEVELOPER_TOKEN` is required.

## Active engine

Discovery / identity: Tavily (optional) + MusicBrainz.

Playback: Local Library → Audius → External Backend → Jamendo.

Reliability: Stage 6 bounded retry, timeout, exact fallback, queue-state health and voice reconnect.

## Build

```powershell
cargo build
cargo run
```

If the compiler reports an error, capture the full output and fix Stage 10 before changing providers or starting the next Prime bot rework.
