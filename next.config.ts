import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // fully static page: exported to ./out and served by Cloudflare as static assets
  output: "export",
  images: { unoptimized: true },
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
