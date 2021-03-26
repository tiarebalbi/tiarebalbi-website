import { getServerSideSitemap } from 'next-sitemap';
import { client } from '../../lib/graphql';
import { allBlogPostsQuery } from '../../lib/queries';

export const getServerSideProps = async (ctx) => {
  const domain = 'https://tiarebalbi.com';
  const response = await client.query(allBlogPostsQuery);

  const posts = response?.data?.allBlog_posts?.edges;

  const fields = [];

  posts.map((record) => {
    const date = record?.node?.created_date || '2021-03-26';
    fields.push({
      loc: `${domain}/articles/${record?.node?._meta?.uid}`,
      lastmod: new Date(date).toISOString(),
      priority: 0.8
    });
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function PageSiteMap() {}
