module.exports = {
  images: {
    domains: ['images.unsplash.com', 'images.prismic.io', 'prismic-io.s3.amazonaws.com']
  },
  future: {
    webpack5: true
  },
  async redirects() {
    return [
      {
        source: '/articles/:slug*',
        destination: '/article/:slug*',
        permanent: true
      },
      {
        source: '/server-sitemap.xml',
        destination: '/sitemap.xml',
        permanent: true
      }
    ];
  }
};
