import { defaultPageDescription } from '../lib/seo';
import { useTitle } from '../lib/title';

export const jsonLdProps = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://tiarebalbi.com/#person',
      name: 'Tiarê Balbi',
      alternateName: 'Tiarê Balbi Bonamini',
      url: 'https://tiarebalbi.com/',
      sameAs: [
        'https://github.com/tiarebalbi',
        'https://twitter.com/tiarebalbi',
        'https://www.linkedin.com/in/tiarebalbi/?originalSubdomain=ie'
      ],
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://tiarebalbi.com/#logo',
        inLanguage: 'en-US',
        url: 'https://tiarebalbi.com/images/icons/icon-72x72.png',
        width: 72,
        height: 72,
        caption: 'Tiarê Balbi'
      },
      image: { '@id': 'https://tiarebalbi.com/#logo' }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tiarebalbi.com/#website',
      url: 'https://tiarebalbi.com/',
      name: 'Rock Content - BR',
      description: 'Marketing Content',
      publisher: { '@id': 'https://tiarebalbi.com/#person' },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: 'https://tiarebalbi.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      ],
      inLanguage: 'en-US'
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://tiarebalbi.com/#primaryimage',
      inLanguage: 'en-US',
      url:
        'https://tiarebalbi.com/wp-content/uploads/sites/2/2021/02/rock-content-marketing-content.png',
      width: 635,
      height: 628
    },
    {
      '@type': 'WebPage',
      '@id': 'https://tiarebalbi.com/#webpage',
      url: 'https://tiarebalbi.com/',
      name: useTitle('Software Engineer'),
      isPartOf: { '@id': 'https://tiarebalbi.com/#website' },
      about: { '@id': 'https://tiarebalbi.com/#person' },
      primaryImageOfPage: { '@id': 'https://tiarebalbi.com/#primaryimage' },
      datePublished: '2021-02-10T17:37:40+00:00',
      dateModified: '2021-03-01T23:33:22+00:00',
      description: defaultPageDescription,
      breadcrumb: { '@id': 'https://tiarebalbi.com/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://tiarebalbi.com/'] }]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://tiarebalbi.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            '@id': 'https://tiarebalbi.com/',
            url: 'https://tiarebalbi.com/',
            name: 'Home'
          }
        }
      ]
    }
  ]
};

export default {
  description: defaultPageDescription,
  keywords:
    'software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini',
  'og:locale': 'en_US',
  'og:type': 'website',
  'og:title': useTitle('Software Engineer'),
  'og:description': defaultPageDescription,
  'og:url': 'https://tiarebalbi.com/',
  'og:site_name': useTitle('Software Engineer'),
  'article:publisher': 'https://www.facebook.com/tiare.balbi',
  'og:image': 'https://tiarebalbi.com/images/icons/icon-512x512.png',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@tiarebalbi',
  'twitter:label1': 'Reading time',
  'twitter:data1': '6 minutes'
};
