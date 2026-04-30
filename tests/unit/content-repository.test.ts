import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";

import { afterEach, describe, expect, it } from "vitest";

import { loadLeagueHistoryPage, parsePageFile } from "../../src/lib/content/repository";

const tempDirectories: string[] = [];

describe("content repository", () => {
  afterEach(async () => {
    await Promise.all(tempDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
  });

  it("loads the League history page from the repository content directory", async () => {
    const page = await loadLeagueHistoryPage();

    expect(page.slug).toBe("league-history");
    expect(page.frontmatter.layout).toBe("presentation");
    expect(page.timeline).toHaveLength(8);
    expect(page.slides).toHaveLength(9);
    expect(page.openingSlide.title).toBe("From the Rift to the World");
    expect(page.openingSlide.media.rightsPlan).toBe("riot-policy");
    expect(page.openingSlide.media.backgroundMode).toBe("approved-staged");
    expect(page.storySlides[0]?.title).toBe("A Game Built to Keep Evolving");
    expect(page.storySlides[0]?.media.rightsPlan).toBe("riot-policy");
    expect(page.storySlides[0]?.media.backgroundMode).toBe("approved-staged");
    expect(page.storySlides[1]?.title).toBe("Welcome to the Rift");
    expect(page.storySlides[0]?.markdown).toContain("Riot Games was founded in 2006");
    expect(page.storySlides[1]?.media.backgroundMode).toBe("approved-staged");
    expect(page.storySlides[1]?.media.rightsPlan).toBe("riot-policy");
    expect(page.storySlides[2]?.media.backgroundMode).toBe("approved-staged");
    expect(page.storySlides[2]?.media.rightsPlan).toBe("riot-policy");
    expect(page.storySlides[3]?.media.backgroundMode).toBe("approved-staged");
    expect(page.storySlides[5]?.media.backgroundMode).toBe("approved-staged");
    expect(page.closingSlide.title).toBe("The Rift Is Still Open");
    expect(page.closingSlide.media.rightsPlan).toBe("riot-policy");
    expect(page.closingSlide.media.backgroundMode).toBe("approved-staged");
  });

  it("rejects invalid frontmatter with a clear error", async () => {
    const filePath = await writeTempContent(`---
title: Broken Page
layout: scrolly
summary: Missing required nested content.
seo:
  title: Broken
  description: Broken
presentation:
  eyebrow: Broken
  title: Broken
  subtitle: Broken
  deck: Broken
  timeline: []
slides: []
---
Only body text.
`);

    await expect(parsePageFile(filePath, "broken-page")).rejects.toThrow(/Invalid frontmatter/);
  });

  it("rejects missing content files", async () => {
    await expect(parsePageFile(join(tmpdir(), "definitely-missing-page.md"), "missing-page")).rejects.toThrow(
      /Content file not found/,
    );
  });

  it("rejects mismatched slide metadata and markdown sections", async () => {
    const filePath = await writeTempContent(`---
title: Slide Count Problem
layout: scrolly
summary: Slide metadata does not match the markdown body.
seo:
  title: Count Problem
  description: Count Problem
presentation:
  eyebrow: Test
  title: Count Problem
  subtitle: Count Problem
  deck: Count Problem
  timeline:
    - year: "2000"
      label: One marker.
slides:
  - slug: opening-slide
    type: opening
    eyebrow: Test
    year: "2000"
    title: Opening Slide
    keyTakeaway: One slide expected.
    textIntent: thesis
    media:
      treatment: full-bleed
      assetKey: hero-rift
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: closing-slide
    type: background
    eyebrow: Test
    year: "2001"
    title: Slide Two
    keyTakeaway: Slide two expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-three
    type: background
    eyebrow: Test
    year: "2002"
    title: Slide Three
    keyTakeaway: Slide three expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-four
    type: background
    eyebrow: Test
    year: "2003"
    title: Slide Four
    keyTakeaway: Slide four expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-five
    type: background
    eyebrow: Test
    year: "2004"
    title: Slide Five
    keyTakeaway: Slide five expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-six
    type: background
    eyebrow: Test
    year: "2005"
    title: Slide Six
    keyTakeaway: Slide six expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-seven
    type: background
    eyebrow: Test
    year: "2006"
    title: Slide Seven
    keyTakeaway: Slide seven expected.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-eight
    type: closing
    eyebrow: Test
    year: "2007"
    title: Closing Slide
    keyTakeaway: Closing slide expected.
    textIntent: closing
    media:
      treatment: closing
      assetKey: legacy
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
---
One markdown slide only.
`);

    await expect(parsePageFile(filePath, "slide-count-problem")).rejects.toThrow(/Content slide mismatch/);
  });

  it("rejects unsupported slide types with a clear error", async () => {
    const filePath = await writeTempContent(`---
title: Unsupported Slide Type
layout: scrolly
summary: Invalid slide type should fail validation.
seo:
  title: Unsupported Slide Type
  description: Unsupported Slide Type
presentation:
  eyebrow: Test
  title: Unsupported Slide Type
  subtitle: Unsupported Slide Type
  deck: Unsupported Slide Type
  timeline:
    - year: "2000"
      label: One marker.
slides:
  - slug: opening-slide
    type: opening
    eyebrow: Test
    year: "2000"
    title: Opening Slide
    keyTakeaway: Opening slide.
    textIntent: thesis
    media:
      treatment: full-bleed
      assetKey: hero-rift
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: bad-slide
    type: gallery
    eyebrow: Test
    year: "2001"
    title: Bad Slide
    keyTakeaway: Bad slide.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-three
    type: background
    eyebrow: Test
    year: "2002"
    title: Slide Three
    keyTakeaway: Slide three.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-four
    type: background
    eyebrow: Test
    year: "2003"
    title: Slide Four
    keyTakeaway: Slide four.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-five
    type: background
    eyebrow: Test
    year: "2004"
    title: Slide Five
    keyTakeaway: Slide five.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-six
    type: background
    eyebrow: Test
    year: "2005"
    title: Slide Six
    keyTakeaway: Slide six.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: slide-seven
    type: background
    eyebrow: Test
    year: "2006"
    title: Slide Seven
    keyTakeaway: Slide seven.
    textIntent: context
    media:
      treatment: split
      assetKey: big-idea
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
  - slug: closing-slide
    type: closing
    eyebrow: Test
    year: "2007"
    title: Closing Slide
    keyTakeaway: Closing slide.
    textIntent: closing
    media:
      treatment: closing
      assetKey: legacy
      rightsPlan: original
      backgroundMode: current-production
      sourcePlan: Original placeholder.
      alt: Placeholder art.
---
Opening markdown.

---

Bad markdown.

---

Closing markdown.
`);

    await expect(parsePageFile(filePath, "unsupported-slide-type")).rejects.toThrow(/Invalid frontmatter/);
  });
});

async function writeTempContent(content: string) {
  const directory = await mkdtemp(join(tmpdir(), "scroll-telling-content-"));
  tempDirectories.push(directory);

  const filePath = join(directory, "page.md");
  await writeFile(filePath, content, "utf8");

  return filePath;
}