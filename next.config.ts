import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "e464njnw1j.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
