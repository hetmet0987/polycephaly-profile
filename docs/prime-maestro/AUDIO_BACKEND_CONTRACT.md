# Prime Maestro Audio Backend Contract

Prime Maestro no longer treats one public catalog as the universal audio source.

The optional `AUDIO_BACKEND_URL` is a provider adapter you control and are authorized to use.
It must return audio URLs that the bot is permitted to stream.

## Search

`GET {AUDIO_BACKEND_URL}/search?q=INTERWORLD%20-%20METAMORPHOSIS&limit=8`

Accepted response:

```json
{
  "results": [
    {
      "title": "METAMORPHOSIS",
      "artist": "INTERWORLD",
      "stream_url": "https://media.example/audio/track",
      "thumbnail": "https://media.example/cover.jpg",
      "source": "My Authorized Provider",
      "canonical_url": "https://example/track"
    }
  ]
}
```

A bare JSON array with the same item shape is also accepted.

## Resolve fallback

If `/search` returns HTTP 404, Prime Maestro falls back to:

`GET {AUDIO_BACKEND_URL}/resolve?q=INTERWORLD%20-%20METAMORPHOSIS`

Return one object with the same fields, or HTTP 404 when no source exists.

## Authentication

If `AUDIO_BACKEND_TOKEN` is set, Prime Maestro sends:

`Authorization: Bearer <token>`

## Provider policy

The backend should only expose streams/files you are authorized to use. Prime Maestro deliberately does not bypass DRM, extract protected streams, or silently substitute a different artist/version.
