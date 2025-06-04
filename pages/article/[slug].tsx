import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { gql } from '@apollo/client';
import { jsonLdScriptProps } from 'react-schemaorg';
import { InlineShareButtons } from 'sharethis-reactjs';

import PageTitle from '../../components/PageTitle';
import Content from '../../components/assets/Content';
import { client } from '../../lib/graphql';
import { formatTitle } from '../../lib/title';

import styles from '../../styles/pages/Article.module.css';
import BlogCard from '../../components/BlogCard';
import metadata, { jsonLdProps, nameProps } from '../../metadata/blogArticle';
import { allBlogPostsQuery } from '../../lib/queries';

/**
 * Generates static paths for all blog articles based on their unique slugs.
 *
 * Fetches all blog posts and constructs route parameters for static generation, enabling incremental static regeneration for new posts.
 *
 * @returns An object containing the list of paths and a `fallback` flag set to `true`.
 */
export async function getStaticPaths() {
  const response = await client.query(allBlogPostsQuery);
  const posts = response?.data?.allBlog_posts?.edges || [];

  const params = posts.map((post: any) => ({
    params: { slug: post?.node?._meta?.uid }
  }));
  console.log(2, params);
  return {
    paths: params,
    fallback: true
  };
}

/**
 * Fetches blog post data and related posts for static generation of an article page.
 *
 * Retrieves a single blog post by its slug, along with up to three similar posts based on the current post's document ID. Returns the post data, similar posts, and the current timestamp as `modifiedTime` in the props. If the post is not found, returns `notFound: true` to trigger a 404 page. Enables incremental static regeneration with a 30-second revalidation interval.
 *
 * @param params - Route parameters containing the article slug.
 * @returns An object with `props` for the article page, or `{ notFound: true }` if the post does not exist.
 */
export async function getStaticProps({ params }: { params: { slug: string } }) {
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
    },
    revalidate: 30
  };
}

export interface ArticleProps {
  post: any;
  similar: any[];
  modifiedTime: string;
}

/**
 * Renders a blog article page with SEO metadata, social sharing buttons, and a list of similar posts.
 *
 * Displays the article's title, slogan, publication date, main image, and content blocks. Generates dynamic metadata and schema.org JSON-LD for SEO. Includes social share buttons and a section of related articles.
 *
 * @param post - The blog post data to display.
 * @param similar - An array of similar blog posts to suggest.
 * @param modifiedTime - The ISO timestamp representing the last modification time of the article.
 */
export default function Article({ post, similar, modifiedTime }: ArticleProps) {
  const title = post?.title[0]?.text;
  const description = post?.slogan[0]?.text;
  const url = `https://tiarebalbi.com/article/${post?._meta?.uid}`;
  const image = post?.media?.url;

  const result = metadata(title, description, url, image);
  const namePropsResult = nameProps(title, description);

  return (
    <section id="article">
      <Head>
        <title>{formatTitle(title)}</title>
        {Object.keys(result).map((key) => (
          <meta property={key} key={key} content={result[key]} />
        ))}
        {Object.keys(namePropsResult).map((key) => (
          <meta name={key} key={key} content={namePropsResult[key]} />
        ))}
        <meta property="article:modified_time" content={modifiedTime} />
        {post && <script {...jsonLdScriptProps(jsonLdProps(post, similar) as any)} />}
      </Head>
      <PageTitle date={post?.created_date} slogan={description} title={title} />
      <div className="container">
        <div className="row mb-5">
          {post?.media?.url && (
            <div className={styles.imageRow}>
              <Image
                alt={title}
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
            {post?.content &&
              post?.content?.map((content: any, index: number) => (
                <Content details={content} key={index} />
              ))}
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
