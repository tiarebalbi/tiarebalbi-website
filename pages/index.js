import React from 'react';
import Head from 'next/head';

import Banner from '../components/home/Banner';
import Blog from '../components/home/Blog';
import { useTitle } from '../lib/title';
import { client } from '../lib/graphql';
import { gql } from '@apollo/client';
import metadata, { jsonLdProps, nameProps } from '../metadata/home';
import { jsonLdScriptProps } from 'react-schemaorg';

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

export function reportWebVitals(metric) {
  const { id, name, label, value } = metric;
  console.log(metric);
  
  const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
      fetch('/analytics', {body, method: 'POST', keepalive: true});

  window.gtag && window.gtag('send', 'event', {
    eventCategory:
        label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default function Home(props) {
  return (
    <main className="container-fluid">
      <Head>
        <title>{useTitle('Software Engineer')}</title>
        {Object.keys(metadata).map((key) => (
          <meta property={key} key={key} content={metadata[key]} />
        ))}

        {Object.keys(nameProps).map((key) => (
          <meta name={key} key={key} content={nameProps[key]} />
        ))}
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
