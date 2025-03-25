import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.scdn.co"], // allow images from Spotify
  },
};

export default nextConfig;
