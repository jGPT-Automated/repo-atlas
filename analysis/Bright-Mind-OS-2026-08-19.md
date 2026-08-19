# Bright Mind OS — Daily Deep Dive (2026-08-19)

**Repo:** `agenticjess-star/bright-mind-os`  
**Recent activity:** latest commit `6b0404c` on 2026-07-09; 1 star, 0 open issues  
**Verification:** shallow source checkout, recursive GitHub tree, README/package inspection, `npm install`, `npm run build`, `npm test`

## Product read

Bright Mind OS is the renamed/focused Alpha Gemini decision aid for Polymarket recurring crypto Up/Down contracts. It intentionally removed unsupported particle-filter, Monte Carlo, Brier-score, decision-engine, and governance surfaces. The remaining product has a coherent operator loop: Coinbase spot ticks → SMA momentum prior → Polymarket Gamma/CLOB market context → live chart/book comparison.

## Code-verified architecture

- Vite + React 18 + TypeScript with 85 source files and public Coinbase/Polymarket feeds.
- Active surface is concentrated in `src/hooks/useCoinbasePricesAll.ts`, `src/hooks/useClobWebSocket.ts`, `src/hooks/useUpDownMarkets.ts`, `src/lib/polymarket.ts`, and `src/lib/smaSignal.ts`.
- One persistent Coinbase socket handles four assets; CLOB socket handles book and price-change events with heartbeat/reconnect logic.
- Browser storage is used for cached market data and preferences; there is no backend in the current product.
- Only the starter `src/test/example.test.ts` exists; no focused tests protect the trading signal or market discovery logic.

## Verification results

- `npm run build`: **PASS** (855.44 kB minified JS; Vite warns above 500 kB).
- `npm test -- --run`: **PASS** (1 starter test).
- `npm ci`: **FAIL before dependency installation** because `package-lock.json` is out of sync with package metadata; missing transitive entries include Vitest packages and there is a sourcemap-codec mismatch.
- `npm install`: **PASS**, after which build and test pass.

## Product risks

1. The lockfile defect makes clean CI/deploy reproducibility unreliable.
2. The core signal and slug/discovery behavior has no meaningful automated regression coverage.
3. A live market tool needs explicit stale-feed/expired-market states and safe handling of malformed public API payloads; these should be tested independently of network availability.
4. The README frames `leanProb` as a prior rather than a forecast, which is correct; the UI should preserve that distinction prominently to avoid overclaiming.

## Agent tasks created

- `bright-mind-os-001` — regenerate lockfile and prove clean `npm ci`.
- `bright-mind-os-002` — add deterministic tests for SMA signal and market discovery.
