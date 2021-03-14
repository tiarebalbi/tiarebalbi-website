import React from 'react';
import { gql } from '@apollo/client';

import { client } from '../lib/graphql';
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
    <div className='container-fluid'>
      <section className='container'>
        <PageTitle slogan={slogan} title='Blog' />
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
        <div className='row'>
          {posts &&
          posts.map((post) => (
            <BlogCard
              date={post.node.created_date}
              key={post.node?._meta?.uid}
              title={post.node.title[0].text}
              uid={post.node?._meta?.uid}
              url={post.node.media?.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
