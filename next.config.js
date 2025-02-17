/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  images: {
    domains: ['https://res.cloudinary.com'],
  },
};

module.exports = withPlausibleProxy()(nextConfig);