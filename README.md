# CollabMind

CollabMind is a creator collaboration workspace that remembers what a creator wants, ranks complementary partners, prepares outreach, tracks the relationship and learns from campaign outcomes.

This repository is the polished, deterministic judging build for the Creative Minds Jam. Every product flow runs locally in the browser, remains available without a network connection and produces the same coherent state transitions on every reset.

## Prototype disclosure

External agent and network actions are simulated deterministically in this prototype so the complete product loop can be judged reliably. The interface does not claim that a live model completed those actions. The intended production architecture connects the same profile, decision and outcome events to Minds for persistent reasoning and memory.

## What works

- Three-step creator onboarding with validation and five initial memory signals
- Match ranking using audience fit, format fit, boundaries and learned outcomes
- Search and filters across eight realistic creator candidates
- Match detail with score breakdown, concept, risks and audience rationale
- Rejection learning that immediately changes future recommendations
- Deterministic outreach drafting and relationship pipeline
- Simulated reply, scheduling and campaign-result capture
- Outcome learning that boosts proven formats and adjacent candidates
- Transparent creator-memory dashboard with exact signal counts
- Ask CollabMind decision brief grounded in the current local state
- Persistent browser state, reset controls, loading states and toasts
- Keyboard-friendly Radix dialogs/menus and visible focus states
- Responsive desktop, tablet and mobile navigation

## The learning loop

```text
Onboard (5 signals)
        ↓
Rank candidates
        ↓
Reject a broad business creator (+1 boundary)
        ↓
Technical candidates rise; similar candidates fall
        ↓
Run a challenge-video collaboration
        ↓
Record a strong campaign (+1 outcome)
        ↓
Challenge formats and developer audiences receive a boost
```

The signal count moves from 5 → 6 → 7 during the recommended judge flow. Each change is visible in Memory and is consumed by `rankCandidates()` in `lib/demo-engine.ts`.

## Run locally

Requirements: Node.js 22+ and npm.

```bash
npm install
npm run check
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

No environment variables, API keys or external services are required.

## Production build

```bash
npm run build
npm start
```

## Technology

- Next.js + React + TypeScript
- Framer Motion for route and list choreography
- Radix UI primitives for accessible dialogs and menus
- Lucide icons
- Sonner toasts
- LocalStorage for persistent demo state
- Token-based responsive CSS with reduced-motion support

## Project structure

```text
app/
  globals.css             Design system and responsive layout
  layout.tsx              Metadata and application frame
  page.tsx                Product entry point
components/
  CollabMindApp.tsx       Complete product UI and state transitions
lib/
  demo-engine.ts          Seed data, ranking and learning model
  types.ts                Domain types
HACKATHON_DEMO.md         Exact judge walkthrough and presenter notes
```

## Deterministic ranking rules

Candidate ranking starts from curated fit and applies explicit rules:

- +5 for direct target-audience overlap
- +2 for an adjacent developer audience
- +2 for a preferred collaboration format
- +4 for technical candidates after a technical-depth preference
- −18 for business/marketing candidates after that boundary is learned
- +6 for challenge-video candidates after a strong challenge outcome
- +3 for developer candidates after a developer-audience outcome

Scores are clamped to a 42–99 range and every candidate exposes the top reasons behind the result.

## Demo reset

Open the profile menu in the top-right and choose **Reset demo**. The reset is local and recoverable by completing the pre-filled onboarding again.

## Hackathon positioning

Normal creator tools treat every search as new. CollabMind builds an evolving collaboration model: what the creator says, rejects and proves through performance all influence the next decision.
