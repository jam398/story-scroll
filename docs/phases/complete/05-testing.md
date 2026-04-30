# Phase 05: Testing

## Specs Covered

- `docs/specs/02-content-model.md`
- `docs/specs/03-layout-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/07-testing.md`

## Objectives

- Extend the existing content repository tests where the contract evolves.
- Add browser tests for page render, section visibility, scroll behavior, and major console errors.
- Cover the Phase 02 layout shell structure, including the hero title, timeline overview, and section architecture surfaces.
- Cover the Phase 03 narrative composition, including Markdown-rendered story content and the closing section timeline summary.
- Cover the Phase 04 visual layer, including shipped image rendering, alt text presence, and motion that does not block reduced-motion users.
- Confirm the built site is the test target where practical.
- Record the final validation surface for later QA.

## Files Likely Touched

- `tests/unit/*.test.ts`
- `tests/browser/*.spec.ts`
- `playwright.config.ts`
- `package.json`

## What Must Stay Unchanged

- No visual redesign except when a test reveals a real defect.
- No deployment workflow expansion beyond what tests require.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Dependency Follow-Up Rule

If tests reveal a contract defect, repair the source file, then update every dependent file whose assumptions changed, and finally re-check the entire affected file set before closing the phase.

## Whole-File QA Rule

Every test-driven fix requires whole-file QA for the repaired file and dependent-file review for any test, component, content file, or config that relies on the repaired contract.

## Completion Notes

- Added Playwright as the browser test harness and configured it to run against the built static export via `playwright.config.ts`.
- Added browser coverage for hero render, timeline overview, section visibility, scrolling, image alt text, and reduced-motion reveal behavior.
- Added `tests/unit/section-artwork.test.ts` to protect the artwork mapping contract introduced in Phase 04.
- Updated `package.json` with the required `test:e2e` script and supporting dev dependencies.

## Audit Findings

- The first browser test run failed because Playwright browsers were not yet installed in the environment. Installed Chromium and reran the same suite.
- The first application-level browser failure was a strict-mode selector collision in `scrolly-page.spec.ts` around the repeated `2006` text. Fixed by scoping the assertion to the timeline region and re-QAing the whole spec file.
- Exit checks passed after the repair: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, and `npm run test:e2e`.