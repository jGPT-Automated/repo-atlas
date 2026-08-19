# Repo Atlas Deep Dive — GenJess/PersonalCarousel — 2026-08-17

## Scope
Read-only review of `main` commit `cbef847` (2025-08-14): README, app entrypoint, carousel demo, UI carousel implementation, and package metadata.

## Findings

### PC-002 — Remove v0/demo identity and establish a real portfolio contract (P1)

Evidence:
- `README.md` still describes the project as `Open in v0` and links to a generic v0 deployment/chat.
- `components/apple-cards-carousel-demo.tsx:14` renders `Get to know your iSad.`
- The same file uses repeated `DummyContent` for all six cards (`:21-53`) with unrelated Apple/product copy, including the phrase `Langotiya jeetu ka mara hua yaar`.
- Cards use six remote Unsplash URLs (`:55-89`) rather than owned/local assets.
- `app/layout.tsx` and `app/page.tsx` contain only the generic shell; no product-specific title, description, canonical URL, Open Graph/Twitter metadata, analytics, contact/CTA, or accessible content structure is established.

Impact: the repository is a working UI component demo, not yet a credible portfolio or product surface. Visitors cannot tell whose work it is, what PersonalCarousel is for, or what action to take. The generic remote images and template copy also create reliability and licensing/attribution risk.

Acceptance criteria:
1. Replace all template labels, filler prose, and unrelated Apple references with content for a defined audience and use case.
2. Add project-specific metadata in `app/layout.tsx`: title, description, canonical URL, Open Graph, Twitter card, and favicon/brand assets.
3. Replace remote Unsplash/Aceternity assets with local or owned assets, with meaningful alt text and a documented asset license/source.
4. Add a primary CTA and a short accessible fallback/summary so the experience remains understandable without opening the carousel.
5. Update README with the product purpose, audience, local setup, deployment URL, and a screenshot or demo link.
6. Add a build/lint check that fails on known placeholder strings (`iSad`, `DummyContent`, `Aceternity`, and generic v0 branding).

## Positive signals

- The carousel component is isolated and reusable.
- The app is small enough that branding and productization can be completed without a migration.
