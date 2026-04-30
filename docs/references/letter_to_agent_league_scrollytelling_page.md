# Letter to the Coding Agent: Build the League of Legends Scrollytelling Page

Dear Agent,

You are being asked to build a **short scrollytelling web page about the history of League of Legends**. This should be a polished, factual, visually engaging page, but it does **not** need to be an exact copy of either reference repository or any existing page. Use the two provided documents as your guide, then create an original page that borrows the best workflow, structure, and technologies from the analyzed repositories.

The goal is to create a page that feels modern, controlled, and professional, while still being fun enough for a gaming-history topic.

---

## 1. Main Objective

Create a static scrollytelling page that tells the history of **League of Legends** in a short, clear, visual way.

The page should cover approximately **7 to 8 sections**, though fewer is acceptable if the final result is stronger and cleaner. The page should not become an encyclopedia. It should be a compact visual story.

The content should explain:

1. How Riot Games started.
2. How League of Legends launched in 2009.
3. How the game became competitive.
4. How League esports grew.
5. How the game became a live-service platform.
6. How League entered music and pop culture.
7. How Runeterra expanded through other media.
8. Why League still matters.

The page should be built using the recommended stack and workflow from the project brief, but the visual design should be original. Do not clone the reference pages pixel-for-pixel.

---

## 2. Files You Must Read First

Before coding, read these two files completely:

```txt
league_of_legends_history_content_doc.md
agent_scrollytelling_page_build_brief.md
```

### File 1: `league_of_legends_history_content_doc.md`

This file contains the factual content for the page. Treat it as the content source of truth.

Use it to understand:

- The recommended title and subtitle.
- The 7 to 8 history sections.
- The factual timeline.
- The page-ready copy.
- The historical claims that must remain accurate.

Do not invent new facts unless you verify them with reliable sources. If you add new claims, record where they came from.

### File 2: `agent_scrollytelling_page_build_brief.md`

This file contains the engineering and workflow instructions.

Use it to understand:

- The recommended technologies.
- The anti-drift workflow.
- The file structure.
- The implementation phases.
- The testing gates.
- The deployment expectations.
- The rules for working safely with an AI-assisted codebase.

This file tells you **how to build**. The League history doc tells you **what to build**.

---

## 3. Important Design Rule

Do **not** create an exact copy of the reference pages.

The page can use the same general technologies and workflow, but the final design should be its own thing.

You may borrow ideas such as:

- Static Next.js export.
- Markdown or MDX content.
- Zod frontmatter validation.
- A layout factory.
- Framer Motion scroll reveals.
- A clean scrollytelling structure.
- GitHub Pages deployment.
- Playwright and Vitest testing.
- Specs and phases for AI control.

But do not directly copy:

- The exact layout.
- The exact colors.
- The exact spacing.
- The exact visual identity.
- The exact page sections from unrelated projects.
- The exact wording from the reference repositories.

Think of the references as tools, not a costume.

---

## 4. Recommended Technology Stack

Use this stack unless there is already an existing project structure that requires small adjustments:

```txt
Next.js
React
TypeScript
MDX or Markdown
gray-matter
next-mdx-remote
remark-gfm
Zod
Framer Motion
Vitest
Playwright
GitHub Actions
GitHub Pages static export
```

Optional only if needed:

```txt
Recharts
Mermaid
js-yaml
tsx
```

Do not add extra libraries unless a spec requires them. Keep the page focused and maintainable.

---

## 5. Recommended File Structure

Create or follow a structure close to this:

