# Spec 05: Assets And Images

## Purpose

Define how images and other media are sourced, stored, documented, and safely used.

## What Done Looks Like

- All images are stored locally under the project public assets path.
- Each image has a source record, rights basis, usage note, and alt text.
- Unclear or restricted assets are replaced with original visuals.
- The page can ship without legal ambiguity around visual assets.
- The visuals contribute to pacing so text-heavy beats feel lighter to read.
- The asset set supports full-bleed backgrounds, split-layout media, and at least one data or map graphic.
- Candidate images staged under `docs/assets/` can be reviewed and promoted into the shipped asset set when they better match a slide's story beat than the current placeholder.

## Constraints

- Prefer this source order: original project visuals, clearly licensed public assets, then Riot-policy-permitted assets only when they remain noncommercial and are documented accordingly.
- Do not hotlink production images.
- Track every asset in an inventory file.
- Favor original non-infringing visuals if rights are uncertain.
- `docs/assets/` is a staging area for candidate backgrounds, not the final production asset path.
- Do not use Riot logos or trademarks as decorative branding unless a written permission path is documented.
- If Riot-policy-permitted assets are used, include the required fan-project notice in the final site contract.
- A shared fallback background, including the staged logo image if approved, may be used temporarily on weaker slides while slide-specific imagery is still being curated.

## Non-Goals

- No scraping arbitrary images.
- No reliance on copyrighted art with unclear terms.
- No dependence on random fan uploads or wallpaper sites.

## Acceptance Checks

- Every shipped image appears in the inventory.
- Every image has descriptive alt text.
- The page remains complete even if some slides use abstract or original visuals instead of branded media.
- No asset in the repo lacks a usage note and rights note.
- Every image-led slide uses either a slide-specific approved background or a documented temporary fallback background with a stated reason.
- The page includes visual support across the opening, middle beats, and closing beats rather than isolating imagery to one panel.