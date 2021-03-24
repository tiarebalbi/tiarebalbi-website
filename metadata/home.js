import { defaultPageDescription } from '../lib/seo';
import { useTitle } from '../lib/title';
import { imageObjectLogo, mainWebSite, personSchema } from './general';

export const jsonLdProps = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    personSchema,
    mainWebSite,
    imageObjectLogo,
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
      potentialAction: [
        {
          '@type': 'ReadAction',
          target: ['https://tiarebalbi.com/', 'https://tiarebalbi.com/blog/']
        }
      ]
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
});

export const nameProps = {
  description: defaultPageDescription,
  keywords:
    'software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@tiarebalbi',
  'twitter:label1': 'Reading time',
  'twitter:data1': '6 minutes'
};

const headerProps = {
  'article:publisher': 'https://github.com/tiarebalbi',
  'og:locale': 'en_US',
  'og:type': 'website',
  'og:title': useTitle('Software Engineer'),
  'og:description': defaultPageDescription,
  'og:url': 'https://tiarebalbi.com/',
  'og:site_name': useTitle('Software Engineer'),
  'og:image': 'https://tiarebalbi.com/images/icons/icon-512x512.png'
};
export default headerProps;
