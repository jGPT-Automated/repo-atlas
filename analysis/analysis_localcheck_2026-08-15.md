# LocalCheck — Deep Dive (2026-08-15)

Repository: `agenticjess-star/localcheck`
Branch reviewed: `main`
Scope: read-only code review; `LocalCheck_Expo` remains off-limits.

## Executive assessment
LocalCheck has a clear, differentiated loop—check in, see who is at a court, play, log a result, return—and the web build contains enough real UI/data plumbing to validate it. However, the current schema and adapter are not ready for trustworthy competitive records or privacy-sensitive presence. The app treats public visibility as a broad database read policy, uses client-writable match records to drive ELO side effects, and relies on application defaults such as `court1` rather than database constraints. These are launch-blocking correctness/security issues, not polish.

## Code-verified findings

### 1. Public SELECT policies expose full profile and activity rows (P0)
Evidence: migration `20260228005659...sql` creates `Profiles are viewable by everyone` with `USING (true)`. Migration `20260228034425...sql` creates `Check-ins viewable by everyone`, `Plans viewable by everyone`, `Matches viewable by everyone`, and `RSVPs viewable by everyone`, also with `USING (true)`. The adapter calls `profiles.getAll()` and joins full profiles client-side in `checkIns.getActive`, `plans.getUpcoming`, and `matches.getRecent`.

Impact: the app's intended “public presence” can become unrestricted access to email-linked profile data and all activity metadata. RLS should expose an intentional public projection (or safe view), not the entire base rows.

### 2. Match writes are client-authorized and can manipulate ratings (P0)
Evidence: the original match policy allows inserts when `auth.uid() = winner_id`; migration `20260301061347...sql` broadens this to `auth.uid() = winner_id OR auth.uid() = loser_id` and allows either participant to update. Migration `20260302043421...sql` attaches rating-changing triggers after INSERT and UPDATE. There is no server-side state machine preventing score/winner/status mutation, replay, or unauthorized transition after confirmation.

Impact: a participant can potentially submit or update records that trigger repeated/incorrect ELO changes. Competitive data must be written through an RPC with validation, immutable result rows, dispute/reversal semantics, and one-time rating application.

### 3. Check-in expiry is client-filtered, not enforced server-side (P1)
Evidence: `check_ins.expires_at` defaults to `now() + interval '2 hours'`; `src/lib/db.ts` filters `expires_at > now()` but there is no database cleanup/unique-active constraint in the reviewed migrations. `checkIns.create()` directly inserts without an upsert or transaction.

Impact: stale rows accumulate, a user can create multiple active check-ins, and realtime consumers can observe inconsistent state. The database should enforce one active check-in per user/court (or globally), validate expiry, and clean/archive expired rows.

### 4. Hardcoded court defaults undermine the court-scoped architecture (P1)
Evidence: `src/lib/db.ts` defaults most operations to `courtId = 'court1'`; README says “everything is scoped to a court,” but the adapter's default silently routes calls to a sentinel court. This can make a missing selection look like valid activity in production.

### 5. Realtime channels are broad and unscoped (P1)
Evidence: `checkIns.onChanges()` subscribes to `supabase.channel('check_ins_realtime')` with table-wide `postgres_changes` and no court filter. The UI can refresh on unrelated court activity and the policy surface is broader than the product's intended local-court model.

## Recommended next moves
1. Fix the data contract first: create safe public views/projections and remove base-table `USING(true)` access where sensitive fields exist.
2. Move match submission/confirmation/ELO application into a SECURITY DEFINER or carefully scoped RPC with immutable event semantics and regression tests.
3. Add database constraints and cleanup for active check-ins; make `courtId` required at the adapter boundary.
4. Scope realtime subscriptions by court and user, then instrument check-in-to-play conversion.

## Verdict
The product idea is still strong, but the current web build is a validation prototype, not a trustworthy competitive social product. A security/correctness sprint would materially improve the odds of a real pilot more than additional tabs or visual work.