```txt
project/
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── docs/
│   ├── specs/
│   │   ├── 01-project-goal.md
│   │   ├── 02-content-model.md
│   │   ├── 03-layout-system.md
│   │   ├── 04-design-system.md
│   │   ├── 05-assets-and-images.md
│   │   ├── 06-deployment.md
│   │   └── 07-testing.md
│   │
│   ├── phases/
│   │   ├── STATUS.md
│   │   ├── 00-scaffold.md
│   │   ├── 01-content-system.md
│   │   ├── 02-layouts-and-design.md
│   │   ├── 03-history-sections.md
│   │   ├── 04-images-and-motion.md
│   │   ├── 05-testing.md
│   │   └── 06-deploy.md
│   │
│   └── _references/
│       ├── scrollytelling_spec_driven-notes.md
│       └── bseai_degree-notes.md
│
├── content/
│   └── league-history.md
│
├── public/
│   └── images/
│       └── league-history/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── PageLayoutFactory.tsx
│   │   │   └── ScrollytellingLayout.tsx
│   │   │
│   │   ├── markdown/
│   │   │   └── MarkdownRenderer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TimelineSection.tsx
│   │   │   ├── StorySection.tsx
│   │   │   └── ClosingSection.tsx
│   │   │
│   │   └── ui/
│   │       ├── Card.tsx
│   │       ├── SectionShell.tsx
│   │       └── TimelineMarker.tsx
│   │
│   ├── lib/
│   │   ├── content/
│   │   │   ├── repository.ts
│   │   │   └── schema.ts
│   │   │
│   │   └── paths.ts
│   │
│   └── styles/
│       └── globals.css
│
├── tests/
│   ├── unit/
│   └── browser/
│
├── AGENTS.md
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── vitest.config.ts
└── playwright.config.ts
```

This does not need to be followed blindly if the existing repository already has a structure, but keep the same separation of concerns.

---

## 6. Required Page Sections

Use the content doc to create a page with these sections:

### Section 1: Hero

Purpose: Introduce League of Legends as more than a game.

Suggested content angle:

- League began as a competitive online game.
- It grew into a global esport and media universe.
- The page tells the history in a short visual timeline.

Suggested visual:

- Dark game-inspired hero.
- Abstract Rift-inspired background.
- League-inspired colors, but not a direct copy of Riot's branding.

### Section 2: Riot Games and the Big Idea

Purpose: Explain the company and concept behind League.

Suggested visual:

- Early development or studio-inspired image.
- Abstract "game design table" image if a real licensed image is not available.

### Section 3: 2009 Launch

Purpose: Explain the launch of League of Legends.

Suggested visual:

- Early Summoner's Rift or early League screenshot.
- If rights are uncertain, use a stylized custom illustration inspired by a fantasy battlefield, not a copied game screenshot.

### Section 4: Competitive Play Begins

Purpose: Show how ranked and competitive systems shaped the game.

Suggested visual:

- Ranked ladder, draft pick, champions, or competitive interface concept.
- A simple timeline marker from 2010.

### Section 5: Esports and Worlds

Purpose: Explain the rise of League esports and early Worlds.

Suggested visual:

- DreamHack 2011 or early Worlds reference image if licensed.
- Later Worlds stage or crowd image if licensed.
- Otherwise, use an original esports arena illustration.

### Section 6: A Living Game

Purpose: Explain updates, patches, new champions, seasonal change, and meta evolution.

Suggested visual:

- Patch notes concept.
- Champion carousel concept.
- Map transformation concept.

### Section 7: Music, Culture, and K/DA

Purpose: Explain how League moved into music and pop culture.

Suggested visual:

- K/DA or music performance reference if allowed.
- Otherwise, create an original neon virtual pop-stage illustration.

### Section 8: Runeterra, Arcane, and the Future

Purpose: Explain expansion beyond the main game.

Suggested visual:

- Arcane-inspired city/fantasy duality, but do not copy Arcane art.
- Original split city illustration: bright upper city, darker underground, fantasy-tech mood.

### Closing Section: Why It Still Matters

Purpose: Tie everything together.

Suggested visual:

- Timeline summary.
- Final callout: game, esport, culture, universe.

---

## 7. Images to Search For

You need to search for images carefully. Use only images that can legally and ethically be used in the project.

Search for these categories:

### Official or permitted assets

Search terms:

```txt
Riot Games League of Legends press kit
League of Legends media kit
League of Legends official screenshots
League of Legends official esports photos
League of Legends Worlds official photos
Riot Games KDA POP STARS official assets
Arcane official press images
```

Use official sources first when possible. Do not hotlink images. Download only if the usage terms allow it, then store them locally under:

```txt
public/images/league-history/
```

### Early League history images

Search terms:

```txt
League of Legends 2009 screenshot
League of Legends launch 2009 image
early League of Legends Summoner's Rift
League of Legends beta screenshot
```

Use only if the image source is reliable and usage is allowed. If usage is unclear, do not include the image. Use an original illustration instead.

