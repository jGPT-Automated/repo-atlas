# Repo Atlas Deep Dive — bright-mind-os

**Date:** 2026-08-18  
**Repo:** `agenticjess-star/bright-mind-os`  
**Scope:** read-only source audit; recent commits included `f1c0b72` (2026-08-17, verified research on slugs) and the preceding UI/data changes.

## Verification

- `package.json` exposes `test`, `build`, and `lint`, but `npm ci --ignore-scripts` fails because `package-lock.json` is stale/incomplete (missing Vitest dependency entries and a sourcemap-codec version mismatch). Therefore the local test/build/lint commands could not run from a clean install in this checkout.
- The repository has a single placeholder test under `src/test/example.test.ts`; no behavioral tests cover WebSocket lifecycle or market subscription behavior.
- README/source review confirms this is a client-only market dashboard using public Polymarket and Coinbase WebSockets/APIs; no secrets are required for the data path.

## Findings

### P1 — Coinbase WebSocket reconnects after component unmount

`src/hooks/useCoinbasePrice.ts` closes the socket in the effect cleanup, but does not clear/null `ws.onclose` or set a disposed flag. The intentional close therefore enters `onclose`, schedules `setTimeout(connect, 3000)`, and can reopen a socket after the component has unmounted. The same lifecycle pattern should be checked in `useCoinbasePricesAll.ts`.

**Impact:** leaked sockets/timers, duplicate live feeds after navigation/remount, unnecessary API load, and state updates from an unmounted feature.

### P1 — CLOB subscriptions never remove old token IDs

`src/hooks/useClobWebSocket.ts` sends a new `{ assets_ids, type: "market" }` subscription when the token set changes, but it does not unsubscribe the previous set. Asset/timeframe changes can leave the browser subscribed to stale markets indefinitely; the `quotes` map also retains stale entries.

**Impact:** increasing message volume and stale quotes, with correctness risk when the UI changes market selection.

## Recommended implementation tasks

1. Add an explicit disposed/connection-generation guard and cleanup-safe close path to both Coinbase hooks; test that unmount does not schedule/reopen a connection.
2. Track prior CLOB token IDs, unsubscribe removed IDs (or recreate the socket when required by the protocol), and clear quotes for removed IDs; test asset/timeframe switching.
3. Repair and commit the npm lockfile, then add focused hook tests so clean CI can run the regression suite.
