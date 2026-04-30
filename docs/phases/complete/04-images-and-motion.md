# Phase 04: Images And Motion

## Specs Covered

- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/07-testing.md`

## Objectives

- Source safe visual assets or create original fallback visuals.
- Add an asset inventory and alt text coverage.
- Add restrained motion and reduced-motion handling.
- Integrate visuals and motion into the completed Phase 03 hero, story, and closing sections without breaking readability.
- Reduce the sense of text overload by pairing sections with visuals and keeping the reading rhythm brisk.

## Files Likely Touched

- `public/images/league-history/*`
- `docs/assets/image-inventory.md`
- `src/components/motion/Reveal.tsx`
- `src/lib/section-artwork.ts`
- `src/components/sections/*.tsx`
- `src/styles/globals.css`

## What Must Stay Unchanged

- No broad layout rewrite.
- No new unrelated dependencies without a documented need.

## Exit Checks

```bash
npm run lint
npm run build
```

`npm run test:e2e` remains part of Phase 05 once the browser test harness exists.

## Dependency Follow-Up Rule

If an asset, alt-text pattern, or motion contract changes, update the inventory, components, tests, and specs that depend on the old behavior before closing the phase.

## Whole-File QA Rule

When a visual or motion problem is fixed, re-QA the whole file, then re-check dependent components, asset records, and tests affected by that fix.

## Completion Notes

- Added a set of repo-created original SVG illustrations for the hero and each story stage under `public/images/league-history/`.
- Added `docs/assets/image-inventory.md` with source, usage note, and alt text for every shipped visual.
- Added `src/lib/section-artwork.ts` to map section slugs to the local artwork assets and alt text.
- Added `src/components/motion/Reveal.tsx` and integrated it into the hero, story, and closing sections with reduced-motion handling.
- Reworked the section layout to use real images and tighter text widths so the page reads faster and avoids a wall-of-text feel.

## Audit Findings

- The first validation pass exposed a React hooks lint issue in `Reveal.tsx` caused by synchronous state updates inside an effect. Fixed the effect pattern and revalidated the whole file.
- Whole-file QA found no additional implementation defects in the changed motion, artwork, section, style, or inventory files.
- Exit checks passed after the repair: `npm run lint` and `npm run build`.