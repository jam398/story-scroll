import type { PageDocument } from "../../lib/content/repository";

import { Card } from "../ui/Card";
import { ClosingSection } from "../sections/ClosingSection";
import { HeroSection } from "../sections/HeroSection";
import { StorySection } from "../sections/StorySection";

type ScrollytellingLayoutProps = {
  page: PageDocument;
};

export function ScrollytellingLayout({ page }: ScrollytellingLayoutProps) {
  const { storySlides, timeline } = page;

  return (
    <main className="scrolly-page">
      <HeroSection page={page} />

      <section className="scrolly-overview" aria-labelledby="timeline-title">
        <div className="panel-heading">
          <p className="eyebrow">Orientation</p>
          <h2 id="timeline-title">Timeline rhythm</h2>
        </div>

        <div className="timeline-grid">
          {timeline.map((entry) => (
            <Card className="timeline-card" key={`${entry.year}-${entry.label}`}>
              <p className="timeline-card__year">{entry.year}</p>
              <p className="timeline-card__label">{entry.label}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="scrolly-story" aria-labelledby="story-title">
        <div className="panel-heading panel-heading--wide">
          <p className="eyebrow">Story</p>
          <h2 id="story-title">From the Rift to the world</h2>
          <p className="panel-copy">
            The page now carries the full story arc from Riot&apos;s early vision through esports,
            cultural expansion, and League&apos;s continuing influence on modern live-service games.
          </p>
        </div>

        <div className="story-list">
          {storySlides.map((section, index) => (
            <StorySection key={section.slug} index={index} section={section} />
          ))}
        </div>
      </section>

      <ClosingSection page={page} />
    </main>
  );
}
