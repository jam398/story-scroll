# Spec 09: Background Image Staging

## Purpose

Define the next visual revision for the presentation so slides feel background-led, scroll-reactive, and more semantically tied to the story beats.

## What Done Looks Like

- The next background scene can rise from the bottom of the viewport before the text panel becomes the primary reading target.
- Image-led slides can progressively soften or blur the background as the reader reaches the text-focused portion of the slide.
- Approved staged assets from `docs/assets/` replace the least meaningful current placeholder images where they better match the beat.
- Slides without a strong slide-specific image should reuse the staged user-provided image set rather than keeping the abstract SVG fallback art in production.
- The total beat count can be reduced if merging slides creates stronger pacing and clearer visual storytelling.

## Candidate Assets In Scope

- `docs/assets/champions.jpg`
- `docs/assets/world.jpg`
- `docs/assets/runatera-map.jpg`
- `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg`
- `docs/assets/old champions.jpg`

## Current Assessment

- The remaining abstract SVG placeholders now actively weaken the revised presentation because they break the image-only visual system.
- The strongest staged candidates currently appear to be the map-oriented and world-oriented images for structure, universe, and scale beats.
- The staged logo image remains blocked for production use unless a documented permission path is added, so the image-only plan must rely on the non-logo staged set.
- The most important behavior change is not only swapping images; it is changing slide staging so the background arrives first and the text gains emphasis later.

## Exact Slide-To-Image Assignment

This mapping is the default plan for the next implementation cycle.

| Current slide | Keep / merge | Background plan | Reason |
|---|---|---|---|
| `opening` | Keep | `docs/assets/champions.jpg` | The opening needs a broad, instantly readable League image instead of an abstract hero placeholder. |
| `founding-vision` | Keep | Reuse `docs/assets/champions.jpg` | The founding beat should stay image-led even without a bespoke slide image, so the broad champions scene replaces the old abstract fallback. |
| `launch` | Merge with `match-structure` | `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg` | The launch and map-structure beats are stronger as one full-screen Summoner's Rift slide than as two separate slides. |
| `match-structure` | Merge into `launch` | `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg` | The map image directly supports both the launch premise and the match explainer. |
| `ranked` | Keep | Reuse `docs/assets/old champions.jpg` | The ranked beat should stay within the staged image system, and the older roster image is closer to competitive progression than the abstract ladder placeholder. |
| `first-world-stage` | Merge with `global-platform` | `docs/assets/world.jpg` | The staged world image is stronger when the first-esports beat and global-scale beat read as one larger expansion slide. |
| `global-platform` | Merge into `first-world-stage` | `docs/assets/world.jpg` | A single esports-to-world-scale slide reduces repetition and gives the world image a clearer role. |
| `living-game` | Keep | `docs/assets/old champions.jpg` temporary, subject to later replacement | The image is busy, but it is more semantically connected to changing rosters and long-term evolution than the current abstract system art. |
| `culture-shift` | Keep | `docs/assets/champions.jpg` temporary, subject to later replacement | This is not a perfect culture image, but it is stronger than the current abstract concert stand-in until a better staged background is available. |
| `runeterra-universe` | Merge with `arcane` | `docs/assets/runatera-map.jpg` | The Runeterra map is the strongest staged image and supports a combined universe-expansion beat better than splitting universe and Arcane into separate slides. |
| `arcane` | Merge into `runeterra-universe` | `docs/assets/runatera-map.jpg` | The current staged set has a strong map image but not a strong Arcane-specific background, so one merged universe slide is cleaner. |
| `legacy` | Keep | Reuse `docs/assets/world.jpg` | The closing beat now ends on a broader world-scale scene instead of reverting to abstract placeholder art. |

## Recommended Beat Merge Plan

- Merge `launch` and `match-structure` into one slide.
- Merge `first-world-stage` and `global-platform` into one slide.
- Merge `runeterra-universe` and `arcane` into one slide.
- Keep `opening`, `founding-vision`, `ranked`, `living-game`, `culture-shift`, and `legacy` as separate slides.

This produces a likely 9-slide target for the next implementation pass. That count is preferred over 12 if it creates stronger scene changes and less repetitive pacing.

## Fallback Rules For This Revision

- Reuse of the non-logo staged image set is the approved fallback path for this revision.
- Temporary fallback reuse must be documented per slide in the content metadata and image inventory.
- The staged `logo.jpg` file remains out of production unless a written permission path is documented.

## Constraints

- The factual timeline must remain intact even if the number of slides is reduced.
- Scroll-linked blur or softening effects must strengthen text legibility rather than erase the background image entirely.
- Background changes should remain accessible for reduced-motion users; focus changes cannot depend only on motion.
- Candidate assets in `docs/assets/` must be reviewed and then copied into the shipped production path before implementation ships.
- Temporary fallback backgrounds must be documented explicitly in the asset inventory.

## Non-Goals

- No immediate asset import without inventory and rights review.
- No assumption that every staged image is final-quality or final-rights-cleared.
- No requirement that every slide have a unique background before the next implementation pass can start.

## Acceptance Checks

