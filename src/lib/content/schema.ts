import { z } from "zod";

export const PageSeoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const TimelineEntrySchema = z.object({
  year: z.string().min(1),
  label: z.string().min(1),
});

export const PresentationSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().min(1),
  deck: z.string().min(1),
  timeline: z.array(TimelineEntrySchema).min(1),
});

export const SlideMediaSchema = z.object({
  treatment: z.enum(["full-bleed", "split", "diagram", "timeline", "closing"]),
  assetKey: z.string().min(1),
  rightsPlan: z.enum(["original", "licensed-external", "riot-policy"]),
  backgroundMode: z.enum(["current-production", "approved-staged", "temporary-fallback"]),
  stagedSource: z.string().min(1).optional(),
  sourcePlan: z.string().min(1),
  alt: z.string().min(1),
});

export const SlideMetaSchema = z.object({
  slug: z.string().min(1),
  type: z.enum(["opening", "background", "split", "diagram", "timeline", "closing"]),
  eyebrow: z.string().min(1),
  year: z.string().min(1),
  title: z.string().min(1),
  keyTakeaway: z.string().min(1),
  textIntent: z.enum(["thesis", "context", "fact-list", "explainer", "bridge", "closing"]),
  media: SlideMediaSchema,
});

export const PageFrontmatterSchema = z.object({
  title: z.string().min(1),
  layout: z.enum(["standard", "scrolly", "presentation"]),
  summary: z.string().min(1),
  seo: PageSeoSchema,
  presentation: PresentationSchema,
  slides: z.array(SlideMetaSchema).min(8).max(12),
});

export type PageSeo = z.infer<typeof PageSeoSchema>;
export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
export type Presentation = z.infer<typeof PresentationSchema>;
export type SlideMedia = z.infer<typeof SlideMediaSchema>;
export type SlideMeta = z.infer<typeof SlideMetaSchema>;
export type PageFrontmatter = z.infer<typeof PageFrontmatterSchema>;