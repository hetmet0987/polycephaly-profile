# Prime Maestro — Tavily Intelligent Music Discovery

## Role

Tavily is a Search/Discovery layer, not a playback provider.

Example:

`/play query:Poker Face by Lady Gaga`

Prime Maestro:
1. sends a music-oriented web discovery query to Tavily;
2. collects high-scoring page titles/snippets;
3. derives a small set of query variants;
4. searches Local Library, MusicBrainz, Jamendo and External Backend with those variants;
5. boosts candidates whose artist/title are corroborated by Tavily web references;
6. renders one Search Panel;
7. waits for the user to choose;
8. only then resolves/plays audio.

## API

Prime Maestro calls:

`POST https://api.tavily.com/search`

with Bearer authentication and a JSON body using:
- `search_depth = basic`
- `topic = general`
- `max_results = 6`
- `include_answer = false`
- `include_raw_content = false`
- `include_images = false`

## Failure behavior

If Tavily is missing, rate-limited, unavailable, or returns an error, `/play` continues using the original query and the native providers. Tavily is an enhancer, not a single point of failure.
