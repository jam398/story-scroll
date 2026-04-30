import type { Metadata } from "next";

import { PageLayoutFactory } from "../components/layouts/PageLayoutFactory";
import { loadLeagueHistoryPage } from "../lib/content/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await loadLeagueHistoryPage();

  return {
    title: page.frontmatter.seo.title,
    description: page.frontmatter.seo.description,
  };
}

export default async function HomePage() {
  const page = await loadLeagueHistoryPage();

  return <PageLayoutFactory page={page} />;
}