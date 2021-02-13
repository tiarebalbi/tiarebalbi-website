import React from 'react';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { gql } from '@apollo/client';
import { InlineShareButtons } from 'sharethis-reactjs';


import PageTitle from '../../components/PageTitle';
import Content from '../../components/assets/Content';
import { client } from '../../lib/graphql';

import styles from '../../styles/pages/Article.module.css';
import BlogCard from '../../components/BlogCard';

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
    `,
  });

  if (response.data.blog_post === null) {
    return {
      notFound: true,
    };
  }

  const similarPosts = await client.query({
    query: gql`
    {
      allBlog_posts(similar: {documentId: "${response?.data?.blog_post?._meta.id}", max:3}, sortBy: created_date_DESC) {
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
    `,
  });
  const similarPost = similarPosts.data.allBlog_posts.edges || [];

  return {
    props: {
      post: response?.data?.blog_post,
      similar: similarPost,
    },
  };
}

export default function Article({ post, similar }) {
  return (
    <section id='article'>
      <PageTitle
        title={post?.title[0]?.text}
        slogan={post?.slogan[0]?.text}
        date={post?.created_date} />
      <NextSeo
        openGraph={{
          type: 'article',
          url: `https://tiarebalbi.com/article/${post?._meta?.uid}`,
          title: post?.title[0]?.text,
          description: post?.slogan[0]?.text,
          article: {
            publishedTime: post?.created_date,
            modifiedTime: post?.created_date,
            section: 'Blog',
            authors: [
              '@tiarebalbi',
            ],
          },
          images: [
            {
              url: post.media.url,
              width: 800,
              height: 600,
              alt: post?.title[0]?.text,
            },
          ],
        }}
      />
      <div className='container'>
        <div className='ro mb-5'>
          {post.media.url && (
            <div className={styles.imageRow}>
              <Image
                src={post.media.url}
                layout='fill'
                objectPosition='center'
                objectFit='cover'
                quality={100}
              />
            </div>
          )}
        </div>
        <div className='row'>
          <div className='col-12'>
            {post.content && post.content.map((content, index) => (
              <Content key={index} details={content} />
            ))}
          </div>
        </div>
        <div className='row mb-5'>
          <div className={`${styles.shareBar} col-12`}>
            <InlineShareButtons
              config={{
                alignment: 'center',  // alignment of buttons (left, center, right)
                color: 'social',      // set the color of buttons (social, white)
                enabled: true,        // show/hide buttons (true, false)
                font_size: 16,        // font size for the buttons
                labels: 'cta',        // button labels (cta, counts, null)
                language: 'en',       // which language to use (see LANGUAGES)
                networks: [           // which networks to include (see SHARING NETWORKS)
                  'whatsapp',
                  'linkedin',
                  'messenger',
                  'facebook',
                  'twitter',
                ],
                padding: 12,          // padding within buttons (INTEGER)
                radius: 4,            // the corner radius on each button (INTEGER)
                show_total: true,
                size: 40,             // the size of each button (INTEGER)

                username: 'tiarebalbi', // (only for twitter sharing)
              }}
            />
          </div>
        </div>
        <div className="row">
          {similar && similar.map(post => (
            <BlogCard
              key={post.node?._meta?.uid}
              title={post.node.title[0].text}
              url={post.node.media?.url}
              uid={post.node?._meta?.uid} />
          ))}
        </div>
      </div>
    </section>
  );
}
