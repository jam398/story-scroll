# Agent Build Brief: Scrollytelling Page Using the Reference Repo Workflow

## Purpose

Build a polished, static scrollytelling web page using the best patterns from these two reference repositories:

- `https://github.com/kaw393939/scrollytelling_spec_driven`
- `https://github.com/kaw393939/bseai_degree`

The final project does **not** need to copy either repo exactly. It should reuse the strongest ideas:

1. The AI-control workflow from `scrollytelling_spec_driven`.
2. The MDX/content architecture from `bseai_degree`.
3. A clean static Next.js site deployable to GitHub Pages.
4. A small, reviewable, testable implementation process that avoids AI drift.

The coding agent must treat this document as the project contract.

---

## Primary Goal

Create a single scrolling / scrollytelling page with several content sections. The page should feel like a guided story rather than a normal flat article. It should support:

- A strong hero section.
- 6 to 8 short content sections.
- Smooth visual progression as the user scrolls.
- Reusable content loaded from Markdown or MDX.
- Clean responsive design.
- Static export for GitHub Pages.
- Tests and build checks before completion.

If the content topic is the League of Legends history page, use the previously prepared factual content document as the source material. Do not invent additional historical claims without verifying them.

---

# 1. Core Rule: Use Files as Memory, Not Chat

The biggest risk in AI-assisted coding is drift. The agent must not treat chat as the only memory. The repository files must become the source of truth.

Use this rule:

```txt
Chat is discussion.
Specs are the contract.
Phases are the schedule.
Tests are the judge.
Audit notes are the memory of decisions.
```

The agent should not jump directly into coding. First create or update the planning files, then implement phase by phase.

---

# 2. What to Reuse from the Reference Repos

## From `scrollytelling_spec_driven`

Reuse these ideas:

- `docs/specs/` for stable project requirements.
- `docs/phases/` for scoped implementation phases.
- `docs/phases/STATUS.md` as the current project tracker.
- A control loop: Harvest → Converge → Specify → Phase → Pre-flight QA → Implement → Test → Exit QA → Audit.
- Playwright tests that run against the built static output.
- GitHub Pages deployment using a static `out/` export.
- `AGENTS.md` rules to guide future AI coding sessions.

Avoid these parts unless truly needed:

- A very manual Markdown parser for complex content. Prefer MDX rendering instead.
- Overly large teaching docs if this is only a small project.

## From `bseai_degree`

Reuse these ideas:

- Markdown / MDX content files.
- Frontmatter validated by Zod.
- A `ContentRepository` that loads local content.
- A `PageLayoutFactory` that selects the layout from frontmatter.
- Reusable layout components.
- Custom MDX component mapping.
- Optional visualization blocks, if the page needs them.
- Optional source-audit pattern for factual projects.

Avoid or improve these parts:

- Do not rely on a post-build `sed` script to rewrite asset paths for GitHub Pages.
- Do not install Mermaid, Recharts, YAML pipelines, or other heavy dependencies unless a spec explicitly requires them.
- Do not use a vague package name like `testing`; use a real project name.

---

# 3. Recommended Technology Stack

Use this default stack:

```txt
Next.js 16
React 19
TypeScript
MDX / Markdown
next-mdx-remote
remark-gfm
gray-matter
Zod
Framer Motion
CSS Modules or global CSS
Vitest
Playwright
GitHub Actions
GitHub Pages static export
```

Optional dependencies only if needed:

```txt
Recharts      -> only if the page needs charts
Mermaid       -> only if the page needs diagrams
js-yaml + tsx -> only if the page needs a YAML-to-JSON build pipeline
```

The agent should start small. Do not install dependencies just because they look useful.

---

# 4. Recommended File Structure

Create a project structure like this:

