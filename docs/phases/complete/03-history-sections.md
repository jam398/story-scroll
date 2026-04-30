# Phase 03: History Sections

## Specs Covered

- `docs/specs/01-project-goal.md`
- `docs/specs/02-content-model.md`
- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`

## Objectives

- Replace the Phase 02 hero shell and section previews with the final narrative composition.
- Render `frontmatter.hero` into the hero section and the zipped Markdown `sections[]` content into story panels.
- Preserve the narrative arc from origin to cultural impact.
- Add section labels, headings, dates, key takeaways, and Markdown body content where appropriate.
- Ensure mobile and desktop reading order remains clear.

## Files Likely Touched

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/StorySection.tsx`
- `src/components/sections/ClosingSection.tsx`
- `src/components/layouts/ScrollytellingLayout.tsx`
- `src/components/markdown/MarkdownRenderer.tsx`
- `content/league-history.md`

## What Must Stay Unchanged

- No image rights decisions beyond placeholders.
- No deployment workflow work.

## Exit Checks

```bash
npm run lint
npm run build
```

## Dependency Follow-Up Rule

If section structure changes, update the content model, tests, layout assumptions, and later phase docs that depend on section IDs, ordering, section Markdown slices, or required fields.

## Whole-File QA Rule

Any fix to a section component or content file reopens QA for the entire file and every dependent file that assumes a specific section structure or field set.

## Completion Notes

- Replaced the Phase 02 preview-based section shell with dedicated `HeroSection`, `StorySection`, and `ClosingSection` components.
- Added `MarkdownRenderer` to render the current paragraph and bullet-list content stored in the Markdown body slices.
- Updated the scrollytelling layout to render the full narrative composition instead of preview text.
- Expanded the layout styles so story copy, section asides, and the closing timeline read as complete narrative surfaces on desktop and mobile.

## Audit Findings

- The first validation pass exposed local JSX apostrophe escaping in the story-introduction copy inside `ScrollytellingLayout.tsx`. Fixed in place and revalidated.
- Whole-file QA found no additional implementation defects after the Markdown renderer and section components were in place.
- Exit checks passed after the repair: `npm run lint` and `npm run build`.