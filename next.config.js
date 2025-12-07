/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  output: 'standalone',
  
  outputFileTracingExcludes: {
    '*': [
      './public/images/**/*',
      './public/videos/**/*',
      './public/fonts/**/*',
    ],
  },
  
  experimental: {
    // optimizeCss: true, // Désactivé temporairement
  },
  
  compress: true,
  productionBrowserSourceMaps: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = withPlausibleProxy()(nextConfig);