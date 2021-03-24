import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { gql } from '@apollo/client';
import { jsonLdScriptProps } from 'react-schemaorg';
import { InlineShareButtons } from 'sharethis-reactjs';

import PageTitle from '../../components/PageTitle';
import Content from '../../components/assets/Content';
import { client } from '../../lib/graphql';
import { useTitle } from '../../lib/title';

import styles from '../../styles/pages/Article.module.css';
import BlogCard from '../../components/BlogCard';
import metadata, { jsonLdProps } from '../../metadata/blogArticle';

export async function getServerSideProps({ params }) {
  const response = await client.query({
    query: gql`
    {
      blog_post(uid: "${params?.slug}", lang:"en-gb") {
        title
        slogan
        content
        media
        created_date
        _meta{
          uid
          id
        }
      }
    }
    `
  });

  if (response.data.blog_post === null) {
    return {
      notFound: true
    };
  }

  const similarPosts = await client.query({
    query: gql`
    {
      allBlog_posts(similar: {documentId: "${response?.data?.blog_post?._meta.id}", max:3}, sortBy: created_date_DESC, first:3) {
        edges {
          node {
            title
            created_date
            media
            _meta {
              uid
              id
            }
          }
        }
      }
    }
    `
  });
  const similarPost = similarPosts.data.allBlog_posts.edges || [];

  return {
    props: {
      post: response?.data?.blog_post,
      similar: similarPost,
      modifiedTime: new Date().toISOString()
    }
  };
}

export default function Article({ post, similar, modifiedTime }) {
  const title = post?.title[0]?.text;
  const description = post?.slogan[0]?.text;
  const url = `https://tiarebalbi.com/article/${post?._meta?.uid}`;
  const image = post?.media?.url;

  const result = metadata(title, description, url, image);

  return (
    <section id="article">
      <Head>
        <title>{useTitle(title)}</title>
        {Object.keys(result).map((key) => (
          <meta property={key} key={key} content={result[key]} />
        ))}
        <meta property="article:modified_time" content={modifiedTime} />
        {post && <script {...jsonLdScriptProps(jsonLdProps(post, similar))} />}
      </Head>
      <PageTitle date={post?.created_date} slogan={description} title={title} />
      <div className="container">
        <div className="ro mb-5">
          {post.media.url && (
            <div className={styles.imageRow}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
                src={post.media.url}
              />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            {post.content &&
              post.content.map((content, index) => <Content details={content} key={index} />)}
          </div>
        </div>
        <div className="row mb-5">
          <div className={`${styles.shareBar} col-12`}>
            <InlineShareButtons
              config={{
                alignment: 'center', // alignment of buttons (left, center, right)
                color: 'social', // set the color of buttons (social, white)
                enabled: true, // show/hide buttons (true, false)
                font_size: 16, // font size for the buttons
                labels: 'cta', // button labels (cta, counts, null)
                language: 'en', // which language to use (see LANGUAGES)
                networks: [
                  // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'linkedin',
                  'messenger',
                  'facebook',
                  'twitter'
                ],
                padding: 12, // padding within buttons (INTEGER)
                radius: 4, // the corner radius on each button (INTEGER)
                show_total: true,
                size: 40, // the size of each button (INTEGER)

                username: 'tiarebalbi' // (only for twitter sharing)
              }}
            />
          </div>
        </div>
        <div className="row">
          {similar &&
            similar.map((post) => (
              <BlogCard
                key={post.node?._meta?.uid}
                title={post.node.title[0].text}
                uid={post.node?._meta?.uid}
                url={post.node.media?.url}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