```txt
project-name/
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── docs/
│   ├── guide/
│   │   ├── 00-start-here.md
│   │   └── ai-workflow.md
│   │
│   ├── specs/
│   │   ├── 01-project-goal.md
│   │   ├── 02-content-model.md
│   │   ├── 03-layout-system.md
│   │   ├── 04-design-system.md
│   │   ├── 05-motion-and-scroll.md
│   │   ├── 06-deployment.md
│   │   └── 07-testing.md
│   │
│   ├── phases/
│   │   ├── STATUS.md
│   │   ├── 00-scaffold.md
│   │   ├── 01-content-system.md
│   │   ├── 02-layouts.md
│   │   ├── 03-markdown-rendering.md
│   │   ├── 04-scrollytelling-page.md
│   │   ├── 05-motion-and-polish.md
│   │   ├── 06-tests.md
│   │   └── 07-deploy.md
│   │
│   └── _references/
│       ├── scrollytelling_spec_driven-notes.md
│       └── bseai_degree-notes.md
│
├── content/
│   └── home.md
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── [...slug]/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── PageLayoutFactory.tsx
│   │   │   ├── StandardLayout.tsx
│   │   │   └── ScrollyLayout.tsx
│   │   │
│   │   ├── markdown/
│   │   │   └── MarkdownRenderer.tsx
│   │   │
│   │   ├── motion/
│   │   │   └── Reveal.tsx
│   │   │
│   │   ├── scrolly/
│   │   │   ├── HeroPanel.tsx
│   │   │   ├── StorySection.tsx
│   │   │   ├── TimelineRail.tsx
│   │   │   └── SectionProgress.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
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
│   │   └── content-repository.test.ts
│   │
│   └── browser/
│       └── presentation-page.spec.ts
│
├── AGENTS.md
├── README.md
├── package.json
├── next.config.ts
├── playwright.config.ts
├── vitest.config.ts
└── tsconfig.json
```

---

# 5. File Contracts

Each important file has a specific job. Do not blur these responsibilities.

## `AGENTS.md`

Purpose: rules for AI agents working in the repo.

Must include:

```md
# Agent Rules

Before editing:
1. Read README.md.
2. Read docs/phases/STATUS.md.
3. Read the current phase file.
4. Read any specs referenced by the phase.
5. Do not edit files outside the phase scope.
6. Run the phase exit checks before marking the phase complete.
7. If the phase plan does not match the codebase, stop and update the phase before coding.
```

## `README.md`

Purpose: human orientation.

Must include:

- Project goal.
- Live site URL placeholder.
- Tech stack.
- Quick start commands.
- Build and deploy explanation.
- Link to `docs/phases/STATUS.md`.

## `docs/specs/`

Purpose: stable requirements.

Each spec must include:

```md
# Spec Name

## Purpose

## What done looks like

## Constraints

## Non-goals

## Acceptance checks
```

Specs must be small. One concern per file.

## `docs/phases/`

Purpose: execution plan.

Each phase must include:

```md
# Phase NN: Name

## Specs covered

## Objectives

## Files likely touched

## Exit checks

## Completion notes

## Audit findings
```

## `docs/phases/STATUS.md`

Purpose: current project state.

Use a table like this:

```md
| Phase | Status | Notes |
|---|---|---|
| 00-scaffold | done | Basic app created |
| 01-content-system | active | Building content repository |
| 02-layouts | pending | Not started |
```

## `content/home.md`

Purpose: page content.

Suggested frontmatter:

```md
---
title: "Page Title"
layout: "scrolly"
summary: "Short summary for SEO and previews."
seo:
  title: "SEO Title"
  description: "SEO description."
---

# Hero title

Intro text.

---

## Section title

Section content.
```

The agent may split sections using `---` if using a custom scrolly layout.

## `src/lib/content/schema.ts`

Purpose: validate Markdown frontmatter.

Recommended schema:

```ts
import { z } from "zod";

export const PageFrontmatterSchema = z.object({
  title: z.string().min(1),
  layout: z.enum(["standard", "scrolly"]),
  summary: z.string().optional(),
  heroImage: z.string().optional(),
  seo: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      openGraphImage: z.string().optional(),
    })
    .optional(),
});

export type PageFrontmatter = z.infer<typeof PageFrontmatterSchema>;
```

## `src/lib/content/repository.ts`

Purpose: load Markdown files, parse frontmatter, validate with Zod, and return typed page data.

Rules:

- Do not silently ignore validation errors.
- Throw clear errors for missing content.
- Keep file-system logic here, not inside components.

## `src/components/layouts/PageLayoutFactory.tsx`

Purpose: choose the layout from frontmatter.

Recommended logic:

```tsx
if (page.frontmatter.layout === "scrolly") {
  return <ScrollyLayout page={page} />;
}

return <StandardLayout page={page} />;
```

## `src/components/markdown/MarkdownRenderer.tsx`

Purpose: render Markdown/MDX into design-system components.

Recommended:

- Use `next-mdx-remote/rsc`.
- Use `remark-gfm`.
- Map headings, paragraphs, links, images, lists, blockquotes, and tables to styled components.
- Keep this renderer generic. Do not hardcode page-specific content here.

## `src/lib/paths.ts`

Purpose: safe base path handling for GitHub Pages.

Recommended:

```ts
export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
```

