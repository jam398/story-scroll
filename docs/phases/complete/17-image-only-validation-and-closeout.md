# Phase 17: Image-Only Validation And Closeout

## Goal

Refresh the automated validation surface and close the revision cycle after the same-stage handoff and image-only background changes land.

## Specs Covered

- `docs/specs/05-assets-and-images.md`
- `docs/specs/07-testing.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Refresh any browser assertions needed for the revised handoff or caption removal.
- Re-run the full validation and deployment-mode build stack.
- Update closeout docs and inventory notes.

## Non-Goals

- No new behavior work beyond bugs found in validation.

## Files Expected To Change

- `tests/browser/presentation-page.spec.ts`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/assets/image-inventory.md`
- `docs/phases/active/17-image-only-validation-and-closeout.md`

## Ordered Tasks

1. Refresh the tests to match the new handoff and image-only production set.
2. Run the full validation stack and deployment-mode build.
3. Close the docs and archive the phase files.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build
```

## Completion Notes

- The same-stage handoff and image-only background revision now passes lint, typecheck, unit tests, static build, Playwright browser coverage, and the GitHub Pages base-path build.
- No additional browser test rewrite was needed because the existing suite still matched the 9-slide presentation contract after the caption removal and image-only mapping changes.
- The revision cycle is now fully closed in the top-level docs.

## Audit Findings

- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- `npm run test:e2e`
- `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build`