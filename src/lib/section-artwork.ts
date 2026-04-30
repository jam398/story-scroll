export type SectionArtwork = {
  src: string;
  alt: string;
  objectPosition: string;
  motionPreset: "float" | "drift-left" | "drift-right" | "lift";
};

const artworkByKey: Record<string, SectionArtwork> = {
  "hero-rift": {
    src: "/images/league-history/hero-rift.svg",
    alt: "Abstract magical rift landscape with gold timeline arcs and blue energy bands.",
    objectPosition: "center 42%",
    motionPreset: "float",
  },
  "big-idea": {
    src: "/images/league-history/big-idea.svg",
    alt: "Abstract studio-to-rift composition with layered gold paths and blue light gradients.",
    objectPosition: "center center",
    motionPreset: "drift-right",
  },
  "launch-2009": {
    src: "/images/league-history/launch-2009.svg",
    alt: "Abstract battlefield layout with lane-like paths, glowing objective markers, and a 2009 accent badge.",
    objectPosition: "center 38%",
    motionPreset: "drift-left",
  },
  "ranked-play": {
    src: "/images/league-history/ranked-play.svg",
    alt: "Abstract competitive ladder illustration with ascending markers and draft-board geometry.",
    objectPosition: "center 46%",
    motionPreset: "lift",
  },
  esports: {
    src: "/images/league-history/esports.svg",
    alt: "Abstract esports arena with stage lighting, crowd silhouettes, and a central trophy glow.",
    objectPosition: "center 52%",
    motionPreset: "float",
  },
  "living-game": {
    src: "/images/league-history/living-game.svg",
    alt: "Abstract patchwork grid of champion cards, map tiles, and update pulses.",
    objectPosition: "center center",
    motionPreset: "drift-left",
  },
  culture: {
    src: "/images/league-history/culture.svg",
    alt: "Abstract neon concert scene with pop-stage lighting and waveform arcs.",
    objectPosition: "center 40%",
    motionPreset: "drift-right",
  },
  runeterra: {
    src: "/images/league-history/runeterra.svg",
    alt: "Abstract split-city fantasy-tech skyline with elevated towers and undercity glow.",
    objectPosition: "center 46%",
    motionPreset: "float",
  },
  legacy: {
    src: "/images/league-history/legacy.svg",
    alt: "Abstract horizon showing an open rift, timeline trails, and a distant luminous skyline.",
    objectPosition: "center 44%",
    motionPreset: "lift",
  },
};

export function getArtworkForKey(assetKey: string): SectionArtwork {
  const artwork = artworkByKey[assetKey];

  if (!artwork) {
    throw new Error(`Unknown artwork asset key: ${assetKey}`);
  }

  return artwork;
}

export function getHeroArtwork(): SectionArtwork {
  return artworkByKey["hero-rift"];
}