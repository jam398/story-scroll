# Phase 07: Presentation Content Remodel

## Goal

Convert the current section-based League history contract into a 10 to 12 slide presentation content model without changing the factual timeline.

## Specs Covered

- `docs/specs/01-project-goal.md`
- `docs/specs/02-content-model.md`
- `docs/specs/08-presentation-redesign.md`

## Scope

- Replace the current `hero` / `timeline` / `sections` content contract with a validated slide contract.
- Rewrite the content file into 10 to 12 slides with shorter copy and clearer visual beats.
- Update repository and schema expectations to support slide metadata and slide-count validation.
- Keep all factual claims grounded in `docs/references/league_of_legends_history_content_doc.md`.

## Non-Goals

- No new presentation layout engine yet.
- No final visual polish or asset selection beyond content placeholders.
- No deployment workflow changes in this phase.

## Available Assets / Current State

- Current content source: `content/league-history.md`
- Current schema and repository: `src/lib/content/schema.ts`, `src/lib/content/repository.ts`
- Current content tests: `tests/unit/content-repository.test.ts`
- Governing factual source: `docs/references/league_of_legends_history_content_doc.md`

## Files Expected To Change

- `content/league-history.md`
- `src/lib/content/schema.ts`
- `src/lib/content/repository.ts`
- `tests/unit/content-repository.test.ts`
- `README.md`
- `docs/phases/STATUS.md`

## Ordered Tasks

1. Define the slide metadata fields and supported slide types in the schema.
2. Refactor the repository to load and validate slide-based content.
3. Rewrite the content file into 10 to 12 slide beats with shorter copy.
4. Update unit tests for the new contract and validation rules.
5. Re-QA the changed files and update dependent docs.

## Proposed Slide Outline

Target count: 12 slides.

1. `opening`
	- Working title: `From the Rift to the World`
	- Purpose: establish the page as a visual history presentation, not an article.
	- Source mapping: current hero summary.
	- Content target: one headline, one short deck, no bullets.

2. `background`
	- Working title: `A Game Built to Keep Evolving`
	- Purpose: introduce Riot's 2006 founding and the live-service idea.
	- Source mapping: current `big-idea` section.
	- Content target: one short paragraph plus one key takeaway line.

3. `split`
	- Working title: `Welcome to the Rift`
	- Purpose: cover the 2009 launch and the basic MOBA frame.
	- Source mapping: first half of current `launch-2009` section.
	- Content target: one short paragraph plus up to three factual bullets.

4. `diagram`
	- Working title: `How a Match Works`
	- Purpose: explain Nexus, lanes, and the Summoner's Rift structure visually.
	- Source mapping: second half of current `launch-2009` section.
	- Content target: one sentence plus diagram labels or three micro-bullets.

5. `background`
	- Working title: `Ranked Play Changes Everything`
	- Purpose: show how Season One and ranked systems turned League into a long-term competitive habit.
	- Source mapping: current `ranked-play` section.
	- Content target: one short paragraph plus one key takeaway line.

6. `split`
	- Working title: `From DreamHack to Worlds`
	- Purpose: establish the 2011 esports inflection point.
	- Source mapping: current `esports` section.
	- Content target: one short paragraph plus up to three factual bullets.

7. `timeline`
	- Working title: `League Goes Global`
	- Purpose: compress the spread from one game into a worldwide competitive platform.
	- Source mapping: current top-level timeline plus esports follow-through.
	- Content target: a short setup line plus timeline or map labels rather than body copy.

8. `background`
	- Working title: `The Living Game`
	- Purpose: explain patches, reworks, champions, and why constant change is League's engine.
	- Source mapping: current `living-game` section.
	- Content target: one short paragraph plus one takeaway line.

9. `split`
	- Working title: `League Becomes Culture`
	- Purpose: cover K/DA, Worlds spectacle, and the shift from game to stage.
	- Source mapping: current `culture` section.
	- Content target: one short paragraph plus one key takeaway line.

10. `split`
	- Working title: `From One Game to a Universe`
	- Purpose: cover the 10th anniversary pivot, Teamfight Tactics, Wild Rift, and the Runeterra expansion.
	- Source mapping: first half of current `runeterra` section.
	- Content target: one short paragraph plus up to three product or universe callouts.

11. `background`
	- Working title: `Arcane Opens the Door Wider`
	- Purpose: cover Arcane's 2021 premiere and the 2024 activations that tie the universe back into Riot's games.
	- Source mapping: second half of current `runeterra` section plus quick timeline notes.
	- Content target: one short paragraph plus one factual support line.

12. `closing`
	- Working title: `The Rift Is Still Open`
	- Purpose: explain why League still matters and end on the live-service legacy thesis.
	- Source mapping: current `legacy` section.
	- Content target: one short paragraph, one closing line, optional compact recap markers.

## Content Compression Rules

- Opening and closing slides: maximum 30 words of body copy beneath the headline and deck.
- Narrative slides: maximum 55 to 70 words of paragraph copy.
- Bullet slides: maximum three bullets unless the slide type is explicitly `timeline`.
- Timeline or diagram slides: labels should do most of the explanatory work; paragraph copy should stay minimal.
- No slide should require two full paragraphs unless the second paragraph is reduced to a single-line takeaway.
- Existing `visualIdea` notes are planning aids only and must not surface as public-facing copy in the final presentation.

## Source Coverage Map

- Founding and live-service premise: Slides 1 to 2.
- 2009 launch and match structure: Slides 3 to 4.
- Ranked competition and esports rise: Slides 5 to 7.
- Living-game reinvention and cultural expansion: Slides 8 to 9.
- Runeterra, Arcane, and legacy: Slides 10 to 12.

## Product Rules / Behavior Invariants

- The factual timeline must still cover Riot's founding, launch, ranked competition, esports, the living-game model, culture, Runeterra expansion, and legacy.
- Copy must get shorter, not longer.
- The content contract must stay single-file and repository-loaded.
- Unsupported slide types must fail validation clearly.
- The 12-slide outline above is the default planning target; any merge down to 10 or 11 slides must preserve the same factual beats and be documented explicitly.

## Risks / Watchouts

- The new slide contract can become too vague if it mixes layout concerns and content concerns.
- Text compression must not delete the historical through-line.
- Repository changes here will affect every future layout and test.

## Exit Checks

```bash
npm run test
npm run typecheck
```

## Completion Notes

- Completed on April 29, 2026.
- The content source now uses a validated 12-slide presentation contract with per-slide media planning metadata.
- Repository consumers were updated to read `presentation` and `slides` instead of the old `hero` and `sections` contract.
- Dependent tests were updated for slide loading and artwork key coverage.

## Audit Findings

- Fixed a public-facing leak of internal image-planning notes from the transitional story layout.
- Removed silent fallback behavior for unknown artwork asset keys so slide media mapping failures now surface clearly.
- Phase 07 exit checks passed with `npm run test` and `npm run typecheck`.