Do not use a post-build `sed` script for asset path rewriting unless there is no alternative.

---

# 6. Anti-Drift Rules

The agent must follow these rules:

## Rule 1: No coding before specs and phases exist

Do not start implementation until `docs/specs/` and `docs/phases/` have enough detail to guide the build.

## Rule 2: One phase at a time

Only implement the active phase in `docs/phases/STATUS.md`.

## Rule 3: No unrelated edits

If the current phase is about the content repository, do not redesign the UI.

If the current phase is about the hero section, do not rewrite deployment.

## Rule 4: Every phase needs exit checks

Each phase must define runnable checks. Example:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

## Rule 5: If the plan is wrong, update the plan first

If a file path is wrong or a dependency is missing, do not improvise. Update the phase file, explain why, then continue.

## Rule 6: Do not invent facts

For factual content pages, do not invent dates, numbers, quotes, or historical claims. Use verified sources and record the sources in content or documentation.

## Rule 7: Keep dependencies small

Install only what the specs require.

## Rule 8: Preserve reviewability

Keep phases small enough that a human can review the changes.

---

# 7. Implementation Phases

## Phase 00: Scaffold

Goal: create the base Next.js project.

Objectives:

- Create project structure.
- Install dependencies.
- Configure TypeScript strict mode.
- Configure ESLint.
- Configure static export for GitHub Pages.
- Add placeholder home page.

Files likely touched:

```txt
package.json
next.config.ts
tsconfig.json
src/app/page.tsx
src/styles/globals.css
README.md
AGENTS.md
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Phase 01: Content System

Goal: load Markdown content safely.

Objectives:

- Add `content/home.md`.
- Add Zod frontmatter schema.
- Add content repository.
- Add unit tests for valid content, missing content, and invalid frontmatter.

Files likely touched:

```txt
content/home.md
src/lib/content/schema.ts
src/lib/content/repository.ts
tests/unit/content-repository.test.ts
vitest.config.ts
```

Exit checks:

```bash
npm run test
npm run build
```

## Phase 02: Layout System

Goal: add standard and scrolly layouts.

Objectives:

- Create `PageLayoutFactory`.
- Create `StandardLayout`.
- Create `ScrollyLayout`.
- Make root page load `content/home.md` and render the selected layout.

Files likely touched:

```txt
src/app/page.tsx
src/components/layouts/PageLayoutFactory.tsx
src/components/layouts/StandardLayout.tsx
src/components/layouts/ScrollyLayout.tsx
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Phase 03: Markdown / MDX Rendering

Goal: render content through a reusable Markdown renderer.

Objectives:

- Add `MarkdownRenderer`.
- Use `next-mdx-remote/rsc`.
- Add `remark-gfm`.
- Map Markdown elements to styled components.
- Ensure links, headings, lists, and paragraphs render correctly.

Files likely touched:

```txt
src/components/markdown/MarkdownRenderer.tsx
src/components/ui/Text.tsx
src/components/ui/Heading.tsx
src/components/ui/Link.tsx
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Phase 04: Scrollytelling Page

Goal: turn the content into a strong scrolling experience.

Objectives:

- Split content into sections.
- Create `HeroPanel`.
- Create `StorySection`.
- Add a visual timeline or progress rail.
- Ensure mobile and desktop layouts work.

Files likely touched:

```txt
src/components/scrolly/HeroPanel.tsx
src/components/scrolly/StorySection.tsx
src/components/scrolly/TimelineRail.tsx
src/components/scrolly/SectionProgress.tsx
src/components/layouts/ScrollyLayout.tsx
src/styles/globals.css
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Phase 05: Motion and Polish

Goal: add tasteful motion without hurting readability.

Objectives:

- Add Framer Motion reveal effects.
- Respect reduced-motion preferences.
- Avoid distracting animation.
- Polish spacing, typography, color, and responsive behavior.

Files likely touched:

```txt
src/components/motion/Reveal.tsx
src/components/scrolly/*.tsx
src/styles/globals.css
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Phase 06: Tests

Goal: add browser-level confidence.

Objectives:

- Add Playwright config.
- Test the built static site, not only the dev server.
- Assert hero renders.
- Assert section headings render.
- Assert page can scroll.
- Assert no critical console errors.

Files likely touched:

```txt
playwright.config.ts
tests/browser/presentation-page.spec.ts
package.json
```

Recommended Playwright server command:

```ts
webServer: {
  command: "npm run build && npx serve out -l 4321",
  url: "http://127.0.0.1:4321",
  reuseExistingServer: true,
}
```

Exit checks:

```bash
npm run test:e2e
```

## Phase 07: Deployment

Goal: deploy to GitHub Pages.

Objectives:

- Add `.github/workflows/pages.yml`.
- Build static site.
- Upload `out/` artifact.
- Add `.nojekyll`.
- Configure base path safely.

Files likely touched:

```txt
.github/workflows/pages.yml
next.config.ts
src/lib/paths.ts
README.md
```

Exit checks:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

---

# 8. Recommended `package.json` Scripts

Use scripts like these:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test"
  }
}
```

