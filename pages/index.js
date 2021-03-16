import React from 'react';
import Head from 'next/head';

import Banner from '../components/home/Banner';
import Blog from '../components/home/Blog';
import { useTitle } from '../lib/title';
import { client } from '../lib/graphql';
import { gql } from '@apollo/client';
import { NextSeo } from 'next-seo';
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
      posts: response?.data?.allBlog_posts?.edges
    }
  };
}

export default function Home(props) {
  return (
    <main className="container-fluid">
      <Head>
        <title>{useTitle('Home Page')}</title>
        <meta content={defaultPageDescription} name="description" />
      </Head>
      <section className="container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: `https://tiarebalbi.com`,
            images: [
              {
                url: 'https://tiarebalbi.com/images/profile-1.jpg',
                width: 800,
                height: 600,
                alt: 'Tiarê Balbi Bonamini'
              }
            ]
          }}
        />
        <Banner />
        <Blog posts={props.posts} />
      </section>
    </main>
  );
}
