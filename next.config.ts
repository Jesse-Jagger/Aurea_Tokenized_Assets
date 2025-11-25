import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unenamelled-merrill-vicissitudinous.ngrok-free.dev",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
