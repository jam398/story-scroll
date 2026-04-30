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