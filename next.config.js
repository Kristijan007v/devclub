/** @type {import('next').NextConfig} */

const MEDIA_DOMAIN = process.env.MEDIA_DOMAIN;
const AVATAR_DOMAIN = process.env.AVATAR_DOMAIN;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", MEDIA_DOMAIN, AVATAR_DOMAIN],
  },
};

module.exports = nextConfig;
