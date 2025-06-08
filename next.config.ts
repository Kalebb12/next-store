import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
              {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                // pathname: '/seed/**',
                search: '',
              },
            ],
    },
};

export default nextConfig;
