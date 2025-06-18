/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true, // ✅ disables dynamic optimization (needed for Netlify)
    formats: ['image/avif', 'image/webp'],
    // domains: [], // only needed for external images
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
