# Prime Maestro — Stage 5

## Smart Search & Match Engine

Stage 5 is an accuracy stage. It does not add another music provider. Instead it puts one consistent identity model in front of MusicBrainz, Local Library, Audius, External Backend and Jamendo.

### Delivered

1. Query profiler for `Artist - Title`, `Title by Artist` and unstructured searches.
2. Normalization that removes punctuation and common “official audio/video/lyrics” noise.
3. Lightweight typo tolerance using Levenshtein similarity without adding a dependency.
4. Version classifier for live/remix/cover/slowed/reverb/sped-up/instrumental/nightcore/karaoke.
5. Strong version-conflict penalties and requested-version boosts.
6. Provider-independent candidate confidence from 0–100.
7. Search Panel confidence labels and visible version warnings.
8. MusicBrainz/Tavily evidence still influences ranking, but does not override severe identity conflicts.
9. Exact resolver uses the same identity/version compatibility rules for Audius, Backend and Jamendo.
10. Stage 4 queue/session engine is retained unchanged in behavior.

### Design rule

A playable result is useful only when it is the song the user meant. Stage 5 therefore ranks identity correctness before convenience and continues to refuse silent substitutions during catalog resolution.
