import type { PageDocument, PageSlide } from "../../lib/content/repository";

import Image from "next/image";

import { withBasePath } from "../../lib/paths";
import { MarkdownRenderer } from "../markdown/MarkdownRenderer";
import { Reveal } from "../motion/Reveal";
import { getArtworkForKey } from "../../lib/section-artwork";

type PresentationLayoutProps = {
  page: PageDocument;
};

export function PresentationLayout({ page }: PresentationLayoutProps) {
  const firstYear = page.timeline.at(0)?.year;
  const lastYear = page.timeline.at(-1)?.year;

  return (
    <main className="presentation-page">
      <div className="presentation-shell">
        <nav className="presentation-progress" aria-label="Presentation progress">
          <p className="eyebrow">Slide Map</p>
          <h2 className="presentation-progress__title">League history in twelve beats</h2>
          <p className="presentation-progress__summary">
            {page.slides.length} slides from {firstYear} to {lastYear}.
          </p>

          <ol className="presentation-progress__list">
            {page.slides.map((slide, index) => (
              <li key={slide.slug}>
                <a className="presentation-progress__link" href={`#slide-${slide.slug}`}>
                  <span className="presentation-progress__index">{formatSlideIndex(index)}</span>
                  <span className="presentation-progress__label">{slide.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="presentation-track">
          {page.slides.map((slide, index) => (
            <PresentationSlideSection key={slide.slug} index={index} page={page} slide={slide} />
          ))}
        </div>
      </div>
    </main>
  );
}

type PresentationSlideSectionProps = {
  page: PageDocument;
  slide: PageSlide;
  index: number;
};

function PresentationSlideSection({ page, slide, index }: PresentationSlideSectionProps) {
  const artwork = getArtworkForKey(slide.media.assetKey);
  const slideId = `slide-${slide.slug}`;
  const slideClasses = [
    "presentation-slide",
    `presentation-slide--${slide.type}`,
    shouldReverseSlide(slide, index) ? "presentation-slide--reverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      aria-labelledby={`${slideId}-title`}
      className={slideClasses}
      id={slideId}
    >
      <div className="presentation-slide__stage">
        <Reveal className="presentation-slide__panel" delayMs={40}>
          <div className="presentation-slide__panel-surface">
            <div className="presentation-slide__meta-row">
              <p className="eyebrow">{slide.eyebrow}</p>
              <div className="presentation-slide__chips">
                <span className="presentation-slide__chip">{formatSlideIndex(index)}</span>
                <span className="presentation-slide__chip">{slide.year}</span>
              </div>
            </div>

            {slide.type === "opening" ? (
              <h1 id={`${slideId}-title`} className="presentation-slide__title presentation-slide__title--hero">
                {slide.title}
              </h1>
            ) : (
              <h2 id={`${slideId}-title`} className="presentation-slide__title">
                {slide.title}
              </h2>
            )}

            <p className="presentation-slide__takeaway">{slide.keyTakeaway}</p>
            <MarkdownRenderer markdown={slide.markdown} />
            {renderSlideSupplement(page, slide)}
          </div>
        </Reveal>

        <Reveal className="presentation-slide__media" delayMs={100}>
          <figure className="presentation-slide__media-frame">
            <Image
              alt={slide.media.alt}
              className={`presentation-slide__image presentation-slide__image--${artwork.motionPreset}`}
              height={960}
              src={withBasePath(artwork.src)}
              style={{ objectPosition: artwork.objectPosition }}
              width={1280}
            />
            <div aria-hidden="true" className="presentation-slide__media-scrim" />
            <figcaption className="presentation-slide__media-caption">
              <span className="meta-label">Visual beat</span>
              <p>{slide.keyTakeaway}</p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

function renderSlideSupplement(page: PageDocument, slide: PageSlide) {
  if (slide.type === "opening") {
    return (
      <div className="presentation-slide__supplement presentation-slide__supplement--stats">
        <div>
          <span className="meta-label">Narrative span</span>
          <p>
            {page.timeline.at(0)?.year} to {page.timeline.at(-1)?.year}
          </p>
        </div>
        <div>
          <span className="meta-label">Story scale</span>
          <p>{page.slides.length} visual beats</p>
        </div>
      </div>
    );
  }

  if (slide.type === "timeline" || slide.type === "closing") {
    return (
      <ol className="presentation-slide__timeline">
        {page.timeline.map((entry) => (
          <li className="presentation-slide__timeline-item" key={`${entry.year}-${entry.label}`}>
            <span>{entry.year}</span>
            <p>{entry.label}</p>
          </li>
        ))}
      </ol>
    );
  }

  return null;
}

function formatSlideIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function shouldReverseSlide(slide: PageSlide, index: number) {
  if (slide.type === "opening" || slide.type === "timeline" || slide.type === "closing") {
    return false;
  }

  return index % 2 === 1;
}
