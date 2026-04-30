# Phase 01: Content System

## Specs Covered

- `docs/specs/01-project-goal.md`
- `docs/specs/02-content-model.md`
- `docs/specs/07-testing.md`

## Objectives

- Create the content file for the League history page.
- Define frontmatter validation with Zod.
- Implement the content repository and typed return shape.
- Add unit tests for valid content, invalid frontmatter, and missing content.

## Files Likely Touched

- `package.json`
- `content/league-history.md`
- `src/lib/content/schema.ts`
- `src/lib/content/repository.ts`
- `tests/unit/content-repository.test.ts`
- `vitest.config.ts`

## What Must Stay Unchanged

- No visual polish pass.
- No image acquisition yet.
- No deployment workflow changes unless a content-path issue forces a documented update.

## Exit Checks

```bash
npm run typecheck
npm run test
npm run build
```

## Dependency Follow-Up Rule

If the content contract changes, update every dependent layout, renderer, test, and phase document that references the old structure before closing the phase.

## Whole-File QA Rule

Any fix in content schema, repository, tests, or Markdown files requires whole-file QA for that file and dependent-file review for every consumer of the content contract.

## Completion Notes

- Added `content/league-history.md` as the single source content file for the page.
- Defined the validated content contract in `src/lib/content/schema.ts` with `hero`, `seo`, `timeline`, and `sections` frontmatter fields.
- Implemented `src/lib/content/repository.ts` to read the file, validate frontmatter, split Markdown body sections on `---`, and zip them to section metadata.
- Added Vitest configuration and content repository tests, including missing-file, invalid-frontmatter, and section-count mismatch coverage.
- Updated `package.json` to add the Phase 01 dependencies and test scripts.

## Audit Findings

- Initial content frontmatter failed YAML parsing because colon-bearing strings were unquoted. Fixed by reformatting the frontmatter and re-QAing the full content file.
- Whole-file QA found a factual naming cleanup in the DreamHack location and a consistency cleanup in the hero/year frontmatter values. Fixed in the source content file.
- Exit checks passed after fixes: `npm run test`, `npm run typecheck`, `npm run build`, and `npm run lint`.