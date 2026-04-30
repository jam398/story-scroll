# Spec 03: Layout System

## Purpose

Define how the site chooses layouts and how the redesigned presentation page is structured across screen sizes.

## What Done Looks Like

- A layout factory selects the correct page layout from content frontmatter.
- The root page loads content from the repository and renders through the layout factory.
- The presentation layout supports 8 to 12 slide stages with opening, narrative, diagram, and closing treatments.
- Slides render the zipped Markdown body content alongside their validated metadata.
- Each slide uses a tall scroll section with a sticky viewport stage so the next background scene can rise from the bottom before the text settles into focus.
- Progress or orientation elements support navigation without overtaking the slide content.
- The layout maintains readable rhythm on mobile and desktop.

## Constraints

- Layout logic must stay separate from content loading.
- The presentation layout must remain responsive and accessible.
- Visual structure should reinforce the story sequence.
- The layout must support Markdown-rendered slide bodies without hardcoding story copy into the component tree.
- Slides should avoid nested scroll containers inside the sticky stage.
- Long text must be prevented through content and layout constraints, not by adding internal overflow panes.
- Image-led slides should allow the background to dominate the viewport first, with text overlays becoming clearer only after further scroll progression.
- Background emphasis changes such as blur, dimming, or overlay shifts must strengthen reading focus rather than act as decoration.

## Non-Goals

- No generalized page builder.
- No multiple unrelated layout families for the first release.
- No card-stack article layout for the redesign target.

## Acceptance Checks

- The root page renders through the layout factory.
- The presentation layout can render all validated slides, including image-led and split-media slides.
- Mobile layout preserves reading order, legibility, and progression cues.
- Orientation controls do not block content access.
- As a reader scrolls into a slide, the incoming background reads first and the text overlay gains emphasis after additional progression.
- The page visibly feels like a staged presentation rather than a sequence of equal-weight cards.