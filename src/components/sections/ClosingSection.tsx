import type { PageDocument } from "../../lib/content/repository";

import Image from "next/image";

import { withBasePath } from "../../lib/paths";
import { MarkdownRenderer } from "../markdown/MarkdownRenderer";
import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";
import { SectionShell } from "../ui/SectionShell";
import { getArtworkForKey } from "../../lib/section-artwork";

type ClosingSectionProps = {
  page: PageDocument;
};

export function ClosingSection({ page }: ClosingSectionProps) {
  const closingSlide = page.closingSlide;
  const artwork = getArtworkForKey(closingSlide.media.assetKey);

  return (
    <SectionShell
      id="closing-section"
      eyebrow="Closing"
      year={closingSlide.year}
      title={closingSlide.title}
    >
      <div className="closing-shell">
        <Reveal delayMs={80}>
          <Card className="closing-shell__card closing-shell__card--content" tone="accent">
            <div className="closing-shell__artwork-frame">
              <Image
                alt={closingSlide.media.alt}
                className="closing-shell__artwork"
                height={720}
                src={withBasePath(artwork.src)}
                width={960}
              />
            </div>
            <MarkdownRenderer markdown={closingSlide.markdown} />
          </Card>
        </Reveal>

        <Reveal delayMs={140}>
          <Card className="closing-shell__card">
            <p className="meta-label">Why it matters</p>
            <p>{closingSlide.keyTakeaway}</p>
            <div className="closing-shell__timeline">
              {page.timeline.map((entry) => (
                <div className="closing-shell__timeline-item" key={`${entry.year}-${entry.label}`}>
                  <span>{entry.year}</span>
                  <p>{entry.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}