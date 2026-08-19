# PersonalCarousel — 2026-08-14 deep dive

Repo: `GenJess/PersonalCarousel`
Commit/activity: pushed 2026-08-14; current tree has 29 files.

## Snapshot

This is a small Next.js/Vercel v0 export whose only route renders `AppleCardsCarouselDemo`. The carousel interaction is implemented with client-side scroll, card expansion, outside-click handling, and a mobile/desktop layout. The implementation is a usable UI primitive, but the shipped product surface is still the Aceternity demo: the headline is `Get to know your iSad.`, the six cards are generic Apple/AI/productivity/vision-pro/photography/hiring examples, every expanded card renders the same `DummyContent`, and images come from Unsplash plus `assets.aceternity.com`.

## Verified strengths

- Next.js 15.2.4 + React 19 and Vercel deployment metadata are present.
- The core carousel has real interaction state rather than a static screenshot: scroll controls, expanded modal state, Escape handling, outside-click close, and keyboard focus treatment are present.
- The repo is small enough to turn around quickly.

## Verified risks

- No domain, audience, real content model, analytics, tests, or meaningful README beyond the v0 sync boilerplate.
- `components/apple-cards-carousel-demo.tsx` contains placeholder/demo copy and six remote stock-image URLs. It is not a credible public-facing portfolio/product page yet.
- The package script uses `next lint`, which is removed/deprecated in modern Next.js versions; CI/build quality is not demonstrated by the repository.
- Repeated `DummyContent` means card expansion does not provide distinct information or a useful conversion path.

## Recommended next move

Treat this as a component demo until it has a named use case. The fastest credible path is a real personal/project showcase: define the audience and card schema, replace all demo content with real entries and local/owned assets, add metadata/CTA/analytics, and prove `npm run build` plus a basic interaction/accessibility smoke test. Do not spend time adding more UI primitives before the content and purpose are real.
