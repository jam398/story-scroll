# Phase 06: Deploy

## Specs Covered

- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`

## Objectives

- Configure the GitHub Pages deployment workflow.
- Ensure static export output is correct.
- Ensure base path handling works in deployment conditions.
- Confirm images and routes load correctly after export using the existing Playwright static-site harness.

## Files Likely Touched

- `.github/workflows/pages.yml`
- `next.config.ts`
- `package.json`
- `scripts/postbuild.mjs`
- `src/lib/paths.ts`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/StorySection.tsx`
- `src/components/sections/ClosingSection.tsx`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/specs/06-deployment.md`

## What Must Stay Unchanged

- No content redesign.
- No unrelated layout changes unless deploy validation exposes a real defect.

## Exit Checks

```bash
npm run build
npm run test:e2e
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build
```

On non-Git-Bash shells, the base-path build can be run as `NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build`.

## Dependency Follow-Up Rule

If deployment pathing changes, update every dependent config, asset path helper, README command, and test assumption before closing the phase.

## Whole-File QA Rule

Any deployment fix must be followed by full-file QA on the changed file and dependent-file review for every consumer of the new pathing or workflow contract.

## Completion Notes

- Added `.github/workflows/pages.yml` to build and deploy `out/` through GitHub Pages.
- Added `src/lib/paths.ts` and updated the section image consumers so local SVG artwork respects `NEXT_PUBLIC_BASE_PATH`.
- Added `scripts/postbuild.mjs` plus the `postbuild` script to generate `out/.nojekyll` automatically.
- Verified the exported HTML prefixes both `_next` assets and `/images/league-history/*` URLs with `/scroll-telling` during a base-path build.
- Confirmed the GitHub Actions workflow handles both project-site repos (`/<repo>`) and user-site repos (`""`) by deriving the base path from the repository name.

## Audit Findings

- `npm run build` passed.
- `npm run test:e2e` passed.
- `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build` passed.
- `out/.nojekyll` exists after build.
- Exported HTML in `out/index.html` references `/scroll-telling/_next/...` and `/scroll-telling/images/league-history/...` as expected.