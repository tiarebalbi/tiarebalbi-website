import React from 'react';
import Head from 'next/head';
import { gql } from '@apollo/client';

import { client } from '../lib/graphql';
import { useTitle } from '../lib/title';
import PageTitle from '../components/PageTitle';
import BlogCard from '../components/BlogCard';
import { NextSeo } from 'next-seo';

export async function getServerSideProps() {
  const response = await client.query({
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
  });

  return {
    props: {
      posts: response?.data?.allBlog_posts?.edges
    }
  };
}

export default function Articles({ posts }) {
  const slogan =
    'I don’t just design and develop. Sometimes I also write down words. Here I share my insights and findings from my daily study.';
  return (
    <div className="container-fluid">
      <Head>
        <title>{useTitle('Articles')}</title>
      </Head>
      <section className="container">
        <PageTitle title="Blog" slogan={slogan} />
        <NextSeo
          openGraph={{
            type: 'website',
            url: `https://tiarebalbi.com/articles`,
            title: 'Blog',
            description: slogan,
            images: [
              {
                url: 'https://tiarebalbi.com/images/about-me.jpg',
                width: 800,
                height: 600,
                alt: 'Tiarê Balbi Bonamini'
              }
            ]
          }}
        />
        <div className="row">
          {posts &&
            posts.map((post) => (
              <BlogCard
                key={post.node?._meta?.uid}
                title={post.node.title[0].text}
                date={post.node.created_date}
                url={post.node.media?.url}
                uid={post.node?._meta?.uid}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
