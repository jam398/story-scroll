# Phase 09: Slide Media And Motion

## Goal

Build the image system, motion timing, and rights-safe media inventory that make the presentation visually strong without introducing legal ambiguity.

## Specs Covered

- `docs/specs/04-design-system.md`
- `docs/specs/05-assets-and-images.md`
- `docs/specs/08-presentation-redesign.md`

## Scope

- Select the final image approach per slide: original art, clearly licensed external media, or documented Riot-policy-permitted assets.
- Update the asset inventory with rights notes, usage notes, and alt text.
- Add slide-specific image choreography such as parallax, drift, staged reveal, and focal positioning.
- Keep reduced-motion behavior intact.

## Non-Goals

- No random internet image scraping.
- No logo-based branding pass.
- No deployment or final test harness work beyond what is required to unblock slide media.

## Available Assets / Current State

- Current local visuals: `public/images/league-history/*`
- Current inventory: `docs/assets/image-inventory.md`
- Current artwork mapping: `src/lib/section-artwork.ts`
- Current reveal component: `src/components/motion/Reveal.tsx`
- External source candidates already reviewed: Riot legal/press pages and selected Wikimedia Commons files

## Files Expected To Change

- `public/images/league-history/*`
- `docs/assets/image-inventory.md`
- `src/components/layouts/PresentationLayout.tsx`
- `src/lib/section-artwork.ts`
- `src/components/motion/*`
- `src/styles/globals.css`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Finalize the per-slide image plan and rights basis.
2. Create or import the approved visuals locally.
3. Update the asset inventory with rights, attribution, and alt text.
4. Add motion/focal behavior that matches the slide system.
5. Re-QA the asset docs and dependent components.

## Draft Image Plan

This draft is now mirrored in `content/league-history.md` slide metadata so Phase 09 can promote it into final assets and inventory entries instead of rebuilding the plan from scratch.

| Slide | Preferred rights path | Current placeholder direction |
|---|---|---|
| Opening | Original | Keep the abstract Rift hero artwork. |
| A Game Built to Keep Evolving | Original | Keep the studio-to-rift illustration. |
| Welcome to the Rift | Original | Keep the 2009 launch illustration. |
| How a Match Works | Original | Convert the launch visual into a labeled diagram. |
| Ranked Play Changes Everything | Original | Keep the ladder illustration. |
| From DreamHack to Worlds | Licensed external if a clearly licensed stage image is found; otherwise original | Use the current arena graphic as the safe placeholder. |
| League Goes Global | Licensed external if a clearly licensed world map or scale image is found; otherwise original | Keep an original timeline treatment until a compliant source is documented. |
| The Living Game | Original | Keep the patchwork system artwork. |
| League Becomes Culture | Original | Keep the neon performance artwork. |
| From One Game to a Universe | Original | Keep the Runeterra skyline artwork. |
| Arcane Opens the Door Wider | Licensed external only if a documented rights-safe source is found; otherwise original | Keep the Runeterra-style placeholder for now. |
| The Rift Is Still Open | Original | Keep the open-horizon closing artwork. |

## Product Rules / Behavior Invariants

- Every shipped asset must have a documented rights basis.
- Visuals should reduce text pressure rather than decorate already-dense slides.
- Motion must reinforce the scroll story and remain optional for reduced-motion users.
- If Riot-policy-permitted assets are used, the final site contract must include the required fan-project notice.

## Risks / Watchouts

- It is easy to drift into legally ambiguous imagery if the source hierarchy is not enforced.
- Overly strong motion can turn a paced slide deck into a gimmick.
- Mixed image styles can make the page feel like a collage instead of one presentation.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Completion Notes

- Completed on April 29, 2026.
- The shipped asset system is now documented through `docs/assets/image-inventory.md`, with rights basis, slide usage, and usage notes for every current local image.
- The presentation layout now uses asset-level focal positioning and motion presets to vary pacing without changing the underlying slide content.
- All currently shipped visuals remain original repo-created SVGs, so the shipped site does not currently depend on Riot-policy or externally licensed media.

## Audit Findings

- Added explicit asset-key failure behavior so media mapping issues cannot hide behind silent fallback.
- Phase 09 exit checks passed with `npm run lint`, `npm run typecheck`, and `npm run build`.
- Browser sanity pass confirmed the updated slide-map surface and media pacing still render cleanly on the local dev server.
