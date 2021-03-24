import React from 'react';
import Head from 'next/head';

import Banner from '../components/home/Banner';
import Blog from '../components/home/Blog';
import { useTitle } from '../lib/title';
import { client } from '../lib/graphql';
import { gql } from '@apollo/client';
import metadata, { jsonLdProps } from '../metadata/home';
import { jsonLdScriptProps } from 'react-schemaorg';
import { defaultPageDescription } from '../lib/seo';

export async function getServerSideProps() {
  const response = await client.query({
    query: gql`
      {
        allBlog_posts(tags: "blog", sortBy: created_date_DESC, first: 3) {
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
  });
  return {
    props: {
      posts: response?.data?.allBlog_posts?.edges,
      modifiedTime: new Date().toISOString()
    }
  };
}

export default function Home(props) {
  return (
    <main className="container-fluid">
      <Head>
        <title>{useTitle('Software Engineer')}</title>
        {Object.keys(metadata).map((key) => (
          <meta property={key} key={key} content={metadata[key]} />
        ))}
        <meta name="description" content={defaultPageDescription} />
        <meta property="article:modified_time" content={props.modifiedTime} />
        <script {...jsonLdScriptProps(jsonLdProps())} />
      </Head>
      <section className="container">
        <Banner />
        <Blog posts={props.posts} />
      </section>
    </main>
  );
}
