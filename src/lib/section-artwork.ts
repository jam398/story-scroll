export type SectionArtwork = {
  src: string;
  alt: string;
  objectPosition: string;
  motionPreset: "float" | "drift-left" | "drift-right" | "lift";
};

const artworkByKey: Record<string, SectionArtwork> = {
  "hero-rift": {
    src: "/images/league-history/champions-collage.jpg",
    alt: "League of Legends champions gathered in a dramatic blue-and-gold scene.",
    objectPosition: "center 32%",
    motionPreset: "float",
  },
  "big-idea": {
    src: "/images/league-history/champions-collage.jpg",
    alt: "League of Legends champions gathered in a broad blue-and-gold scene that reads as a shared world rather than a single match.",
    objectPosition: "center 30%",
    motionPreset: "drift-right",
  },
  "launch-2009": {
    src: "/images/league-history/summoners-rift-map.jpg",
    alt: "Summoner's Rift seen from above with its opposing bases, lanes, and jungle paths.",
    objectPosition: "center center",
    motionPreset: "drift-left",
  },
  "ranked-play": {
    src: "/images/league-history/classic-roster.jpg",
    alt: "A dense spread of classic League of Legends champion portraits that suggests long-term mastery and roster knowledge.",
    objectPosition: "center 24%",
    motionPreset: "lift",
  },
  esports: {
    src: "/images/league-history/worlds-stage.jpg",
    alt: "A League of Legends Worlds stage framed by large globe imagery and arena lighting.",
    objectPosition: "center 34%",
    motionPreset: "float",
  },
  "living-game": {
    src: "/images/league-history/classic-roster.jpg",
    alt: "A dense grid of classic League of Legends champion portraits and splash-art fragments.",
    objectPosition: "center 24%",
    motionPreset: "drift-left",
  },
  culture: {
    src: "/images/league-history/champions-collage.jpg",
    alt: "League of Legends champions layered together in a dramatic promotional collage.",
    objectPosition: "center 32%",
    motionPreset: "drift-right",
  },
  runeterra: {
    src: "/images/league-history/runeterra-map.jpg",
    alt: "A stylized map of Runeterra showing multiple regions across the wider League universe.",
    objectPosition: "center center",
    motionPreset: "float",
  },
  legacy: {
    src: "/images/league-history/worlds-stage.jpg",
    alt: "A League of Legends Worlds stage framed by globe imagery and arena lighting, now used as the closing wide-scale backdrop.",
    objectPosition: "center 34%",
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