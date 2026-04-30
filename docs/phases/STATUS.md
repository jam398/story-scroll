# Phase Status

## Workflow Notes

- Only one phase may be active at a time.
- A phase is not complete until its exit checks pass.
- If a fix is made during QA, re-QA the whole file and update dependent files before closing the phase.
- Phase docs live under `docs/phases/active/`, `docs/phases/planned/`, and `docs/phases/complete/`.

| Phase | Status | Notes |
|---|---|---|
| 00-scaffold | done | App shell, scripts, linting, typecheck, and static export scaffold are in place. |
| 01-content-system | done | Markdown content, frontmatter validation, repository loading, and unit tests are in place. |
| 02-layout-and-design | done | Root page now renders through the layout factory with hero, timeline, story, and closing shell surfaces. |
| 03-history-sections | done | Hero, story, and closing sections now render the narrative composition with Markdown body content. |
| 04-images-and-motion | done | Local SVG artwork, image inventory, reduced-motion reveals, and scan-friendly section pacing are in place. |
| 05-testing | done | Unit and Playwright coverage now validate the static site, visual layer, alt text, and reduced-motion behavior. |
| 06-deploy | done | GitHub Pages workflow, base-path-aware asset handling, `.nojekyll` generation, and deployment-mode build verification are complete. |
| 07-presentation-content-remodel | done | The content source, repository contract, and dependent tests now use a validated 12-slide presentation model with per-slide media planning metadata. |
| 08-presentation-engine | done | The page now renders through a dedicated presentation layout with sticky slide stages, slide-map navigation, and mobile-safe fallback behavior. |
| 09-slide-media-and-motion | done | The shipped assets are now inventoried with rights notes, and the presentation uses asset-level focal positioning and motion presets. |
| 10-validation-and-deploy-refresh | done | Tests, docs, browser coverage, and GitHub Pages validation were refreshed for the final presentation model. |
| 11-beat-merge-and-background-assignment | done | The content model now uses the merged 9-slide sequence, expanded background metadata, and aligned inventory planning notes. |
| 12-background-promotion-and-inventory-refresh | done | Approved staged backgrounds are now shipped locally, the artwork map and inventory match production, and Riot-policy slides surface the required notice. |
| 13-scroll-focus-behavior | done | The presentation now stages background imagery ahead of the reading layer and strengthens focus with restrained scroll-linked emphasis changes. |
| 14-revalidation-and-deploy-refresh | done | Final validation, browser coverage, and deployment-mode build verification all passed for the revised background-led presentation. |
| 15-card-handoff-and-image-only-plan | done | Specs, slide-image assignment, and the follow-up phase chain are refreshed for the same-stage handoff and image-only presentation revision. |
| 16-card-handoff-implementation | done | The same-stage card handoff is implemented, the bottom media caption is removed, and the last abstract SVG fallbacks are gone from production. |
| 17-image-only-validation-and-closeout | done | Full validation passed and the image-only handoff revision cycle is closed in docs, tests, and deployment-mode build output. |
| 18-blur-reset-and-handoff-smoothing | done | The blur now peaks in the reading zone and relaxes during handoff, and the panel spacing/timing were tightened so slide replacement feels smoother. |