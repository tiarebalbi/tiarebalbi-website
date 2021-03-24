import { useTitle } from '../lib/title';
import { imageObjectLogo, mainWebSite, personSchema } from './general';

export const jsonLdProps = (post, similar) => {
  const title = post?.title[0]?.text;
  const description = post?.slogan[0]?.text;
  const url = `https://tiarebalbi.com/blog/${post?._meta?.uid}`;
  const similarLinks = [url];

  if (similar && similar.length > 0) {
    similar.map((link) =>
      similarLinks.push(`https://tiarebalbi.com/blog/${link?.node?._meta?.uid}`)
    );
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      mainWebSite,
      imageObjectLogo,
      {
        '@type': 'ImageObject',
        '@id': `${url}/#primaryimage`,
        inLanguage: 'en-US',
        url: post?.media?.url,
        width: 800,
        height: 600
      },
      {
        '@type': 'WebPage',
        '@id': `${url}/#webpage`,
        url: url,
        name: useTitle(title),
        isPartOf: { '@id': 'https://tiarebalbi.com/#website' },
        about: { '@id': 'https://tiarebalbi.com/#person' },
        primaryImageOfPage: { '@id': `${url}/#primaryimage` },
        datePublished: `${post['created_date']}T17:37:40+00:00`,
        dateModified: `${post['created_date']}T17:37:40+00:00`,
        description: description,
        breadcrumb: { '@id': `${url}/#breadcrumb` },
        inLanguage: 'en-US',
        potentialAction: [{ '@type': 'ReadAction', target: similarLinks }]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}/#breadcrumb`,
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
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'WebPage',
              '@id': url,
              url: url,
              name: title
            }
          }
        ]
      }
    ]
  };
};

export const nameProps = (title, description) => ({
  description: description,
  keywords:
    'blog, articles, dev topics, software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@tiarebalbi',
  'twitter:label1': 'Reading time',
  'twitter:data1': '8 minutes'
});

const headerProps = (title, description, url, image) => ({
  'og:locale': 'en_US',
  'og:type': 'website',
  'og:title': useTitle(title),
  'og:description': description,
  'og:url': url,
  'og:site_name': useTitle('Blog'),
  'article:publisher': 'https://github.com/tiarebalbi',
  'og:image': image
});
export default headerProps;
