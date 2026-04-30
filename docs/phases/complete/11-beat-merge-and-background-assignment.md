# Phase 11: Beat Merge And Background Assignment

## Goal

Reduce the current slide deck to the stronger merged beat sequence and rewrite slide media metadata to match the approved background plan.

## Specs Covered

- `docs/specs/01-project-goal.md`
- `docs/specs/02-content-model.md`
- `docs/specs/08-presentation-redesign.md`
- `docs/specs/09-background-image-staging.md`

## Scope

- Merge the approved adjacent beats in the content model so the presentation targets the stronger 9-slide structure.
- Update `content/league-history.md` slide metadata and Markdown slices to reflect the new beat order.
- Replace current placeholder asset assignments in the content file with the approved staged-background plan and documented fallback usage.
- Keep the factual timeline intact while tightening pacing.

## Non-Goals

- No shipped layout behavior changes yet.
- No asset import into the public production path yet.
- No final browser-test refresh beyond what is required to keep the content contract valid.

## Available Assets / Current State

- Current content source: `content/league-history.md`
- Current content schema and repository: `src/lib/content/schema.ts`, `src/lib/content/repository.ts`
- Current tests: `tests/unit/content-repository.test.ts`
- New mapping source of truth: `docs/specs/09-background-image-staging.md`
- Staged candidate images: `docs/assets/*`

## Files Expected To Change

- `content/league-history.md`
- `src/lib/content/schema.ts`
- `src/lib/content/repository.ts`
- `tests/unit/content-repository.test.ts`
- `docs/assets/image-inventory.md`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Rewrite the slide list to the approved merged beat sequence.
2. Update slide media metadata to the exact background plan or documented fallback.
3. Adjust schema and repository expectations if the revised content contract needs stricter background fields.
4. Refresh unit tests for the new slide count and assignment behavior.
5. Re-QA changed files and dependent docs.

## Product Rules / Behavior Invariants

- The merged deck must still cover origin, launch-plus-structure, ranked competition, esports scale, living-game evolution, culture, universe expansion, and legacy.
- The logo image can be used only as a documented temporary fallback, not as an undocumented default.
- If a slide loses its unique background in this phase, the reason must be recorded in the content metadata or inventory.

## Risks / Watchouts

- It is easy to merge beats too aggressively and lose clarity in the factual arc.
- Candidate images from `docs/assets/` are planning inputs until they are promoted into the shipped asset path.
- Content, image assignment, and inventory docs can drift if they are not updated together.

## Exit Checks

```bash
npm run test
npm run typecheck
```

## Completion Notes

- Updated the content schema to allow 8-12 slides and require explicit background staging mode metadata.
- Rewrote the League history deck from 12 slides to the approved 9-slide merged sequence.
- Recorded the staged-background and temporary-fallback plan directly in the content file and inventory notes.
- Refreshed repository tests to validate the merged deck shape and media metadata.
- Resolved a QA drift in the inventory so the shipped-asset table uses the merged slide slugs.

## Audit Findings

- `npm run test` passed.
- `npm run typecheck` passed.
- Whole-file QA found one documentation drift in `docs/assets/image-inventory.md`; it was corrected and revalidated before closing the phase.