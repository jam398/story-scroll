# Spec 02: Content Model

## Purpose

Define how the League history content is stored, validated, loaded, and mapped into an image-led 8 to 12 slide presentation.

## What Done Looks Like

- The history content lives outside React components in Markdown.
- Frontmatter is validated with Zod.
- The loader throws clear errors for missing or invalid content.
- The frontmatter contains `seo`, `presentation`, and `slides` metadata for one presentation page.
- Each slide record declares a constrained slide type, text intent, and media treatment.
- Slide metadata can express whether a slide uses a dedicated background image or a documented fallback image.
- The Markdown body is split into slide slices with `---` separators and zipped to the validated slide metadata.

## Constraints

- The initial source material is `docs/references/league_of_legends_history_content_doc.md`.
- No silent fallback for invalid frontmatter.
- File-system access belongs in the content repository, not in UI components.
- The number of Markdown body slides must match the number of slide metadata entries.
- Slide metadata must support short-form storytelling rather than essay-sized content.
- The content model must allow intentional slide merges when the presentation becomes stronger with fewer beats.
- Supported slide types must be limited and explicit, for example `opening`, `background`, `split`, `diagram`, `timeline`, and `closing`.

## Non-Goals

- No remote CMS.
- No complex multi-locale pipeline.
- No content editing UI.
- No freeform unvalidated slide builder.

## Acceptance Checks

- A single content file can drive the full presentation.
- Frontmatter validation rejects malformed content with a clear message.
- Slide data can be rendered without hardcoding history copy into components.
- The repository rejects slide-count mismatches between metadata and Markdown content.
- Each slide can declare a rights-safe local asset key or a documented external-source placeholder for later asset selection.
- Each slide can declare a meaningful background choice or a documented temporary fallback if a better image is not ready yet.
- Tests cover valid content, invalid frontmatter, missing file behavior, unsupported slide types, and slide-count mismatch behavior.