### Esports images

Search terms:

```txt
League of Legends World Championship 2011 Fnatic DreamHack
League of Legends Worlds stage official photo
League of Legends esports crowd official photo
League of Legends Worlds trophy official photo
```

Important: esports photos may have copyright restrictions. Prefer official Riot or LoL Esports media pages with clear usage permissions.

### Music and culture images

Search terms:

```txt
KDA POP STARS official Riot image
League of Legends KDA official image
League of Legends Worlds opening ceremony official photo
```

If official assets are not available for reuse, create a custom non-infringing visual instead.

### Runeterra and Arcane images

Search terms:

```txt
Arcane official press image
Riot Games Arcane press kit
League of Legends Runeterra map official
```

Be careful. Arcane imagery is likely copyrighted. Use only permitted press assets, or use an original illustration with a general "fantasy-tech city" mood.

---

## 8. Image Rules

Follow these rules strictly:

1. Do not use random images from Google Images without checking rights.
2. Prefer official Riot, League of Legends, LoL Esports, Netflix press, or Wikimedia Commons where license allows.
3. Store images locally in `public/images/league-history/`.
4. Use descriptive filenames.
5. Add alt text for every image.
6. Keep an image inventory file.
7. Do not use copyrighted art if the rights are unclear.
8. If an image cannot be used safely, replace it with an original abstract or custom generated-style illustration.

Recommended inventory file:

```txt
docs/assets/image-inventory.md
```

Format:

```md
# Image Inventory

| File | Section | Source | License or usage note | Alt text |
|---|---|---|---|---|
| riot-founders-or-studio.jpg | Big Idea | Source URL | Usage note | Alt text |
| summoners-rift-early.jpg | Launch | Source URL | Usage note | Alt text |
```

---

## 9. Visual Style Direction

The design should feel connected to League without copying Riot's exact visual identity.

Recommended style:

```txt
dark fantasy
gold accents
blue magical energy
soft gradients
large section titles
timeline rhythm
cinematic image panels
smooth scroll reveals
```

Avoid:

```txt
copying Riot's UI exactly
using too many colors
overloading the page with animations
making the page look like a wiki
making every section the same
using unreadable fantasy fonts
```

Suggested palette:

```txt
background: near-black navy
primary accent: muted gold
secondary accent: arcane blue
text: soft white
body text: cool gray
cards: translucent dark panels
```

Keep accessibility in mind. Text must have strong contrast.

---

## 10. Content Rules

Use `league_of_legends_history_content_doc.md` as the base content.

Do not make the page too long. Each section should have:

```txt
small eyebrow label
strong heading
short body copy
optional date
one visual
one key takeaway
```

Example structure:

```md
## 2009: The Rift Opens

League of Legends launched on October 27, 2009. It introduced players to a team-based competitive format built around champions, lanes, objectives, and the destruction of the enemy Nexus.

Key idea: League was built to keep changing.
```

Do not add unsupported claims like:

```txt
League was instantly the biggest esport.
League invented MOBAs.
League had millions of players at launch.
Arcane caused League to become popular.
```

Keep the writing factual and clean.

---

## 11. Engineering Rules to Avoid Drift

Follow these rules while implementing:

1. Do not code before reading the two provided docs.
2. Do not skip specs.
3. Do not skip phases.
4. Do not edit files outside the current phase scope.
5. Do not add dependencies unless a spec requires them.
6. Do not invent facts.
7. Do not use images with unclear rights.
8. Do not mark a phase complete unless checks pass.
9. Do not redesign unrelated project areas.
10. Do not turn this into a giant app.

The project is a static scrollytelling page. Keep it sharp.

---

## 12. Required Specs

Create these specs before implementation:

### `docs/specs/01-project-goal.md`

Define the purpose of the page.

Must include:

```txt
target audience
main story
non-goals
definition of done
```

### `docs/specs/02-content-model.md`

Define how content is stored.

Must include:

```txt
Markdown or MDX structure
frontmatter fields
Zod validation
section fields
SEO fields
```

### `docs/specs/03-layout-system.md`

Define layout behavior.

Must include:

```txt
scrollytelling layout
section rhythm
responsive behavior
image placement
timeline behavior
```

### `docs/specs/04-design-system.md`

Define visual style.

