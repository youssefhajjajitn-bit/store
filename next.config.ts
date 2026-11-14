import type { NextConfig } from "next";

const nextConfig = async () => ({
  output: 'standalone',
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'LuxeStyle',
  },
});

export default nextConfig;
