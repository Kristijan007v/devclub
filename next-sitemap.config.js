/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.devclub.blog/",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};

module.exports = config;