Must include:

```txt
colors
typography
spacing
cards
buttons
motion rules
accessibility requirements
```

### `docs/specs/05-assets-and-images.md`

Define image sourcing and usage rules.

Must include:

```txt
image search categories
license requirements
inventory file
alt text rules
local storage path
fallback illustration approach
```

### `docs/specs/06-deployment.md`

Define static export and GitHub Pages deployment.

Must include:

```txt
basePath handling
asset path handling
GitHub Actions workflow
static export output
```

### `docs/specs/07-testing.md`

Define testing requirements.

Must include:

```txt
lint
typecheck
unit tests
build
Playwright e2e
accessibility smoke checks
```

---

## 13. Required Phases

Create these phases and follow them in order.

### Phase 00: Scaffold

Tasks:

- Install or verify project dependencies.
- Confirm Next.js static export setup.
- Add README if missing.
- Add AGENTS.md if missing.
- Add base docs folders.

Exit checks:

```bash
npm install
npm run lint
npm run build
```

### Phase 01: Content System

Tasks:

- Create content repository.
- Create Zod schema.
- Add `content/league-history.md`.
- Load content from Markdown or MDX.

Exit checks:

```bash
npm run typecheck
npm run test
npm run build
```

### Phase 02: Layout and Design System

Tasks:

- Create scrollytelling layout.
- Create section shell.
- Create timeline marker.
- Create reusable text and card components.
- Add global styles.

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

### Phase 03: History Sections

Tasks:

- Render all sections from the content.
- Add headings, dates, summaries, and key takeaways.
- Ensure mobile and desktop layouts work.

Exit checks:

```bash
npm run lint
npm run build
```

### Phase 04: Images and Motion

Tasks:

- Search for usable images.
- Create image inventory.
- Add alt text.
- Add scroll reveal animation.
- Avoid excessive motion.

Exit checks:

```bash
npm run lint
npm run build
npm run test:e2e
```

### Phase 05: Testing

Tasks:

- Add unit tests for content loading and schema validation.
- Add browser test for homepage rendering.
- Add browser test confirming sections appear.
- Add image alt text check if practical.

Exit checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

### Phase 06: Deployment

Tasks:

- Configure GitHub Pages workflow.
- Confirm static export.
- Confirm base path.
- Confirm images load after deploy.

Exit checks:

```bash
npm run build
npm run test:e2e
```

---

## 14. Required `AGENTS.md`

Create this file if it does not already exist:

```md
# Agent Rules

Before editing:
1. Read README.md.
2. Read docs/phases/STATUS.md.
3. Read the current phase file.
4. Read relevant specs.
5. Do not edit files outside the phase scope.
6. Do not add dependencies unless a spec requires them.
7. Do not invent factual claims.
8. Do not use unlicensed images.
9. Run the required exit checks before marking a phase complete.
10. If the plan does not match the codebase, update the phase before coding.
```

---

## 15. README Requirements

Create or update `README.md` with:

```txt
project description
live site link placeholder
tech stack
how to run locally
how to build
how to test
how to deploy
how the AI workflow works
where content lives
where images live
```

The README should help a future human or AI agent understand the project quickly.

---

## 16. Final Acceptance Criteria

The project is complete only when all of these are true:

```txt
The page tells a short factual history of League of Legends.
The page has approximately 7 to 8 sections.
The content comes from the provided history doc or verified sources.
Images are local, credited, inventoried, and have alt text.
The design is original and not an exact copy of the reference repos.
The project uses a clear spec and phase workflow.
The page works on mobile and desktop.
The static build succeeds.
Lint passes.
Typecheck passes.
Unit tests pass.
Playwright tests pass.
GitHub Pages deployment is configured.
README and AGENTS.md exist.
```

---

## 17. Final Reminder

The goal is not to show off every possible tool. The goal is to create a clean, factual, attractive scrollytelling page using a controlled AI-assisted workflow.

Use:

```txt
scrollytelling_spec_driven for the workflow brain
bseai_degree for the content/rendering engine
league_of_legends_history_content_doc.md for the factual story
agent_scrollytelling_page_build_brief.md for the build rules
```

Build something original, focused, and easy to maintain.

Do not let the project become a dragon with twelve heads. One sharp blade is better.
