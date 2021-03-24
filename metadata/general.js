export const personSchema = {
  '@type': 'Person',
  '@id': 'https://tiarebalbi.com/#person',
  name: 'Tiarê Balbi',
  alternateName: 'Tiarê Balbi Bonamini',
  jobTitle: 'Software Engineer',
  url: 'https://tiarebalbi.com/',
  sameAs: [
    'https://github.com/tiarebalbi',
    'https://twitter.com/tiarebalbi',
    'https://www.linkedin.com/in/tiarebalbi/?originalSubdomain=ie'
  ],
  image: { '@id': 'https://tiarebalbi.com/#logo' },
  workLocation: 'Dublin, Ireland',
  homeLocation: 'São Paulo, Brazil',
  nationality: { address: 'São Paulo, Brazil' }
};

export const mainWebSite = {
  '@type': 'WebSite',
  '@id': 'https://tiarebalbi.com/#website',
  url: 'https://tiarebalbi.com/',
  name: 'Tiarê Balbi',
  description: 'Software Engineer',
  publisher: { '@id': 'https://tiarebalbi.com/#person' },
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: 'https://tiarebalbi.com/articles?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  ],
  inLanguage: 'en-US'
};

export const imageObjectLogo = {
  '@type': 'ImageObject',
  '@id': 'https://tiarebalbi.com/#primaryimage',
  inLanguage: 'en-US',
  url: 'https://tiarebalbi.com/images/profile-1.jpg',
  width: 400,
  height: 400
};