Every phase must run the relevant checks. Final completion requires all checks.

---

# 9. Recommended GitHub Pages Deployment

Use GitHub Actions to build and deploy `out/`.

Recommended workflow behavior:

1. Trigger on push to `main` and manual workflow dispatch.
2. Install dependencies with `npm ci`.
3. Set Node 20.
4. Build Next.js static export.
5. Touch `out/.nojekyll`.
6. Upload Pages artifact.
7. Deploy with `actions/deploy-pages`.

Do not use fragile post-build asset rewriting if the project can avoid it.

---

# 10. Quality Checklist

Before marking the project complete, confirm:

```txt
[ ] README explains the project and commands.
[ ] AGENTS.md contains AI rules.
[ ] docs/specs/ exists and covers the project.
[ ] docs/phases/ exists and phases map to specs.
[ ] STATUS.md shows all phases complete.
[ ] Content loads from Markdown or MDX.
[ ] Frontmatter is validated with Zod.
[ ] Page renders through a layout factory.
[ ] Scrollytelling layout is responsive.
[ ] Animations respect reduced motion.
[ ] No invented factual claims.
[ ] GitHub Pages deployment is configured.
[ ] npm run lint passes.
[ ] npm run typecheck passes.
[ ] npm run test passes.
[ ] npm run build passes.
[ ] npm run test:e2e passes.
```

---

# 11. Suggested Agent Prompts

Use these prompts when working with an AI coding assistant.

## Harvest prompt

```txt
Analyze the current repo and the two reference repos. List reusable architecture, workflow, content, testing, and deployment ideas. Do not write code yet.
```

## Converge prompt

```txt
Rank the ideas by usefulness for this project. Separate must-have, nice-to-have, and avoid. End with the agreed scope in one paragraph.
```

## Specify prompt

```txt
Create the required files in docs/specs/. Each spec must include purpose, what done looks like, constraints, non-goals, and acceptance checks. Keep one concern per file.
```

## Phase prompt

```txt
Create docs/phases/ so that 100% of the specs are covered. Each phase must list specs covered, objectives, files likely touched, and runnable exit checks. Create or update docs/phases/STATUS.md.
```

## Pre-flight QA prompt

```txt
Before implementing the active phase, inspect the current codebase. Confirm that file paths exist, dependencies are installed, specs still match the phase, and exit checks are runnable. Update the phase file if needed. Do not implement yet.
```

## Implement prompt

```txt
Implement only the active phase. Work one objective at a time. Do not edit files outside the phase scope. Run the relevant exit checks before moving on.
```

## Exit QA prompt

```txt
QA the active phase. Confirm every objective is complete. Run lint, typecheck, test, build, and e2e as applicable. Record results in the phase file. Do not mark complete if any check fails.
```

## Audit prompt

```txt
Audit the changed code for correctness, readability, unnecessary abstraction, and maintainability. Record findings as blocker, backlog, or wontfix. Do not change code during the audit.
```

---

# 12. Things the Agent Must Not Do

Do not:

- Start coding before specs and phases exist.
- Add authentication, databases, APIs, or dashboards unless explicitly requested.
- Add heavy dependencies without a spec.
- Hardcode all content directly inside React components.
- Invent factual content.
- Rewrite unrelated files during a phase.
- Mark a phase complete without running checks.
- Hide failed checks.
- Use post-build hacks when a proper base path solution exists.
- Delete tests to make a build pass.

---

# 13. Final Recommendation

Build the project as a small but disciplined static site:

```txt
Reference workflow: scrollytelling_spec_driven
Content engine: bseai_degree
Deployment style: GitHub Pages static export
Rendering style: MDX + design-system components
Validation: Zod
Motion: Framer Motion
Testing: Vitest + Playwright
Project control: specs + phases + STATUS.md
```

The most important instruction is this:

```txt
Do not let the AI code from vibes. Make it code from specs, phases, and tests.
```

That is the difference between a clean scrollytelling page and a cursed spaghetti cathedral.
