# Stage 2 — MusicBrainz Catalog + Jamendo Playback

## Architecture

/play
  |
  +--> Direct Stream
  |
  +--> Local Library
  |
  +--> Jamendo
  |
  +--> External Backend
  |
  `--> MusicBrainz identity
          |
          +--> canonical title
          +--> canonical artist
          +--> release
          +--> recording MBID
          |
          `--> retry Jamendo / Local / Backend

Songbird receives only an actual playback source.

## MusicBrainz

Public catalog. No API key is required.

Prime Maestro:
- sends the configured `MUSICBRAINZ_USER_AGENT`;
- limits catalog calls internally to roughly one request per second;
- searches recordings;
- extracts title, artist, first release and recording MBID.

## Jamendo

`JAMENDO_CLIENT_ID` is used with Jamendo API v3 track search.

Prime Maestro requests playable track metadata including:
- name
- artist
- audio URL
- artwork
- share URL

A Jamendo result is passed to Songbird as an HTTP playback source.

## Important catalog distinction

MusicBrainz can identify a commercial recording that Jamendo does not host. In that case Prime Maestro reports that no configured playback provider can play the requested recording instead of attempting scraping/extraction.
