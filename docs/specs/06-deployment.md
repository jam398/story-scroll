# Spec 06: Deployment

## Purpose

Define the static export and GitHub Pages deployment behavior for the site.

## What Done Looks Like

- The site builds to a static output suitable for GitHub Pages.
- Base path handling works without fragile post-build rewrite scripts.
- Deployment is automated through GitHub Actions.
- Assets and internal links resolve correctly after deployment.

## Constraints

- Prefer explicit base-path handling in code or framework config.
- The deployment target is GitHub Pages, not a Node server.
- The workflow must be understandable and reviewable.

## Non-Goals

- No custom server deployment.
- No ad hoc shell hacks for asset rewriting unless absolutely required.

## Acceptance Checks

- `npm run build` produces the static output directory.
- GitHub Actions can upload and deploy the output artifact.
- Asset URLs and page links work with the configured base path.
- A `.nojekyll` file is created in the exported output.

## Implementation Notes

- The GitHub Pages workflow must derive `NEXT_PUBLIC_BASE_PATH` from the repository name so project sites build under `/<repo>` and user sites build at the root.
- Local image consumers must use a shared base-path helper rather than hard-coded root-relative paths.
- The exported output must remain static-only and require no post-build URL rewrite step beyond `.nojekyll` creation.
- On Windows Git Bash, local verification of `NEXT_PUBLIC_BASE_PATH=/scroll-telling` may require `MSYS_NO_PATHCONV=1` to stop shell path conversion from corrupting the value before Next.js reads it.