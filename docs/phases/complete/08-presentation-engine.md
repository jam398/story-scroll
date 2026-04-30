# Phase 08: Presentation Engine

## Goal

Replace the current card-stack scrollytelling layout with a slide-driven presentation engine that uses sticky stages, image-led beats, and clear orientation cues.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/08-presentation-redesign.md`

## Scope

- Add a `presentation` layout path to the layout factory.
- Implement a slide stage system with tall scroll sections and sticky 100vh stages.
- Support opening, narrative, split-media, diagram, timeline, and closing slide treatments.
- Add restrained orientation controls that do not dominate the layout.

## Non-Goals

- No asset sourcing or final image inventory work beyond placeholders.
- No browser-test refresh yet unless required to unblock the implementation.
- No unrelated route or multi-page expansion.

## Available Assets / Current State

- Current layout entry points: `src/app/page.tsx`, `src/components/layouts/PageLayoutFactory.tsx`
- Current scrolly layout: `src/components/layouts/ScrollytellingLayout.tsx`
- Current section components: `src/components/sections/*`
- Current CSS system: `src/styles/globals.css`
- Reference inspiration folder for interaction analysis only: `C:/Users/jose-/Downloads/bseai_degree-main/bseai_degree-main`

## Files Expected To Change

- `content/league-history.md`
- `src/lib/content/schema.ts`
- `src/app/page.tsx`
- `src/components/layouts/PageLayoutFactory.tsx`
- `src/components/layouts/ScrollytellingLayout.tsx` or replacement presentation layout files
- `src/components/motion/*`
- `src/components/sections/*`
- `src/styles/globals.css`
- `tests/unit/content-repository.test.ts`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Introduce the presentation layout structure and slide container primitives.
2. Render validated slide content through the new layout.
3. Add sticky stage behavior and mobile-safe slide progression.
4. Add restrained progress or orientation UI.
5. Re-QA layout, motion, and dependent docs.

## Product Rules / Behavior Invariants

- The page must feel like a staged presentation rather than a sequence of equal-weight cards.
- No nested scroll panes inside slides.
- Orientation controls must remain secondary to the story.
- Reduced-motion support must remain possible at every step.

## Risks / Watchouts

- Sticky-slide mechanics can degrade badly on mobile if the stage height and padding are not controlled.
- The redesign can drift into cloning the reference repo if layout and motion are copied too literally.
- Old section components may fight the new slide model if reused without clear constraints.

## Exit Checks

```bash
npm run lint
npm run typecheck
```

## Completion Notes

- Completed on April 29, 2026.
- The root page now renders through a dedicated `presentation` layout path instead of the legacy scrolly card stack.
- The presentation engine renders validated slide content through sticky slide stages with slide-map navigation and mobile-safe fallback behavior.
- The current content file now declares `layout: presentation`, and dependent tests were updated for the new layout contract.

## Audit Findings

- Cleaned up a dependent lint warning in the legacy scrolly layout after the new presentation layout became the primary render path.
- Phase 08 exit checks passed with `npm run lint` and `npm run typecheck`.
- Browser sanity check confirmed slide-map anchor navigation and presentation-stage rendering on the local dev server.
