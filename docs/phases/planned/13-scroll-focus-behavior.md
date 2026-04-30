# Phase 13: Scroll Focus Behavior

## Goal

Change the presentation staging so backgrounds enter from the bottom first and text gains emphasis later through restrained overlay and blur behavior.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/08-presentation-redesign.md`
- `docs/specs/09-background-image-staging.md`

## Scope

- Adjust the presentation layout so the incoming background scene reads first.
- Add scroll-linked focus treatment such as background blur, dimming, or overlay strengthening near the text-reading zone.
- Keep reduced-motion behavior readable and meaningful.
- Rebalance slide composition so image-led slides no longer feel like repeated split-card templates.

## Non-Goals

- No new factual content changes beyond what layout requires.
- No final deployment documentation refresh yet.

## Available Assets / Current State

- Current presentation layout: `src/components/layouts/PresentationLayout.tsx`
- Current motion surface: `src/components/motion/Reveal.tsx`
- Current global styles: `src/styles/globals.css`
- Current content source: `content/league-history.md`

## Files Expected To Change

- `src/components/layouts/PresentationLayout.tsx`
- `src/components/motion/*`
- `src/styles/globals.css`
- `tests/browser/*`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Change slide staging so the background arrives before the reading layer.
2. Add scroll-linked focus treatment for text moments.
3. Ensure reduced-motion fallback preserves the intended reading order.
4. Re-QA the layout, motion, and browser-test surface.

## Product Rules / Behavior Invariants

- Blur must improve text focus rather than erase the image.
- The effect must remain readable on mobile.
- Orientation UI must stay secondary.

## Risks / Watchouts

- Scroll-linked blur can feel gimmicky if it is too strong or too constant.
- A background-first sequence can hide important text if thresholds are badly tuned.

## Exit Checks

```bash
npm run lint
npm run typecheck
```

## Completion Notes

- Pending.

## Audit Findings

- Pending.