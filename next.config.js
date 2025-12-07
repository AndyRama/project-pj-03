/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  // CRITIQUE: Mode standalone pour réduire la taille des fonctions
  output: 'standalone',
  
  // CRITIQUE: Exclure les fichiers publics des fonctions serverless
  outputFileTracingExcludes: {
    '*': [
      './public/images/**/*',
      './public/videos/**/*',
      './public/fonts/**/*',
    ],
  },
  
  experimental: {
    optimizeCss: true,
  },
  
  // Compression activée
  compress: true,
  
  // Pas de source maps en production
  productionBrowserSourceMaps: false,
  
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = withPlausibleProxy()(nextConfig);