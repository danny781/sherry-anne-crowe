import type { NextConfig } from "next";

const isStaticDemo = process.env.NEXT_PUBLIC_STATIC_DEMO === "true";

// NEXT_PUBLIC_STATIC_DEMO=true produces a fully static export for preview hosting
// (the /api/book-event route must be excluded from the build in that mode).
const nextConfig: NextConfig = isStaticDemo
  ? { output: "export", images: { unoptimized: true }, trailingSlash: true }
  : {};

export default nextConfig;
