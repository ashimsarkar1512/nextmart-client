import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  serverActions: {
    bodySizeLimit: '5mb', // Increase this if needed
  },
};

export default nextConfig;
