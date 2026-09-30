# Prime Exchequer — E1 Foundation

C++20 + D++ + PostgreSQL/libpqxx + Groq + 8-language i18n.

E1:
1. Currency Core
2. Wallet System
3. Balance Management
4. Currency Configuration
5. Economic Ledger

Only six slash commands:
`/exchequer` `/wallet` `/ledger` `/market` `/rewards` `/games`

Buttons navigate by updating the existing Discord message.
AI is read-only/advisory in E1. Money uses integer BIGINT values.

Build:
```bash
cp .env.example .env
psql "$DATABASE_URL" -f migrations/001_exchequer_foundation.sql
cmake -S . -B build
cmake --build build -j
./build/prime_exchequer
```
