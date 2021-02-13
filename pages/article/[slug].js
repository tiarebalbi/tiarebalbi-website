import React from 'react';
import Image from 'next/image';
import { gql } from '@apollo/client';

import PageTitle from '../../components/PageTitle';
import { client } from '../../lib/graphql';

import styles from '../../styles/pages/Article.module.css';

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
