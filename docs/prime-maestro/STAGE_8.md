# Prime Maestro — Stage 8
## Personal Music & Server Profiles

Stage 8 adds persistent, practical music memory on top of the existing Stage 4–7 player. It deliberately avoids creating a large set of new slash commands.

### Personal Music
- `♡ Favorite` toggles the current recording in the listener's saved library.
- Up to 50 favorites are kept per user.
- `♬ My Music` shows favorites, recent listening and personal track-start count.
- The first five favorites can be replayed from buttons.
- Favorite replay stores no provider secrets. It saves recording identity and resolves a fresh authorized source through the existing exact resolver.

### Listening History
- A recording enters history only when it actually becomes the current Songbird track.
- Merely searching or queueing a recording does not count as a play.
- Up to 30 recent recordings are kept per listener.
- Queue transitions record the newly promoted current track automatically.

### Server Music Profile
- Total track starts.
- Unique listeners.
- Top recordings by actual track-start count.
- Recent server listening.
- Up to 50 server recent entries and 50 ranked track identities are retained.

### Persistence
The profile store defaults to:

```env
MAESTRO_PROFILE_PATH=data/maestro_profiles.json
```

The file is created automatically. Stage 8 stores metadata only: title, artist, artwork/link hints and source labels. Playback bearer tokens and raw authenticated stream URLs are never written into the profile store.

### Existing engine retained
Stage 8 keeps:
- Stage 4 Queue & Session Engine
- Stage 5 Smart Search & Match Engine
- Stage 6 Audio Quality & Resilience Core
- Stage 7 Royal Music Experience

Apple Music remains outside the active provider stack.
