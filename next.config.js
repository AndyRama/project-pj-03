/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

module.exports = {
  experimental: {
    optimizeCss: true, // Active l'optimisation CSS
  },
  // Activer la compression
  compress: true,
}

module.exports = withPlausibleProxy()(nextConfig);