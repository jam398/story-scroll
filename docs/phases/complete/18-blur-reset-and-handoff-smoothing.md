# Phase 18: Blur Reset And Handoff Smoothing

## Goal

Refine the presentation motion so the background blur ramps up in the reading zone, then relaxes back toward normal as the slide yields, while the card-to-card replacement feels smoother and less abrupt.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Tune the scroll-linked background focus treatment so it peaks around the text-reading zone and eases back out during handoff.
- Smooth the panel replacement timing and travel so the outgoing and incoming cards overlap more naturally in the shared stage slot.
- Validate the updated motion in browser and with the narrowest relevant automated checks.

## Non-Goals

- No story, asset, or content-metadata changes.
- No new navigation or layout structure beyond what the motion pass requires.

## Files Expected To Change

- `src/styles/globals.css`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/phases/active/18-blur-reset-and-handoff-smoothing.md`

## Ordered Tasks

1. Adjust the scroll-driven blur timing so the background softens in the reading zone and returns toward normal during the slide handoff.
2. Re-time the shared-card-slot animation so the outgoing and incoming panels exchange places more smoothly.
3. Run browser QA plus narrow automated validation, then close the phase if the behavior is clean.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run test:e2e
```

## Completion Notes

- The scroll-linked focus layer now ramps up into the reading zone and eases back toward a mostly clear background as each slide yields.
- The shared-card handoff is smoother because the panel overlap lasts longer and the lead-in / trail-out spacing is tighter, which reduces the dead band between slides.
- Browser spot checks and Playwright coverage passed without needing structural component changes.

## Audit Findings

- `npm run lint`
- `npm run typecheck`
- `npm run test:e2e`