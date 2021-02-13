import React from 'react';
import Image from 'next/image';
import { gql } from '@apollo/client';

import PageTitle from '../../components/PageTitle';
import { client } from '../../lib/graphql';

import styles from '../../styles/pages/Article.module.css';
import { NextSeo } from 'next-seo';

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

  return {
    props: {
      post: response?.data?.blog_post,
    },
  };
}

export default function Article({ post }) {
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
          <div className='col-12'>Content</div>
        </div>
      </div>
    </section>
  );
}
