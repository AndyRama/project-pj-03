/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  images: {
    domains: ['6bgmuvxxtethvgjd.public.blob.vercel-storage.com'],
  },
};

module.exports = withPlausibleProxy()(nextConfig);