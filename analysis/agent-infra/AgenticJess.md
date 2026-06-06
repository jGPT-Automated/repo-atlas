# AgenticJess — Deep Analysis

**Account:** GenJess  
**Last updated:** 2026-05-08  
**Size:** 138KB  
**Status:** 🟢 DONE  
**Portfolio value:** ⭐ MEDIUM — strong concept, incomplete execution, good component library

---

## What It Is

A Gemini-powered personal portfolio web app — a single-page application (SPA) that doubles as an interactive AI assistant. It's less of a static portfolio and more of a **living interface**: visitors can chat with a Gemini-powered assistant that knows Jesse's projects, navigate a vault of work, read a manifesto, browse a library of tools, and explore a product grid.

The core insight: **the portfolio itself is agentic** — Jesse isn't just describing AI work, he's demonstrating it through the interface.

---

## Stack

- **React 18 + TypeScript + Vite** — modern SPA
- **Google Gemini API** (`@google/genai`) — live voice + text AI
- **Hash router** — client-side routing via `window.location.hash` (no Next.js, no React Router)
- **No CSS framework listed** — custom CSS (`index.css` is 0 bytes in repo, likely injected or Tailwind CDN)
- **22 components** — well-organized, modular

---

## Architecture

```
AgenticJess/
├── App.tsx              ← Hash router + view state machine
├── constants.ts         ← All portfolio data (projects, categories, products, library items)
├── types.ts             ← ViewState, CategoryId, Project, etc.
├── services/
│   └── geminiService.ts ← All Gemini API calls (decoupled from UI)
└── components/
    ├── Assistant.tsx    ← 13KB — 3D particle orb + Gemini Live voice
    ├── ToolWorkspace.tsx← 13KB — interactive tool area
    ├── SectionDetail.tsx← 24KB — largest component, project detail views
    ├── Vault.tsx        ← 8KB — content vault/archive
    ├── Manifesto.tsx    ← 6KB — Jesse's manifesto/thesis
    ├── Library.tsx      ← 5KB — curated resources/tools
    ├── Navbar.tsx       ← 4KB
    ├── Home.tsx         ← 3.4KB
    └── [9 more components]
```

**State machine routing:** App.tsx manages a `ViewState` union type — `home | library | lab-tool | lab-resource | section-detail | ...` — navigated via hash changes. Clean and simple.

---

## The Standout Piece: Assistant.tsx

This is the most technically impressive component. It implements:

1. **3D Particle Orb** — 120 3D particles rendered on Canvas, rotating continuously. On voice activation, audio level drives particle expansion radius (audio-reactive 3D orb). Pure canvas, no Three.js.

2. **Gemini Live voice session** — uses `@google/genai` Live API with `Modality.AUDIO`. Real-time bidirectional audio with Gemini. The assistant knows Jesse's portfolio items from `constants.ts` and can navigate the app via `FunctionDeclaration` tool calls (it calls `onNavigate(category)` to drive the UI).

3. **Portfolio-aware AI** — the assistant is seeded with Jesse's project data and can answer questions about his work, navigate to sections, and hold a voice conversation.

This is genuinely differentiated portfolio tech. Most people have a chatbot; this has a 3D voice orb that navigates the site.

---

## Portfolio Content (from constants.ts)

**3 categories:**
- Finance — Trading bots, macro strategies, options
- Development — LLM agents, vector orchestration, probability models
- Media — LoRA/diffusion models, algorithmic art

**Featured projects:**
- "The No-Code CTO Strategy" — manifesto on MVP hacking + agentic economy
- Automated Execution Bots — Hummingbot + Quadency, custom indicators, webhooks
- Music Hub (Media)

**Product grid + checkout** — e-commerce layer (likely for selling templates/tools/AI products)

**Vault** — archival content layer  
**Library** — curated resources with `/lab/` tool routes  
**Journal** — long-form articles/case studies  

---

## What's Missing / Incomplete

- `index.css` is 0 bytes in repo — styling is likely Tailwind CDN or missing
- No deployed URL found (no homepage in GitHub metadata)
- Product grid / checkout appears set up but likely not wired to a real payment processor
- The content in `constants.ts` is somewhat sparse — only 2-3 items per category
- No LocalCheck, TEAIMS, OmniaVital, or OWS×x402 entries (those were built after this)

---

## Portfolio Assessment

**The voice + 3D orb combination is genuinely portfolio-worthy** — it's the kind of demo that makes a hiring manager stop scrolling. The architecture is clean: data in constants.ts, AI in geminiService.ts, UI fully decoupled.

**What to extract and reuse:**
- `Assistant.tsx` — the 3D particle orb + Gemini Live implementation is reusable for any portfolio site
- `geminiService.ts` — clean Gemini API service layer pattern
- The hash router + ViewState pattern — simple, dependency-free SPA routing

**What needs updating** before this is portfolio-ready:
- Add LocalCheck, TEAIMS, OmniaVital, OWS×x402 to constants.ts
- Wire the Gemini assistant to current project context
- Add a deployed URL
- Confirm styling is complete

**Canonical status:** This is Jesse's personal work, well-architected. The concept is strong. It just needs a content refresh and deploy.

---

## Cross-Reference

This is likely a **precursor to or inspiration for** `GenerativeJesse-LIVE` (9.3MB, still active). Recommend comparing the two in the portfolio analysis pass to determine which has the better UI/features.
