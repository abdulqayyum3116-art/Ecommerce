import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // The original placeholder case studies were replaced by real ones.
  async redirects() {
    return ["apparel-dtc-growth", "beauty-skincare-cro", "electronics-order-automation"].map((slug) => ({
      source: `/case-studies/${slug}`,
      destination: "/case-studies",
      permanent: true,
    }));
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
