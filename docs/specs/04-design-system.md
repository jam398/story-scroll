# Spec 04: Design System

## Purpose

Define the visual language, spacing rules, typography intent, motion principles, and accessibility baseline.

## What Done Looks Like

- The page has a clear visual identity inspired by dark fantasy, stage lighting, and arcane energy without copying Riot branding.
- Typography, spacing, surfaces, and accent colors feel intentional and presentation-ready.
- Motion supports the feeling that slides rise into view and imagery resolves with the scroll.
- Background imagery can soften or blur as the reader reaches the text-reading zone so the copy becomes the clearest focal layer at the right moment.
- Slide captions or helper labels must not compete with the handoff. Any auxiliary media label should either disappear before the next card rises or be removed entirely.
- Text contrast and slide structure remain accessible.
- Visuals carry the story so the page does not depend on long uninterrupted blocks of text.

## Constraints

- Use a restrained palette: near-black navy base, muted gold accent, arcane blue secondary accent, soft white and cool gray text.
- Avoid over-animation and repeated identical slide layouts.
- Maintain strong readability over atmosphere.
- Prefer one strong headline, one short deck, and limited supporting copy per slide.
- Favor full-bleed or dominant imagery over small boxed illustrations.
- Use light text over controlled dark overlays when slides are image-led.
- Blur and overlay changes must be scroll-linked and restrained; they should improve text focus, not make the background unreadable or gimmicky.
- When a meaningful approved background exists, prefer it over abstract placeholder art.
- The outgoing card should fade and soften before the incoming card reaches its reading position so the transition feels like one card slot being reused.

## Non-Goals

- No design-system sprawl.
- No exact Riot UI recreation.
- No novelty interactions that harm performance or clarity.

## Acceptance Checks

- The opening, middle slides, and closing slide share one coherent visual system.
- Core type hierarchy is clear at a glance.
- Color contrast remains readable on all key surfaces.
- Reduced-motion users can consume the full page without losing meaning.
- A reader can scan each slide quickly without being confronted by wall-of-text composition.
- Image-led slides can shift visual emphasis toward the text as the reader scrolls deeper into the slide.
- Slides alternate pacing through imagery, spacing, and composition instead of repeating the same card template.
- The text handoff reads as a rising replacement, not as two independent cards stacked on a long page.