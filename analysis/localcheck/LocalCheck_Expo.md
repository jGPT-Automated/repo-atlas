# LocalCheck_Expo — Street Sports App

**Account:** agenticjess-star  
**Repo:** agenticjess-star/LocalCheck_Expo  
**Pushed:** 2026-07-01 (TODAY — active development)  
**Language:** TypeScript + Expo  
**Status:** Advanced development → App Store submission candidate

---

## What It Is

LocalCheck_Expo is a **native iOS/Android street sports discovery app** for finding active courts, checking in to broadcast presence, joining game runs, and ranking up via ELO. Basketball + Pickleball parity. Dark editorial brutalist UI inspired by Nike SNKRS.

Think: real-time Strava for pickup basketball + competitive billiards, with a **community feed** and **head-to-head leaderboards** by sport and location.

---

## Design System

**Color palette:** Dark editorial brutalism (Nike SNKRS energy)
```
Background:    #0D0D10  (true black)
Surface:       #151519  (dark card)
Border:        #28282F  (grid lines, minimal rounding)
Text primary:  #F2F2F6  (white)
Text secondary:#9A9AAA  (muted)
Accent:        #FF5500  (orange — live, active, selected)
Win indicator: #00E87A  (neon green)
Loss indicator:#FF3B5C  (neon red)
```

**Typography:**
- Headings: **Oswald** 700 (all caps, tight tracking, bold presence)
- Body: **Inter** 400/500/600/700 (readable on dark)
- Border radius: 2–8px (hard edges, minimal decoration)

**Philosophy:** Information-dense, zero decorative fluff. Every pixel earns its place.

---

## Current Features

### Core Screens

| Screen | Route | Status | Notes |
|--------|-------|--------|-------|
| **Home / Map** | `/(tabs)/` | ✓ Live | Full-screen Mapbox with dark v11 style, sport-colored pulse dots, fly-to on court select |
| **Schedule** | `/(tabs)/schedule` | ✓ Live | Court schedules and availability |
| **Compete** | `/(tabs)/compete` | ✓ Live | Leaderboard (LOCAL/REGIONAL/GLOBAL scope) + Log Game form |
| **Explore** | `/(tabs)/explore` | ✓ Live | Live courts list, city leaderboard, sport filter tabs |
| **Me / ELO** | `/(tabs)/elo` | ✓ Live | Stat dashboard: rank, W/L, recent matches, animated counter |
| **Court Profile** | `/court/[id]` | ✓ Live | Editorial spread: conditions, roster, upcoming runs, check-in |
| **Game Run** | `/run/[id]` | ✓ Live | Matchmaking lobby (Team A vs B), ELO balancing, RSVP |
| **Player Profile** | `/player/[id]` | ✓ Live | Head-to-head stats, add friend, match history |
| **Settings** | `/settings` | ✓ Live | Profile, visibility, LocalPlus, sport/court preferences, notifications |
| **Community Feed** | `/(tabs)/feed` | ✓ Live | Reverse-chronological activity, sport filter tabs (ALL/BASKETBALL/PICKLEBALL) |

### Latest Development (Session 3 — June 20, 2026)

**Completed:**
- ✅ ClassicTabLayout finalized (bottom nav, iOS/Android/Web parity)
- ✅ AppContext state model with AsyncStorage persistence
- ✅ `preferredSport` + `preferredCourtId` settings
- ✅ Leaderboard clickability → navigate to `/player/[id]`
- ✅ Friend badges on leaderboard rows
- ✅ Leaderboard scope renamed & default changed (LOCAL instead of GLOBAL)
- ✅ Sport-specific icons + color coding across all screens

### Recent Development (Session 2 — March 29, 2026)

**Design elevation + Infrastructure:**
- Mapbox Dark v11 integration (native + web)
- ELO screen with animated counter + progress bar
- Feed & Explore with sport-colored accent lines
- Win/Loss neon color coding throughout

---

## Technical Stack

- **Framework:** Expo (React Native)
- **Language:** TypeScript
- **State:** AppContext (async storage persistence)
- **Maps:** Mapbox GL (web) + react-native-maps (native)
- **UI:** Custom components (LivePulse, StatBlock, TabLayout)
- **Styling:** Design tokens system (color, typography, spacing)
- **Backend:** Not yet shown in repo (TBD — likely Supabase or Firebase)

---

## Development Velocity

- **File count:** 354 (structured monorepo)
- **Last commit:** 2026-07-01 (18 minutes ago from automation trigger!)
- **Active sessions:** 3+ documented in ACTIVITY_LOG.md
- **Cadence:** Regular, consistent development (June 20 session was complete)

---

## Why It Scores High

1. **Native cross-platform:** iOS + Android + Web all supported day-one
2. **User-facing features:** Fully fleshed-out app (not a PoC)
3. **Design execution:** Dark editorial brutalism executed cleanly across 10+ screens
4. **State management:** Persistent AppContext with typed preferences
5. **UX polish:** Animated counters, pulsing indicators, clickable leaderboards
6. **Sports parity:** Basketball + Pickleball equally represented (not afterthought)

---

## Gaps & Next Steps

1. **Backend not visible:** State model exists, but data persistence layer (API, DB) not shown in repo
   - Likely hosted elsewhere or in private subdirectory
2. **App Store submission:** Ready for iOS build + store submission (no blocking issues visible)
3. **Push notifications:** Settings screen mentions them, need to verify implementation
4. **Monetization:** LocalPlus mentioned in settings, no pricing logic shown

---

## Hiring Signal

**Tier:** STRONG — native app with complete feature set, thoughtful design system, and production-ready cross-platform architecture.

**Keywords:**
- Native iOS/Android development
- React Native / Expo expertise
- State management at scale
- Design system execution
- Mapbox integration
- Competitive gaming mechanics (ELO ranking)

**For:** iOS engineer roles, mobile product manager, native engineer hiring (especially at sports-tech, gaming, or community platforms).

---

## Score: 4.1 / 5

**Reasoning:**
- ✅ Complete feature set (9+ screens, fully functional)
- ✅ Production design execution (dark brutalism throughout)
- ✅ Cross-platform native (iOS/Android/Web)
- ✅ Active recent development (pushed 2026-07-01)
- ⚠️ Backend not visible in repo (raises questions about data persistence, API design)
- ⚠️ Not yet live/deployed (no public URL)

**Next milestone:** App Store submission.
