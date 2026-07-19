# GenerativeJesse-LIVE — Deep Dive Analysis

**Repo:** GenerativeJesse-LIVE (GenJess)  
**Status:** PRODUCTION LIVE  
**Live URL:** generativejesse.com  
**Last Update:** April 30, 2025 (3 months old; maintenance mode)

---

## Technical Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 18.3 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| 3D Graphics | Spline (Ocean intro scene) |
| Router | React Router v6 |
| Data Fetching | TanStack React Query v5 |
| State/Forms | React Hook Form + Zod validation |
| Charts | Recharts |
| Motion | Framer Motion |
| Icons | Lucide React + Tabler Icons |
| Deployment | Vercel (implied) |

---

## Architecture & Routes

**7 core routes** — intentionally designed experience flow:

1. **`/`** — Ocean intro Spline 3D landing (scroll-to-redirect)
2. **`/vision`** — Strategic identity/purpose page
3. **`/alpha`** — Closed/early-access product showcase
4. **`/lattice`** — Knowledge graph or interconnected concepts
5. **`/connect`** — Contact/networking page
6. **`/home`** — Main hub (after intro)
7. **`/about`** — Personal narrative
8. **`/projects`** — Project showcase (crypto dashboard implied)
9. **`/creations`** — Portfolio/artifact gallery (file-finder aesthetic)
10. **`/history`** — Timeline or changelog
11. **`*`** — 404 handler

**Key observation:** Multiple entry points suggest different audience segments (investors, users, collaborators, observers).

---

## Code Quality Signals

✅ **Modern TypeScript stack** — React 18.3, Vite (near-instant dev builds)  
