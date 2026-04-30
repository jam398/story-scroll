import type { PageSlide } from "../../lib/content/repository";

import Image from "next/image";

import { withBasePath } from "../../lib/paths";
import { MarkdownRenderer } from "../markdown/MarkdownRenderer";
import { Reveal } from "../motion/Reveal";
import { Card } from "../ui/Card";
import { SectionShell } from "../ui/SectionShell";
import { getArtworkForKey } from "../../lib/section-artwork";

type StorySectionProps = {
  section: PageSlide;
  index: number;
};

export function StorySection({ section, index }: StorySectionProps) {
  const artwork = getArtworkForKey(section.media.assetKey);

  return (
    <SectionShell id={section.slug} eyebrow={section.eyebrow} year={section.year} title={section.title}>
      <div className="story-shell">
        <p className="story-shell__index">0{index + 1}</p>

        <Reveal className="story-shell__artwork-wrap" delayMs={40 * (index + 1)}>
          <Card className="story-shell__artwork-card">
            <Image
              alt={section.media.alt}
              className="story-shell__artwork"
              height={720}
              src={withBasePath(artwork.src)}
              width={960}
            />
          </Card>
        </Reveal>

        <div className="story-shell__copy">
          <Card className="story-shell__insight" tone="accent">
            <p className="meta-label">Key takeaway</p>
            <p>{section.keyTakeaway}</p>
          </Card>

          <MarkdownRenderer markdown={section.markdown} />
        </div>

      </div>
    </SectionShell>
  );
}