- At least the weakest current placeholder slides are mapped to stronger approved candidate backgrounds or a documented fallback plan.
- The scroll sequence makes the incoming image readable first and the text readable second.
- Text-focus blur or softening behavior improves legibility during reading moments.
- Any slide-count reduction is justified in writing and does not drop the major historical beats.
- The revised background plan is specific enough to drive a new implementation phase without guesswork.
- The production image set no longer falls back to the abstract SVG artwork for `founding-vision`, `ranked`, or `legacy`.
*** Add File: c:\Users\jose-\Desktop\scroll-telling\docs\specs\10-card-handoff-and-image-only-revision.md
# Spec 10: Card Handoff And Image-Only Revision

## Purpose

Define the next presentation revision so the reading layer feels like one reused card slot while every shipped slide background comes from the staged user-provided image set instead of the abstract SVG fallback art.

## What Done Looks Like

- The reader perceives one dominant stage, not a column of separate cards.
- As the reader advances, the current card fades and yields the stage while the next card rises from the bottom into roughly the same reading position.
- Background blur strengthens as the reader gets deeper into the text portion of a slide.
- The old `Visual beat` helper label no longer competes with the transition, either because it is removed or because it fades away before the next card rises.
- `founding-vision`, `ranked`, and `legacy` no longer ship with the old abstract SVG fallback art.

## Slide-To-Image Contract

| Slide | Production background |
|---|---|
| `opening` | `docs/assets/champions.jpg` |
| `founding-vision` | `docs/assets/champions.jpg` |
| `launch-and-rift` | `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg` |
| `ranked` | `docs/assets/old champions.jpg` |
| `esports-scale` | `docs/assets/world.jpg` |
| `living-game` | `docs/assets/old champions.jpg` |
| `culture-shift` | `docs/assets/champions.jpg` |
| `runeterra-expansion` | `docs/assets/runatera-map.jpg` |
| `legacy` | `docs/assets/world.jpg` |

## Constraints

- Do not ship the staged `logo.jpg` file unless a documented permission path is added to the inventory.
- Keep the 9-slide story structure unless a later spec changes it.
- Preserve reduced-motion readability without relying on scroll-driven animation.
- The next card must visually rise from below; it should not simply appear after a blank spacer.
- The outgoing card must soften or fade enough that the new card feels like the same stage being reused.

## Non-Goals

- No factual timeline rewrite.
- No new image acquisition beyond the staged files already present in `docs/assets/`.
- No additional navigation chrome.

## Acceptance Checks

- Browser QA shows the current card receding while the next card rises from below into the stage.
- Browser QA shows stronger blur and focus treatment once the reader reaches the full-text portion of a slide.
- The old abstract SVG fallback art no longer appears in production.
- The helper caption no longer distracts at the bottom edge during slide handoff.
*** Add File: c:\Users\jose-\Desktop\scroll-telling\docs\phases\active\15-card-handoff-and-image-only-plan.md
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

- Pending.

## Audit Findings

- Pending.
*** Add File: c:\Users\jose-\Desktop\scroll-telling\docs\phases\planned\16-card-handoff-implementation.md
# Phase 16: Card Handoff Implementation

## Goal

Rework the presentation stage so the next card rises from below into the same reading slot while the previous card fades away, and remove the remaining abstract SVG fallbacks from the shipped artwork map.

## Specs Covered

- `docs/specs/03-layout-system.md`
- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Update the presentation layout markup only where the handoff needs structural support.
- Rework the presentation CSS for the same-stage handoff behavior and stronger text-zone blur.
- Remove or neutralize the `Visual beat` helper label.
- Replace the remaining abstract SVG artwork mappings with the staged image set.
- Refresh the content and inventory metadata for the new production image assignment.

## Non-Goals

- No final validation-stack rerun beyond the narrow checks needed while implementing.

## Files Expected To Change

- `src/components/layouts/PresentationLayout.tsx`
- `src/styles/globals.css`
- `src/lib/section-artwork.ts`
- `content/league-history.md`
- `docs/assets/image-inventory.md`
- `tests/unit/section-artwork.test.ts`
- `tests/unit/content-repository.test.ts`

## Ordered Tasks

1. Update the stage markup so the current and incoming reading cards can share one handoff slot.
2. Rework the stylesheet so the outgoing card fades and the incoming card rises from below into the same reading position.
3. Remove the remaining abstract fallback backgrounds from the artwork map and metadata.
4. Run narrow validation and re-QA the touched files.

## Exit Checks

```bash
npm run lint
npm run typecheck
```

## Completion Notes

- Pending.

## Audit Findings

- Pending.
*** Add File: c:\Users\jose-\Desktop\scroll-telling\docs\phases\planned\17-image-only-validation-and-closeout.md
# Phase 17: Image-Only Validation And Closeout

## Goal

Refresh the automated validation surface and close the revision cycle after the same-stage handoff and image-only background changes land.

## Specs Covered

- `docs/specs/05-assets-and-images.md`
- `docs/specs/07-testing.md`
- `docs/specs/10-card-handoff-and-image-only-revision.md`

## Scope

- Refresh any browser assertions needed for the revised handoff or caption removal.
- Re-run the full validation and deployment-mode build stack.
- Update closeout docs and inventory notes.

## Non-Goals

- No new behavior work beyond bugs found in validation.

## Files Expected To Change

- `tests/browser/presentation-page.spec.ts`
- `README.md`
- `docs/phases/STATUS.md`
- `docs/assets/image-inventory.md`
- `docs/phases/active/17-image-only-validation-and-closeout.md`

## Ordered Tasks

1. Refresh the tests to match the new handoff and image-only production set.
2. Run the full validation stack and deployment-mode build.
3. Close the docs and archive the phase files.

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