# Phase 02: Layout And Design

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`

## Objectives

- Create the layout factory.
- Create the scrollytelling layout shell and any supporting layout primitives.
- Consume the implemented content repository contract instead of hardcoding page copy.
- Map `frontmatter.hero`, `frontmatter.timeline`, and `sections[]` into layout-level UI primitives.
- Establish the core section shell and visual system foundations.
- Ensure responsive structure exists before section-specific polish.

## Files Likely Touched

- `src/app/page.tsx`
- `src/components/layouts/PageLayoutFactory.tsx`
- `src/components/layouts/ScrollytellingLayout.tsx`
- `src/components/ui/SectionShell.tsx`
- `src/components/ui/Card.tsx`
- `src/styles/globals.css`

## What Must Stay Unchanged

- No image sourcing.
- No motion polish beyond structural necessity.
- No deployment workflow work.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Dependency Follow-Up Rule

If layout assumptions change, update the content mapping plan, history section plan, tests, and any spec language that depends on the implemented `hero` or `sections[]` contract.

## Whole-File QA Rule

Any repaired layout file must be re-QA'd in full, then every file depending on its API, styles, or structural assumptions must be updated and re-reviewed.

## Completion Notes

- Replaced the scaffold homepage with an async repository-backed root page.
- Added `PageLayoutFactory` and a `ScrollytellingLayout` that consumes `frontmatter.hero`, `frontmatter.timeline`, and `sections[]`.
- Added reusable `Card` and `SectionShell` primitives for the layout shell.
- Expanded the global styles to support the hero band, timeline overview, story shell grid, and closing shell.
- Kept Markdown rendering and section-specific polish deferred to Phase 03 by using section previews instead of a full Markdown renderer.

## Audit Findings

- The implemented shell matched the intended Phase 02 scope, so no additional code repair was needed after the first validation pass.
- Exit checks passed: `npm run lint`, `npm run typecheck`, and `npm run build`.