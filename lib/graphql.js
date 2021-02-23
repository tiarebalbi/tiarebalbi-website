import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

const accessToken = process.env.PRISMIC_TOKEN;
export const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://tiarebalbicom.prismic.io/graphql",
    accessToken: accessToken,
  }),
  cache: new InMemoryCache(),
});
