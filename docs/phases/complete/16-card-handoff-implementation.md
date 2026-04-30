# Phase 16: Card Handoff Implementation

## Goal

Rework the presentation stage so the next card rises from below into the same reading slot while the previous card fades away, and remove the remaining abstract SVG fallbacks from the shipped artwork map.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Update the presentation layout markup only where the handoff needs structural support.
- Rework the presentation CSS for the same-stage handoff behavior and stronger text-zone blur.
- Remove or neutralize the `Visual beat` helper label.
- Replace the remaining abstract SVG artwork mappings with the staged image set.
- Refresh the content and inventory metadata for the new production image assignment.

## Non-Goals

- No final validation-stack rerun beyond the narrow checks needed while implementing.

## Files Expected To Change

- `src/components/layouts/PresentationLayout.tsx`
- `src/styles/globals.css`
- `src/lib/section-artwork.ts`
- `content/league-history.md`
- `docs/assets/image-inventory.md`
- `tests/unit/section-artwork.test.ts`
- `tests/unit/content-repository.test.ts`

## Ordered Tasks

1. Update the stage markup so the current and incoming reading cards can share one handoff slot.
2. Rework the stylesheet so the outgoing card fades and the incoming card rises from below into the same reading position.
3. Remove the remaining abstract fallback backgrounds from the artwork map and metadata.
4. Run narrow validation and re-QA the touched files.

## Exit Checks

```bash
npm run lint
npm run typecheck
```

## Completion Notes

- The presentation now removes the bottom media caption and uses one shared reading slot where the current card yields while the next card rises from below.
- The remaining abstract SVG artwork mappings for `founding-vision`, `ranked`, and `legacy` are replaced by the staged image set already shipped in `public/images/league-history/`.
- Content metadata, image inventory, and unit tests now align with the image-only production plan.

## Audit Findings

- `npx vitest run tests/unit/content-repository.test.ts tests/unit/section-artwork.test.ts`
- `npm run lint`
- `npm run typecheck`