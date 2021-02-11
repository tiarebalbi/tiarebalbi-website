import '../styles/globals.css';
import '../styles/flexboxgrid.css';

import React from 'react';
import Head from 'next/head';

import GoogleAnalytics from '../components/GoogleAnalytics';
import { useTitle } from '../lib/title';

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
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default AppLoader;
