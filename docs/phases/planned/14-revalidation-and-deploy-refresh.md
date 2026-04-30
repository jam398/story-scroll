# Phase 14: Revalidation And Deploy Refresh

## Goal

Refresh the validation stack and deployment verification after the new beat merges, background promotion, and scroll-focus behavior are in place.

## Specs Covered

- `docs/specs/05-assets-and-images.md`
- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`
- `docs/specs/09-background-image-staging.md`

## Scope

- Refresh unit and browser tests to the merged beat structure and new background behavior.
- Verify reduced-motion behavior, image coverage, and anchor progression against the new slide count.
- Re-run local and deployment-mode build validation.
- Update docs to reflect the revised shipped experience.

## Non-Goals

- No new feature work beyond bugs exposed by validation.

## Available Assets / Current State

- Current unit tests: `tests/unit/*`
- Current browser tests: `tests/browser/*`
- Current deployment config: `next.config.ts`, `playwright.config.ts`, `.github/workflows/pages.yml`
- Current docs: `README.md`, `docs/phases/STATUS.md`, `docs/assets/image-inventory.md`

## Files Expected To Change

- `tests/unit/*`
- `tests/browser/*`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/assets/image-inventory.md`
- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`

## Ordered Tasks

1. Refresh automated tests to the revised slide count and background behavior.
2. Run the full validation stack, including deployment-mode build.
3. Update final docs and any required fallback-image notes.
4. Re-QA the changed files and dependent docs.

## Product Rules / Behavior Invariants

- Validation must reflect the merged beat structure, not the older 12-slide state.
- Deployment must remain base-path-safe for GitHub Pages.

## Risks / Watchouts

- Old test assumptions can survive while the slide count and background plan have changed.
- Final docs can drift if fallback-image usage is not captured at closeout.

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

- Pending.

## Audit Findings

- Pending.