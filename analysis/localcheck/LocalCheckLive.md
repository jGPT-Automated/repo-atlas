# LocalCheckLive — Deep Analysis

**Account:** agenticjess-star  
**Created:** 2026-05-20  
**Last updated:** 2026-05-26  
**Size:** 12.5MB  
**Status:** 🟢 BETA — feature-complete, ready for Expo Go testing / App Store  
**Portfolio value:** ⭐⭐⭐ HIGH — live product, modern mobile stack, complete feature set

---

## What It Is

A **native mobile rewrite of LocalCheck** (the original web app at localcheck.lovable.app). Built with Expo, React Native, Drizzle ORM, Express backend. Ships with full court discovery, ELO rankings, real-time check-ins, game run matchmaking, and a community feed.

**Timeframe:** Created and feature-complete in 6 days (May 20–26, 2026). Currently in final polish phase.

---

## Stack

- **Mobile**: Expo (React Native) + Expo Router (file-based routing)
- **Backend**: Express 5 (ready for deployment, schema set up)
- **Database**: PostgreSQL + Drizzle ORM (`drizzle-zod` for type-safe queries)
- **Map**: Mapbox GL v3 (web) + react-native-maps v1.18 (native), dark v11 style
- **State**: React Context + AsyncStorage (mobile), Express session middleware
- **API codegen**: Orval (OpenAPI spec → React Query hooks + Zod schemas)
- **Fonts**: Oswald 700 (headings) + Inter (body) via @expo-google-fonts
- **Package manager**: pnpm workspaces (monorepo structure)
- **TypeScript**: 5.9, strict mode

---

## Architecture

```
LocalCheckLive (pnpm monorepo)
├── artifacts/
│   ├── api-server/          # Express 5 API (ready to deploy)
│   └── mobile/              # Expo React Native app
│       ├── app/
│       │   ├── (tabs)/      # TabNavigator: Map, Feed, Explore, ELO
│       │   ├── court/[id]   # Court detail + check-in
│       │   ├── run/[id]     # Game run matchmaking lobby
│       │   └── +not-found.tsx
│       ├── components/      # Reusable: LivePulse, StatBlock, cards
│       ├── context/         # AppContext (global state + AsyncStorage)
│       ├── constants/       # Colors, typography, sample data
│       └── assets/          # AI-generated icons + placeholders
├── lib/
│   ├── api-spec/            # OpenAPI → Orval codegen
│   ├── api-client-react/    # Generated React Query hooks
│   ├── api-zod/             # Generated Zod validators
│   └── db/                  # Drizzle ORM + schema (PostgreSQL)
└── scripts/
```

**Design language:** "Brutal modernism" — dark black (`#0D0D0F`), volt green accents (`#DFFF00`), hard edges (no border-radius), precise typography (Oswald 700 for impact).

---

## Feature Set

### Screens & Routes

| Screen | Route | Status |
|--------|-------|--------|
| **Map** | `/(tabs)/` | ✅ Full-screen Mapbox, court markers (3 states: confirmed/community/pending), bottom sheet, add court FAB |
| **The Feed** | `/(tabs)/feed` | ✅ Reverse-chronological activity, sport filters, check-in/run/result cards |
| **Explore** | `/(tabs)/explore` | ✅ Live courts list, city leaderboard, sport filters |
| **My ELO** | `/(tabs)/elo` | ✅ Animated ELO counter, win/loss stats, tier progress bar |
| **Court Profile** | `/court/[id]` | ✅ Full editorial spread — conditions, live roster, upcoming runs, check-in CTA |
| **Game Run** | `/run/[id]` | ✅ Matchmaking lobby — team A vs B, ELO balancing, RSVP, result recording |

### Core Flows

**Check In to Court:**
1. Open Map → tap court marker
2. Bottom sheet slides up with court details + live roster
3. Tap **CHECK IN** → status updates, feed event generated, haptic feedback

**Join a Game Run:**
1. Open Court Profile → scroll to **Upcoming Runs**
2. Tap run card → Game Run lobby loads
3. Tap open slot on Team A/B → slot fills with your avatar + ELO
4. Tap WIN/LOSS → ELO updates, feed event posted

**Track ELO:**
- **My ELO** tab with animated counter (RAF-based, eased integer steps), win rate, tier progress bar

