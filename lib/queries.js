import { gql } from '@apollo/client';

export const allBlogPostsQuery = {
  query: gql`
    {
      allBlog_posts(tags: "blog", sortBy: created_date_DESC) {
        edges {
          node {
            title
            created_date
            media
            _meta {
              uid
            }
          }
        }
      }
    }
  `
};
