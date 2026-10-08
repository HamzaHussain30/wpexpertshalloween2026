import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig(),
  // "npm run build" runs the OpenNext build, so OpenNext must call plain next here (no recursion)
  buildCommand: "next build",
};