**Add a Court:**
- FAB button on Map → GPS drop → photo capture → AI verification (GPT-4o vision)
- Photo added to court detail as proof

### Technical Features

**Map integration:**
- **Web**: Mapbox GL v3 via CDN, custom DOM markers with volt-green color, hover animations, fly-to on selection
- **Native**: `react-native-maps` v1.18 + Mapbox Dark v11 via UrlTile
- **Markers**: 3 states (outline = confirmed, filled orange = community 5+, dashed = pending AI)
- **Performance**: Raw DOM elements inside `mapboxgl.Marker` (no React rendering overhead)

**ELO System:**
- Animated counter with cubic ease-out
- Sport-specific color coding (basketball/pickleball)
- Win/Loss badges with neon green/red
- Tier progress bar (Animated.Value)

**Sports Parity:**
- Basketball + Pickleball equally represented across all screens
- Sport-specific icons + colors (constants/SRC_COLORS)
- Filter tabs on Feed + Explore

**Performance Optimizations:**
- Spring animation for bottom sheet (slide-up + backdrop fade simultaneous)
- RAF-based ELO counter animation (avoids floating-point rendering on web)
- Mapbox markers as raw DOM (no React overhead)

---

## Development Phase

**Session 1 (May 20):** Initial build complete — all core screens + navigation + Mapbox.

**Session 2 (May 29):** Design elevation + Mapbox polish:
- Brutal modernism aesthetic refinement
- Dark mode color system expanded (`surfaceDark`, `card`, `border`)
- ELO animation upgrade (RAF-based counter)
- Feed + Explore sport filter tabs
- Haptic feedback on actions

**Last commit (May 24, 17:10):** "Update app navigation and layout with new tab bar functionality" — feature work still active.

**Current status:** Feature-complete, in final polish/testing phase.

---

## What's Missing / Next Steps

- **Expo Go testing**: No indication of app being tested on device yet (can't verify from repo)
- **Backend deployment**: Express API is schema-ready but no indication of live API endpoint
- **App Store submission**: No EAS build configuration or app signing setup visible
- **User authentication**: Backend structure exists but Clerk/auth provider integration unclear
- **Real data**: Sample data in app; unclear if connected to live Supabase/PostgreSQL yet
- **Push notifications**: Not mentioned (would be expected for check-in/run invites)

---

## Portfolio Assessment

**Why this is HIGH tier:**

1. **Real product, real timeline** — 6 days from concept to feature-complete mobile app
2. **Modern stack** — Expo, Drizzle ORM, Mapbox, Expo Router, React Native best practices
3. **Complete feature set** — not a MVP stub; includes ELO, matchmaking, feed, leaderboard, court verification
4. **Design thoughtfulness** — brutal modernism is intentional and executed consistently (not default styling)
5. **Performance-aware** — RAF animations, DOM optimization for Mapbox, async storage patterns

**Why not TIER-1 yet:**

- Not publicly deployed (can't verify end-to-end UX works on device)
- Backend not wired to live database
- No case study or demo video documenting the product

---

## Action Items

1. **Deploy to Expo Go** immediately — this is 10 minutes of work (generate Expo token, `expo publish`)
2. **Wire backend** — connect Express to Supabase PostgreSQL, deploy to Railway or Vercel
3. **Ship EAS build** — one-command Expo App Store/Play Store build (optional but recommended for portfolio)
4. **Create case study** — document the Expo stack, ELO algorithm, Mapbox integration, design system
5. **Record demo video** — 60-second walkthrough of map → check-in → feed → ELO

---

## Cross-Reference

**LocalCheck (original web app):** localcheck.lovable.app (76 commits, Supabase)  
**LocalCheckLive (native rewrite):** This repo (fresh start, May 20–26)

Should be presented as **one product, two platforms** in portfolio narrative. Web is the production version; mobile is the next iteration (currently in beta).

---

## Technical Debt / Edge Cases

- `.env` file handling — currently using `EXPO_PUBLIC_MAPBOX_TOKEN` (public but safe for API keys)
- No mention of location permissions — required for GPS functionality, should be handled in app startup
- No offline mode — feed/leaderboard will fail without network
- Sports enum hardcoded — scaling to new sports requires code change (consider config-driven)

All are minor and expected for an early-stage product.
