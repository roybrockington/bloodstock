import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.sound-service.eu',
      },
      {
        protocol: 'https',
        hostname: '*.soundservicelabs.com',
      },
      {
        protocol: 'https',
        hostname: '*.espguitars-distribution-soundservice.eu',
      },
    ],
  },
}

export default nextConfig;
