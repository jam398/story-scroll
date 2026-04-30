# Phase 00: Scaffold

## Specs Covered

- `docs/specs/01-project-goal.md`
- `docs/specs/04-design-system.md`
- `docs/specs/06-deployment.md`
- `docs/specs/07-testing.md`

## Objectives

- Create the base Next.js and TypeScript project shell.
- Configure static export and essential scripts.
- Add baseline project files such as root layout, placeholder home page, and global styles.
- Carry forward the README and AGENTS rules into the scaffolded repo state.

## Files Likely Touched

- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/styles/globals.css`
- `README.md`
- `AGENTS.md`

## What Must Stay Unchanged

- No content model yet.
- No image sourcing work yet.
- No polished scrollytelling layout yet.

## Exit Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Dependency Follow-Up Rule

If scaffold decisions change pathing, scripts, or build output assumptions, update every dependent planning file that references those assumptions before closing the phase.

## Whole-File QA Rule

If a problem is fixed in any scaffold file, re-QA the entire file and then re-check every dependent file that consumes its contract, including specs, phases, and README references.

## Completion Notes

- Created the base Next.js 16 app shell with the App Router under `src/app/`.
- Added static export configuration in `next.config.ts`.
- Added TypeScript and ESLint configuration plus the root `package.json` scripts needed for Phase 00.
- Added a placeholder home page and global stylesheet aligned with the project visual direction without preempting later scrollytelling work.
- Installed dependencies and generated `package-lock.json`.

## Audit Findings

- Initial ESLint config used the compat wrapper and failed under the installed Next flat-config package. Fixed by switching to the native `eslint-config-next` flat exports.
- Initial TypeScript config used a deprecated `baseUrl` alias for the global stylesheet import. Fixed by removing the alias setup and switching to a direct relative import.
- Exit checks passed after the fixes: `npm run lint`, `npm run typecheck`, and `npm run build`.