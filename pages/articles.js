import React from 'react';
import Head from 'next/head';
import { gql } from '@apollo/client';
import { jsonLdScriptProps } from 'react-schemaorg';

import { client } from '../lib/graphql';
import PageTitle from '../components/PageTitle';
import BlogCard from '../components/BlogCard';
import { useTitle } from '../lib/title';
import metadata, { jsonLdProps } from '../metadata/blog';

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
      posts: response?.data?.allBlog_posts?.edges,
      modifiedTime: new Date().toISOString()
    }
  };
}

export default function Articles({ posts, modifiedTime }) {
  const slogan =
    'I don’t just design and develop. Sometimes I also write down words. Here I share my insights and findings from my daily study.';
  const populatePost = (post) => (
    <BlogCard
      date={post.node?.created_date}
      key={post.node?._meta?.uid}
      title={post.node.title[0].text}
      uid={post.node?._meta?.uid}
      url={post.node.media?.url}
    />
  );
  return (
    <div className="container-fluid">
      <section className="container">
        <Head>
          <title>{useTitle('Blog')}</title>
          {Object.keys(metadata).map((key) => (
            <meta property={key} key={key} content={metadata[key]} />
          ))}
          <meta name="description" content={slogan} />
          <meta property="article:modified_time" content={modifiedTime} />
          <script {...jsonLdScriptProps(jsonLdProps())} />
        </Head>
        <PageTitle slogan={slogan} title="Blog" />
        <div className="row">{posts && posts.map(populatePost)}</div>
      </section>
    </div>
  );
}
