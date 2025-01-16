import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SERVER_HOST_PROTOCOL: process.env.SERVER_HOST_PROTOCOL,
    SERVER_HOST: process.env.SERVER_HOST,
    API_URL: process.env.API_URL,
  }
};

export default nextConfig;
