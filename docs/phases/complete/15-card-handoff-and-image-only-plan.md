# Phase 15: Card Handoff And Image-Only Plan

## Goal

Refresh the specs, exact slide-to-image assignment, and implementation phases for a same-stage card handoff and a fully staged-image production set.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/09-background-image-staging.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Record the new handoff behavior contract.
- Record the exact production image assignment for all 9 slides.
- Create the bounded follow-up phases for implementation and validation.

## Non-Goals

- No runtime code changes in this phase.

## Files Expected To Change

- `README.md`
- `docs/phases/STATUS.md`
- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/09-background-image-staging.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`
- `docs/phases/active/15-card-handoff-and-image-only-plan.md`
- `docs/phases/planned/16-card-handoff-implementation.md`
- `docs/phases/planned/17-image-only-validation-and-closeout.md`

## Ordered Tasks

1. Refresh the relevant specs for the new handoff and image-only behavior.
2. Create the new phase chain for implementation and validation.
3. Re-QA the planning files for consistency before coding begins.

## Exit Checks

```bash
npm run typecheck
```

## Completion Notes

- Specs 03, 04, 05, and 09 now reflect the same-stage handoff and image-only revision goals.
- Spec 10 now records the exact slide-to-image contract for all 9 slides.
- Phases 16 and 17 are in place for implementation and closeout.

## Audit Findings

- `npm run typecheck`