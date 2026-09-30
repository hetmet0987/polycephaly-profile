# Prime Maestro — Audius Primary Playback Provider

## Environment

```env
AUDIUS_API_KEY=
AUDIUS_BEARER_TOKEN=
```

Keep the Bearer Token private. Prime Maestro never prints it in logs and the playback source's Debug output redacts it.

## Search

Prime Maestro calls:

`GET https://api.audius.co/v1/tracks/search`

with:
- `query`
- `limit`
- `sort_method=relevant`
- `Authorization: Bearer <AUDIUS_BEARER_TOKEN>` for backend REST access

Tavily-generated query variants are also tried to improve artist/title/version recall.

## Playback

For non-gated Audius results Prime Maestro creates:

`GET https://api.audius.co/v1/tracks/{track_id}/stream`

The Songbird `HttpRequest` uses a reqwest client carrying the Audius Authorization header, including redirects.

Tracks marked `is_stream_gated` are not shown as immediately playable because they may require user-specific or signed access.

## Provider priority

1. Local Music Library — strongest exact source when the user owns/provides the file
2. Audius — primary online playback provider
3. External Audio Backend — pluggable authorized provider
4. Jamendo — secondary/fallback online provider
5. MusicBrainz — catalog/identity only
6. Tavily — web discovery/ranking only

Catalog metadata is no longer allowed to suppress a real playable result in the Search Panel.
