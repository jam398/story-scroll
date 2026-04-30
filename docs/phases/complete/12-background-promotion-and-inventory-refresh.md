# Phase 12: Background Promotion And Inventory Refresh

## Goal

Promote the approved staged candidate backgrounds into the shipped asset path and refresh the inventory to match the real production files.

## Specs Covered

- `docs/specs/05-assets-and-images.md`
- `docs/specs/08-presentation-redesign.md`
- `docs/specs/09-background-image-staging.md`

## Scope

- Copy the approved staged background files from `docs/assets/` into the shipped asset path.
- Update the asset inventory to reflect real production files, rights notes, usage notes, and fallback status.
- Update the artwork mapping layer to point at the promoted files.
- Preserve a documented fallback path for unresolved slides.

## Non-Goals

- No scroll-behavior implementation yet.
- No final browser validation refresh beyond what is required to keep the asset mapping valid.

## Available Assets / Current State

- Staged candidate images: `docs/assets/*`
- Current shipped asset map: `src/lib/section-artwork.ts`
- Current inventory: `docs/assets/image-inventory.md`
- Current shipped images: `public/images/league-history/*`
- Phase 11 carry-forward: the content deck is now a 9-slide merged sequence using `opening`, `founding-vision`, `launch-and-rift`, `ranked`, `esports-scale`, `living-game`, `culture-shift`, `runeterra-expansion`, and `legacy`.
- Phase 11 carry-forward: staged background assignments and temporary fallback usage are already recorded in `content/league-history.md` and the Phase 11 inventory planning table.

## Files Expected To Change

- `public/images/league-history/*`
- `src/lib/section-artwork.ts`
- `docs/assets/image-inventory.md`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Promote approved staged images into the shipped asset directory.
2. Update the artwork map to the new production files.
3. Refresh the inventory with source, rights, usage, and fallback notes.
4. Re-QA the inventory and dependent asset-mapping files.

## Product Rules / Behavior Invariants

- No production slide should point directly to `docs/assets/`.
- Every shipped image must appear in the inventory.
- Temporary logo-fallback usage must stay explicit.

## Risks / Watchouts

- Promoted files can drift from the inventory if copied first and documented later.
- Mixed staging and production paths can create broken assets if not normalized cleanly.

## Exit Checks

```bash
npm run typecheck
```

## Completion Notes

- Approved staged backgrounds now ship from `public/images/league-history/` for `opening`, `launch-and-rift`, `esports-scale`, `living-game`, `culture-shift`, and `runeterra-expansion`.
- `src/lib/section-artwork.ts`, `content/league-history.md`, and `docs/assets/image-inventory.md` now agree on which slides use promoted Riot-policy-backed imagery versus original SVG fallbacks.
- The presentation layout surfaces the required Riot fan-project notice whenever Riot-policy-backed slide assets are present.

## Audit Findings

- Fixed Phase 12 contract drift where promoted slides still advertised `current-production` instead of `approved-staged` in the content metadata.
- `npx vitest run tests/unit/content-repository.test.ts`
- `npm run typecheck`