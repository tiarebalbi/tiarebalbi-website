import '../styles/globals.css';
import '../styles/flexboxgrid.css';

import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import seo from '../lib/seo';
import { useTitle } from '../lib/title';

import PageHeader from '../components/PageHeader';

function AppLoader({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{useTitle('Home Page')}</title>
        <link rel='manifest' href='/manifest.json' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=yes'
        />
      </Head>
      <NextSeo
        {...seo}
      />
      <PageHeader />
      <Component {...pageProps} />
    </>
  );
}

export default AppLoader;
