# pro-persona — 2026-08-02 Deep Dive

## Status
🟡 **Product-complete prototype / dormant** · confidence 3.5/5

ProPersona turns a resume into a shareable ElevenLabs conversational persona. The product journey is coherent: upload PDF/DOCX/TXT or paste text, extract structured content with Gemini, create an ElevenLabs agent, choose visibility, and share a conversation link or public gallery entry. The repository was last pushed 2026-05-05 and has no evidence of recent iteration.

## Architecture
- React 18 + TypeScript + Vite + Tailwind/shadcn UI.
- Supabase Auth/Postgres/Lovable Cloud for identity and persona records.
- Deno edge functions for Gemini document extraction and ElevenLabs agent creation.
- React Query plus AuthProvider for client state.
- Zod validation and intended RLS boundaries.

## Strengths
- Strong, legible demo narrative: “your resume speaks” is immediately understandable.
- Progressive creation flow reduces the complexity of multi-provider setup.
- Public/private visibility and shareable links map to real portfolio and recruiting use cases.

## Risks
- The schema description includes `elevenlabs_api_key` under `personas`; even if encrypted/server-side, user-supplied provider keys create a major security and support burden. Prefer a platform-owned integration or a server-side secret vault with no client-readable column.
- Resume text is sensitive personal data. Retention, deletion, redaction, provider training/retention, and public-gallery leakage need explicit policy and tests.
- Gemini extraction and ElevenLabs agent creation are asynchronous external side effects; retries, idempotency, partial-failure recovery, and cost controls are not established by the README.
- A public persona can hallucinate or overstate credentials; source-grounded response constraints and an owner review step are essential.

## Next action
If this is still a strategic product, run a security/retention audit and one production creation test, then decide: integrate it into the main portfolio as a single flagship demo or archive it. Do not add gallery features before API-key handling, deletion semantics, and agent grounding are proven.

## Score
**3.5/5** — excellent demo concept, but dormant and high-risk around identity data and third-party voice agents.
