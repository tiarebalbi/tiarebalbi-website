import { ApolloClient, InMemoryCache } from '@apollo/client';
import { PrismicLink } from 'apollo-link-prismic';

const accessToken = 'MC5ZQ2ZBQ2hJQUFDRUFWMGtf.77-977-977-977-9aBDvv714RWQzRnjvv73vv71RFhQlUe-_ve-_ve-_vVc8B--_ve-_ve-_vUTvv71l';
export const client = new ApolloClient({
  link: PrismicLink({
    uri: 'https://tiarebalbicom.prismic.io/graphql',
    accessToken: accessToken,
  }),
  cache: new InMemoryCache(),
});
