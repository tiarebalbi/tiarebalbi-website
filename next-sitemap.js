module.exports = {
  siteUrl: 'https://tiarebalbi.com',
  generateRobotsTxt: false,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: ['https://tiarebalbi.com/server-sitemap.xml']
  }
};
