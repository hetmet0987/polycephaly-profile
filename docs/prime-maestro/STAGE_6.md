# Prime Maestro — Stage 6: Audio Quality & Resilience Core

Stage 6 hardens playback without expanding the public command surface. `/play`, `/music`, and `/help` remain the only commands.

## What changed

- Bounded Songbird source preparation retries with configurable timeout/backoff.
- Failed preparation attempts are stopped before they can become application queue metadata.
- Exact-provider recovery: Local Library → Audius → External Backend → Jamendo, while preserving the selected artist/title/version identity.
- Automatic voice rejoin attempt when Discord reports Prime Maestro itself disconnected during an active session.
- HTTP/Audius streaming clients use an 8-second connection timeout and limited redirects.
- Configurable default playback volume.
- Queue Loop rebuild respects the Stage 6 preparation timeout and default volume.
- Per-guild resilience telemetry: last event/error, preparation latency, retry count, recovered failure count, and queue consistency warnings.
- `/music` gains a compact `◇ Health` button and `Playback health` action.
- Queue metadata vs Songbird queue length is checked whenever the player is refreshed; mismatches are surfaced as diagnostics rather than silently hidden.

## Environment

```env
AUDIO_PREPARE_TIMEOUT_SECS=15
AUDIO_PREPARE_RETRIES=2
AUDIO_DEFAULT_VOLUME=1.0
```

The values are clamped by the configuration loader to safe ranges.

## Recovery principle

Stage 6 may change **provider**, but not **recording identity**. A dead stream can fall back only to an exact artist/title match accepted by the Stage 5 identity engine. Prime Maestro does not use a similarly named cover/remix as a resilience shortcut.
