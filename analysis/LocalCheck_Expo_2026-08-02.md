# LocalCheck_Expo — 2026-08-02 Deep Dive

## Status
🟢 **Release verification / launch gate** · confidence 4.9/5

Repository activity is quiet since the 2026-08-01 push, but the repo is unusually well-instrumented for shipping: `CURRENT_STATE.md`, `LAUNCH_CONTROL.md`, `RELEASE_RUNBOOK.md`, `DEPLOYMENT.md`, and `ACTIVITY_LEDGER.md` define the operating truth. The current product is an Expo SDK 54 iOS-first pickup-sports app live on TestFlight, with roughly 5.7k seeded courts.

## What the codebase is
- Expo Router mobile app with auth-gated tabs: Home, Schedule, Compete, Explore, and ELO/Me.
- Supabase is the only backend: Postgres, Auth, RLS, Realtime/broadcast invalidation, and approved RPCs for atomic writes.
- Domain services cover courts, check-ins, scheduled runs, games/ELO, friends, feed, profiles, planned visits, push tokens, and subscriptions.
- Native Mapbox and EAS workflows are the principal release-sensitive dependencies.
- The design contract is coherent: dark editorial brutalism, orange live-state accent, hard grid, Oswald/Inter typography, and minimal decoration.

## Current strengths
1. The repo explicitly rejects the common failure modes: mock data, AsyncStorage app-data caching, client Elo math, raw writes that bypass RPCs, and shipping the Replit-era mockup sandbox.
2. Check-in and game logging have server-owned atomic behavior, including checkout of a prior court, stale check-in expiry, capacity-aware run joins, and server-side Elo.
3. The release process is documented and repeatable: push to main for OTA, version tags for EAS/TestFlight, with native acceptance called out separately.

## Risks / open gates
- The actual App Store/TestFlight state is external to this repo and cannot be proven from GitHub alone.
- Native Mapbox still needs physical-device quality acceptance; web success is not evidence for iOS.
- Auth-first + authenticated-only RLS can look like an empty/broken product when session provisioning is wrong.
- Onboarding is explicitly pending/rebuild-needed, so first-run conversion remains a product risk even if core loops work.
- One open issue remains; inspect it before tagging a release.

## Next action
Do not add features. Run the release runbook against the latest native build: install on Jesse’s device, validate auth/profile provisioning, Mapbox, two-device check-in/broadcast, run capacity, game/Elo, stale checkout, and push-token behavior. Then record the App Store/TestFlight result in `docs/CURRENT_STATE.md` and close or escalate the remaining issue.

## Score
**4.9/5** — strongest shipping asset; now blocked by external release evidence, not architecture.
