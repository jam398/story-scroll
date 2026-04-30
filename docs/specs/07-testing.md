# Spec 07: Testing

## Purpose

Define the validation strategy for content integrity, rendering, build quality, and browser-level behavior.

## What Done Looks Like

- Lint, typecheck, unit tests, build, and browser tests exist and are runnable.
- Unit tests cover content loading and schema validation.
- Browser tests confirm the page renders, slides advance correctly, scrolling works, and the visual layer remains accessible.
- Major runtime issues are caught before marking the project complete.

## Constraints

- The checks should stay narrow enough to support phase-by-phase validation.
- Browser tests should validate the built static site when practical.
- QA must include whole-file review and dependent-file review after fixes.
- Browser checks must cover both default motion and reduced-motion behavior for the slide engine.

## Non-Goals

- No oversized test pyramid for a single-page project.
- No deleting tests to force green builds.

## Acceptance Checks

- `lint`, `typecheck`, `test`, `build`, and `test:e2e` are defined before final completion.
- At least one positive, one negative, and one golden-path unit scenario exist where relevant.
- Browser tests cover opening-slide render, slide progression, major console failures, shipped image alt text, and reduced-motion visibility.
- Browser tests catch broken internal CTA routes or other user-visible navigation regressions when those links are part of the shipped page.
- Validation records reflect the real result of each check.