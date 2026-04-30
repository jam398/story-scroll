import type { PageDocument } from "../../lib/content/repository";

import { Card } from "../ui/Card";
import { PresentationLayout } from "./PresentationLayout";
import { ScrollytellingLayout } from "./ScrollytellingLayout";

type PageLayoutFactoryProps = {
  page: PageDocument;
};

export function PageLayoutFactory({ page }: PageLayoutFactoryProps) {
  if (page.frontmatter.layout === "presentation") {
    return <PresentationLayout page={page} />;
  }

  if (page.frontmatter.layout === "scrolly") {
    return <ScrollytellingLayout page={page} />;
  }

  return <StandardLayout page={page} />;
}

function StandardLayout({ page }: PageLayoutFactoryProps) {
  return (
    <main className="standard-page">
      <Card className="standard-page__card">
        <p className="eyebrow">Standard Layout</p>
        <h1>{page.frontmatter.title}</h1>
        <p className="lead">{page.frontmatter.summary}</p>
      </Card>
    </main>
  );
}