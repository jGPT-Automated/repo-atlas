# LocalCheck_WEB

**Status:** 🟢 ACTIVE | Score: 4.5/5.0

**URL:** https://github.com/jGPT-Automated/LocalCheck_WEB  
**Last Push:** 2026-07-25T07:49:21Z (6 days ago)  
**Created:** 2026-07-21T11:24:29Z  
**Language:** CSS  
**Stars:** 0

## Summary

LocalCheck Web is the responsive Mapbox-based court explorer for basketball and pickleball. This is the complement to the native iOS/Expo app (LocalCheck_Expo).

**Launch Catalog:** 56 courts across NYC, DC, Miami, LA, Houston, Austin, Denver

**Tech Stack:**
- Next.js 16.2.6 / React 19.2.6
- Mapbox GL (v3.26.0)
- Supabase (RLS + public stats)
- TypeScript + Drizzle ORM

## File Structure

- `/app` — Next.js app router
- `/components` — MapExplorer, CourtCard, DetailPage
- `/lib` — Supabase client, Mapbox config
- `/supabase` — Schema, RLS, migrations, seed
- `data/launch-courts.json` — Canonical court catalog
- `data/launch-courts.csv` — Review export format

## Status

🟢 **ACTIVE** — Recent commits, aligned with iOS ship timeline (Aug 2-5). MVP complete. Web is discovery/exploration complement to native app's check-in/leaderboards. No blockers visible.

---
*Analysis: 2026-07-31T15:02:47.991641+00:00*
