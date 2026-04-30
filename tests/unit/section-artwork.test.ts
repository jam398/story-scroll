import { describe, expect, it } from "vitest";

import { loadLeagueHistoryPage } from "../../src/lib/content/repository";
import { getArtworkForKey, getHeroArtwork } from "../../src/lib/section-artwork";

describe("section artwork mapping", () => {
  it("provides a local hero artwork asset with alt text", () => {
    const heroArtwork = getHeroArtwork();

    expect(heroArtwork.src).toMatch(/^\/images\/league-history\/.+\.svg$/);
    expect(heroArtwork.alt.length).toBeGreaterThan(10);
  });

  it("covers every slide placeholder asset with a local artwork mapping", async () => {
    const page = await loadLeagueHistoryPage();

    for (const slide of page.slides) {
      const artwork = getArtworkForKey(slide.media.assetKey);

      expect(artwork.src).toMatch(/^\/images\/league-history\/.+\.svg$/);
      expect(slide.media.alt.length).toBeGreaterThan(10);
    }
  });

  it("fails clearly for unknown asset keys", () => {
    expect(() => getArtworkForKey("missing-art"))
      .toThrow(/Unknown artwork asset key/);
  });
});