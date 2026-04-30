import type { PageDocument } from "../../lib/content/repository";

import Image from "next/image";

import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";
import { withBasePath } from "../../lib/paths";
import { getArtworkForKey } from "../../lib/section-artwork";

type HeroSectionProps = {
  page: PageDocument;
};

export function HeroSection({ page }: HeroSectionProps) {
  const openingSlide = page.openingSlide;
  const heroArtwork = getArtworkForKey(openingSlide.media.assetKey);

  return (
    <section className="scrolly-hero" aria-labelledby="hero-title">
      <Reveal className="scrolly-hero__content" delayMs={40}>
        <p className="eyebrow">{page.frontmatter.presentation.eyebrow}</p>
        <h1 id="hero-title">{page.frontmatter.presentation.title}</h1>
        <p className="hero-subtitle">{page.frontmatter.presentation.subtitle}</p>
        <p className="lead">{page.frontmatter.presentation.deck}</p>
      </Reveal>

      <Reveal delayMs={120}>
        <Card className="scrolly-hero__summary" tone="accent">
          <div className="hero-artwork-frame">
            <Image
              alt={openingSlide.media.alt}
              className="hero-artwork"
              height={720}
              src={withBasePath(heroArtwork.src)}
              width={960}
            />
          </div>

          <p className="eyebrow">Opening beat</p>
          <p className="hero-summary">{openingSlide.keyTakeaway}</p>
          <div className="hero-summary__meta">
            <div>
              <span className="meta-label">Opening slide</span>
              <strong>{openingSlide.title}</strong>
            </div>
            <div>
              <span className="meta-label">Narrative span</span>
              <strong>{page.timeline.at(0)?.year} to {page.timeline.at(-1)?.year}</strong>
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}