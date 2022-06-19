/** @type {import('next-sitemap').IConfig} */
export const config = {
  siteUrl: process.env.SITE_URL || "https://www.devclub.blog/",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  // ...other options
};
