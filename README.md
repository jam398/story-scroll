# League Of Legends Scrollytelling Page

## Project Goal

Build a static scrollytelling site about the history of League of Legends. The page should tell a compact, factual story with strong visual rhythm, responsive layout, and a clean GitHub Pages deployment path.

## Live Site

TBD after the first GitHub Pages publish.

## Source Of Truth

- Engineering workflow: `docs/references/agent_scrollytelling_page_build_brief.md`
- Factual content: `docs/references/league_of_legends_history_content_doc.md`
- Kickoff summary: `docs/references/letter_to_agent_league_scrollytelling_page.md`
- Active execution plan: `docs/phases/STATUS.md`

## Implemented Stack

- Next.js static export
- React
- TypeScript
- Markdown content with `gray-matter`
- Zod frontmatter validation
- Custom `IntersectionObserver` reveal component with reduced-motion support
- Vitest for unit coverage
- Playwright for browser verification
- GitHub Actions and GitHub Pages

## Working Rules

- Specs define the contract.
- Phases define the execution order.
- Only the active phase may be implemented.
- Fixes must trigger whole-file QA, not line-level QA.
- If a fix changes a contract, every dependent file must be updated and re-checked before the work is considered done.

## QA Standard

When a problem is found:

1. Fix the problem.
2. Re-QA the entire file against its original intent.
3. Update all dependent files affected by the fix.
4. Re-run the relevant validation.
5. Repeat until the full file and its dependents are clean.
6. If the same area breaks twice after repair, stop patching and revise the approach.

## Available Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build
```

On Windows Git Bash, use `MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/scroll-telling npm run build` to avoid shell path conversion of the base path value.

## Current State

The latest motion pass is complete. The presentation now lets the background blur build into the reading zone and then ease back toward normal as the slide yields, while the shared card slot transitions with less dead space and a smoother overlap between outgoing and incoming slides. Lint, typecheck, and Playwright browser coverage all passed after this refinement.