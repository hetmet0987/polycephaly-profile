# Prime Maestro — Stage 7: Royal Music Experience

Stage 7 is the presentation/interaction layer over the existing Stage 4 queue, Stage 5 matching and Stage 6 resilience engines.

## Public surface
- `/play query:<song>` — search/select/enqueue.
- `/music` — one central Royal Player.
- `/help` — concise usage guide.

No command explosion was introduced.

## Royal Now Playing
The player surfaces only information useful during listening:
- artwork when supplied by the selected provider,
- title and artist,
- requester and voice channel,
- exact playback source,
- elapsed playback time and volume from Songbird,
- loop state,
- upcoming count and queue preview,
- canonical track page when available.

Discord messages are not edited every second. `↻ Refresh` requests a fresh Songbird snapshot, which avoids a background message-update loop and rate-limit pressure.

## Controls
Pause/Resume, Skip, Stop, Loop, Shuffle, Clear Up Next, Queue and Refresh remain buttons. Queue precision actions remain under `/music` rather than becoming new commands.

## Quiet diagnostics
Stage 6 health data remains available through `/music action:Playback health`. Normal Now Playing cards hide healthy diagnostic noise and surface resilience information automatically only when an error/warning exists.

## Retained engines
- Stage 4 Queue & Session Engine 2.0
- Stage 5 Smart Search & Match Engine
- Stage 6 Audio Quality & Resilience Core
- Apple Music remains outside the active stack.
