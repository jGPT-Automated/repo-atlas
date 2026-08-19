# OMNIVITAL-BUSINESS — 2026-08-04 Deep Dive

## Snapshot
- **Owner:** agenticjess-star
- **Last push:** 2026-04-18
- **Stage:** dormant business/product implementation
- **Stack:** TypeScript web app with Supabase migrations and ElevenLabs Conversational AI integration
- **Repository:** https://github.com/agenticjess-star/OMNIVITAL-BUSINESS

## What is present
The repository is small but non-empty. Its README documents Supabase tables, migration execution, environment variables, and an ElevenLabs conversational AI layer. The repository’s size and age make it materially different from the larger OmniVital v4/v5 codebases: this looks closer to a business-facing or integration-focused implementation than an active product surface.

## Strategic interpretation
The core question is canonicalization. There are multiple OmniVital-branded repositories across the two accounts, while this one is the most explicit about business data and voice infrastructure. Continuing to analyze each version as a separate product will create false momentum and obscure the production source of truth.

ElevenLabs is a meaningful product choice for a voice-first health consultant, but it raises a sharper boundary question than the UI: what health data is sent to the conversational provider, what consent is collected, and what is retained locally versus remotely?

## Risks / verification gates
1. **Canonical repo:** identify the production branch/repository and mark the others as archived lineage.
2. **Health-data boundary:** inventory biometric, symptom, and profile fields crossing Supabase and ElevenLabs.
3. **Secrets:** confirm service keys are server-side only and no migration or frontend bundle contains credentials.
4. **Consent/deletion:** document consent, export, deletion, and account closure behavior before treating the project as launch-ready.
5. **Version drift:** reconcile formulas, pricing, voice prompts, and schema migrations across OmniVital v3/v4/v5/business repositories.

## Score
**2.6/5 as a current product; 4.0/5 as a useful integration/business artifact.** Dormancy and unclear lineage are the blockers, not lack of ideas.

## Next move
Create `CANONICAL.md` in the chosen OmniVital repository, list each predecessor, freeze the old repos, and perform one data-flow/security audit on the voice path.
