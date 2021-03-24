import { useTitle } from '../lib/title';
import { imageObjectLogo, mainWebSite, personSchema } from './general';

const description =
  'I don’t just design and develop. Sometimes I also write down words. Here I share my insights and findings from my daily study.';

export const jsonLdProps = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    personSchema,
    mainWebSite,
    imageObjectLogo,
    {
      '@type': 'ImageObject',
      '@id': 'https://tiarebalbi.com/articles/#primaryimage',
      inLanguage: 'en-US',
      url: 'https://tiarebalbi.com/images/about-me.jpg',
      width: 800,
      height: 533
    },
    {
      '@type': 'WebPage',
      '@id': 'https://tiarebalbi.com/articles/#webpage',
      url: 'https://tiarebalbi.com/articles',
      name: useTitle('Blog'),
      isPartOf: { '@id': 'https://tiarebalbi.com/#website' },
      about: { '@id': 'https://tiarebalbi.com/#person' },
      primaryImageOfPage: { '@id': 'https://tiarebalbi.com/articles/#primaryimage' },
      datePublished: '2021-02-10T17:37:40+00:00',
      dateModified: '2021-03-24T01:33:22+00:00',
      description: description,
      breadcrumb: { '@id': 'https://tiarebalbi.com/articles/#breadcrumb' },
      inLanguage: 'en-US',
      potentialAction: [{ '@type': 'ReadAction', target: ['https://tiarebalbi.com/articles/'] }]
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://tiarebalbi.com/articles/#breadcrumb',
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
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'WebPage',
            '@id': 'https://tiarebalbi.com/articles',
            url: 'https://tiarebalbi.com/articles',
            name: 'Blog'
          }
        }
      ]
    }
  ]
});

const headerProps = {
  description: description,
  keywords:
    'blog, articles, dev topics, software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini',
  'og:locale': 'en_US',
  'og:type': 'website',
  'og:title': useTitle('Blog'),
  'og:description': description,
  'og:url': 'https://tiarebalbi.com/articles',
  'og:site_name': useTitle('Blog'),
  'article:publisher': 'https://github.com/tiarebalbi',
  'og:image': 'https://tiarebalbi.com/images/about-me.jpg',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@tiarebalbi',
  'twitter:label1': 'Reading time',
  'twitter:data1': '6 minutes'
};
export default headerProps;
