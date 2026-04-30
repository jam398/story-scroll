# Spec 09: Background Image Staging

## Purpose

Define the next visual revision for the presentation so slides feel background-led, scroll-reactive, and more semantically tied to the story beats.

## What Done Looks Like

- The next background scene can rise from the bottom of the viewport before the text panel becomes the primary reading target.
- Image-led slides can progressively soften or blur the background as the reader reaches the text-focused portion of the slide.
- Approved staged assets from `docs/assets/` replace the least meaningful current placeholder images where they better match the beat.
- Slides without a strong approved background can temporarily use a documented shared fallback, including the staged logo image if it is approved for that role.
- The total beat count can be reduced if merging slides creates stronger pacing and clearer visual storytelling.

## Candidate Assets In Scope

- `docs/assets/champions.jpg`
- `docs/assets/world.jpg`
- `docs/assets/runatera-map.jpg`
- `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg`
- `docs/assets/logo.jpg`

## Current Assessment

- The shipped abstract SVG placeholders are visually consistent but not always semantically strong enough for the current story beats.
- The strongest staged candidates currently appear to be the map-oriented and world-oriented images for structure, universe, and scale beats.
- The staged logo image is acceptable as a temporary fallback background, but it should not become the long-term answer for every unresolved slide.
- The most important behavior change is not only swapping images; it is changing slide staging so the background arrives first and the text gains emphasis later.

## Exact Slide-To-Image Assignment

This mapping is the default plan for the next implementation cycle.

| Current slide | Keep / merge | Background plan | Reason |
|---|---|---|---|
| `opening` | Keep | `docs/assets/champions.jpg` | The opening needs a broad, instantly readable League image instead of an abstract hero placeholder. |
| `founding-vision` | Keep for now | `docs/assets/logo.jpg` fallback | There is no strong staged image for Riot's founding beat yet, so the logo image is acceptable as a temporary branded fallback. |
| `launch` | Merge with `match-structure` | `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg` | The launch and map-structure beats are stronger as one full-screen Summoner's Rift slide than as two separate slides. |
| `match-structure` | Merge into `launch` | `docs/assets/wp15730906-league-of-legends-map-wallpapers.jpg` | The map image directly supports both the launch premise and the match explainer. |
| `ranked` | Keep | `docs/assets/logo.jpg` fallback | No staged ranked-specific image exists yet; use the logo fallback temporarily rather than a weak abstract ladder placeholder. |
| `first-world-stage` | Merge with `global-platform` | `docs/assets/world.jpg` | The staged world image is stronger when the first-esports beat and global-scale beat read as one larger expansion slide. |
| `global-platform` | Merge into `first-world-stage` | `docs/assets/world.jpg` | A single esports-to-world-scale slide reduces repetition and gives the world image a clearer role. |
| `living-game` | Keep | `docs/assets/old champions.jpg` temporary, subject to later replacement | The image is busy, but it is more semantically connected to changing rosters and long-term evolution than the current abstract system art. |
| `culture-shift` | Keep | `docs/assets/champions.jpg` temporary, subject to later replacement | This is not a perfect culture image, but it is stronger than the current abstract concert stand-in until a better staged background is available. |
| `runeterra-universe` | Merge with `arcane` | `docs/assets/runatera-map.jpg` | The Runeterra map is the strongest staged image and supports a combined universe-expansion beat better than splitting universe and Arcane into separate slides. |
| `arcane` | Merge into `runeterra-universe` | `docs/assets/runatera-map.jpg` | The current staged set has a strong map image but not a strong Arcane-specific background, so one merged universe slide is cleaner. |
| `legacy` | Keep | `docs/assets/logo.jpg` fallback for now | The closing slide can use the logo fallback temporarily while a better final legacy image is curated later. |

## Recommended Beat Merge Plan

- Merge `launch` and `match-structure` into one slide.
- Merge `first-world-stage` and `global-platform` into one slide.
- Merge `runeterra-universe` and `arcane` into one slide.
- Keep `opening`, `founding-vision`, `ranked`, `living-game`, `culture-shift`, and `legacy` as separate slides.

This produces a likely 9-slide target for the next implementation pass. That count is preferred over 12 if it creates stronger scene changes and less repetitive pacing.

## Fallback Rules For This Revision

- `docs/assets/logo.jpg` is the approved temporary fallback for slides that do not yet have a stronger staged background.
- Temporary fallback use must be documented per slide in the content metadata and image inventory.
- Fallback use is acceptable for this revision cycle, but it should be treated as provisional rather than final-quality art direction.

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