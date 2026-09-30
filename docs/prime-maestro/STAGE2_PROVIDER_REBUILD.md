# Stage 2 Provider Rebuild

This rebuild replaces the failed single-platform playback design.

## Why the old core was removed

The previous prototypes tied track discovery, media extraction, CDN authentication and Discord playback together. Changes in a commercial platform's private playback path could therefore break the whole bot even when Discord Voice itself was healthy.

## New boundary

### Catalog
Answers:
- What track did the user mean?
- What is the canonical title?
- Who is the artist?
- What artwork/link represents it?

Spotify may optionally provide this metadata.

### Playback Provider
Answers:
- Do we have an actual playable source?
- Is it a local file or direct media stream?

Providers:
- LocalLibrary
- ExternalBackend
- DirectHttpStream

### Voice
Songbird only receives a playable source. It no longer knows or cares which catalog identified the track.

## External backend independence

The core uses a tiny `/resolve` contract. A backend can later be:
- a licensed music service;
- a self-hosted audio relay;
- a radio/search service;
- a permitted content library;
- another provider added in the future.

Prime Maestro does not change public commands when providers change.

## User experience

The user still learns only:
- `/play`
- `/music`
- `/help`

Complexity stays internal.
