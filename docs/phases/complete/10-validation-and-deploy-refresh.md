# Phase 10: Validation And Deploy Refresh

## Goal

Refresh the test suite, browser checks, and deployment documentation so the redesigned presentation ships cleanly on GitHub Pages.

## Specs Covered

- `docs/specs/05-assets-and-images.md`
- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`
- `docs/specs/08-presentation-redesign.md`

## Scope

- Update unit and browser tests for the slide contract and presentation behavior.
- Verify internal CTAs, image paths, reduced-motion behavior, and console cleanliness.
- Refresh README and deployment notes for the final presentation model.
- Re-verify GitHub Pages export behavior, including base-path-safe images.

## Non-Goals

- No new product features beyond what testing exposes as required fixes.
- No unrelated refactors once the redesign behavior is in place.

## Available Assets / Current State

- Current tests: `tests/unit/*`, `tests/browser/presentation-page.spec.ts`
- Current test configs: `vitest.config.ts`, `playwright.config.ts`
- Current deployment config: `next.config.ts`, `.github/workflows/pages.yml`, `scripts/postbuild.mjs`
- Current project docs: `README.md`, `docs/phases/STATUS.md`

## Files Expected To Change

- `tests/unit/*`
- `tests/browser/*`
- `playwright.config.ts`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`

## Ordered Tasks

1. Refresh tests around the new slide contract and layout behavior.
2. Add browser checks for slide progression, images, and CTA path health.
3. Run the full validation stack, including deployment-mode build.
4. Update docs with the final behavior and any rights/disclaimer requirements.
5. Re-QA all changed files and dependent docs.

## Product Rules / Behavior Invariants

- Final validation must reflect the shipped slide model, not the old card-based page.
- Internal CTA regressions should be treated as release blockers.
- Deployment must remain static-export-friendly and base-path-safe.

## Risks / Watchouts

- Old browser tests can falsely pass while the new slide behavior regresses.
- Image and motion changes can create subtle reduced-motion or mobile issues if not explicitly tested.
- Deployment docs can drift if the slide engine introduces new asset paths or page behavior.

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

- Completed on April 29, 2026.
- The Playwright suite now validates the shipped presentation engine instead of the retired scrolly overview layout.
- Final validation covered `lint`, `typecheck`, `test`, `build`, `test:e2e`, and the GitHub Pages base-path build.
- The browser test surface now uses `tests/browser/presentation-page.spec.ts` to match the shipped page model.

## Audit Findings

- The old browser suite failed against the redesigned page because it still asserted the removed timeline overview heading and old image count. The spec was updated and rerun until green.
- Deployment-mode validation passed with `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build`.
- Final browser validation passed against the static served build, including anchor navigation, image alt coverage, and reduced-motion visibility.
