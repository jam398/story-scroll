import { basename, join } from "node:path";
import { readFile } from "node:fs/promises";

import matter from "gray-matter";

import { PageFrontmatterSchema, type PageFrontmatter, type SlideMeta, type TimelineEntry } from "./schema";

const SLIDE_SEPARATOR = /\r?\n---\r?\n/g;

export type PageSlide = SlideMeta & {
  markdown: string;
};

export type PageDocument = {
  slug: string;
  sourcePath: string;
  frontmatter: PageFrontmatter;
  timeline: TimelineEntry[];
  openingSlide: PageSlide;
  storySlides: PageSlide[];
  closingSlide: PageSlide;
  slides: PageSlide[];
};

export function resolveContentPath(slug: string) {
  return join(process.cwd(), "content", `${slug}.md`);
}

export async function loadLeagueHistoryPage() {
  return loadPage("league-history");
}

export async function loadPage(slug: string, filePath = resolveContentPath(slug)) {
  return parsePageFile(filePath, slug);
}

export async function parsePageFile(filePath: string, slug = basename(filePath, ".md")) {
  const source = await readContentFile(filePath);
  const parsed = matter(source);

  const frontmatter = PageFrontmatterSchema.parse(parsed.data, {
    error: (issue) => `Invalid frontmatter: ${issue.message}`,
  });

  const slideMarkdown = splitSlides(parsed.content);

  if (slideMarkdown.length !== frontmatter.slides.length) {
    throw new Error(
      `Content slide mismatch for "${slug}": frontmatter defines ${frontmatter.slides.length} slides but markdown contains ${slideMarkdown.length}.`,
    );
  }

  const slides = frontmatter.slides.map((slide, index) => ({
    ...slide,
    markdown: slideMarkdown[index],
  }));

  const openingSlide = slides[0];
  const closingSlide = slides.at(-1);

  if (!openingSlide || openingSlide.type !== "opening") {
    throw new Error(`Content slide order mismatch for "${slug}": the first slide must use the opening type.`);
  }

  if (!closingSlide || closingSlide.type !== "closing") {
    throw new Error(`Content slide order mismatch for "${slug}": the last slide must use the closing type.`);
  }

  return {
    slug,
    sourcePath: filePath,
    frontmatter,
    timeline: frontmatter.presentation.timeline,
    openingSlide,
    storySlides: slides.slice(1, -1),
    closingSlide,
    slides,
  } satisfies PageDocument;
}

async function readContentFile(filePath: string) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (isNodeError(error) && error.code === "ENOENT") {
      throw new Error(`Content file not found: ${filePath}`);
    }

    throw error;
  }
}

function splitSlides(content: string) {
  return content
    .split(SLIDE_SEPARATOR)
    .map((slide) => slide.trim())
    .filter((slide) => slide.length > 0);
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error;
}