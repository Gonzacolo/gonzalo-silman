import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wakeuplabs.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "hyve.com.ar",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "www.gringo.estate",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
