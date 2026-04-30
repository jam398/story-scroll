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

- Pending.

## Audit Findings

- Pending.