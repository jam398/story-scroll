import type { NextConfig } from "next";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(configuredBasePath
    ? {
        basePath: configuredBasePath,
        assetPrefix: configuredBasePath,
      }
    : {}),
};

export default nextConfig;