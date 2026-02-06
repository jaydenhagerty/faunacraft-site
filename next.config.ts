import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // ← makes Next.js export static HTML
  images: { unoptimized: true },  // ← required for static export if using next/image
};

export default nextConfig;
