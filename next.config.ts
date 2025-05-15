import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Fixes the "next export" removal issue
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
