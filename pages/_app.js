import '../styles/globals.css';
import '../styles/flexboxgrid.css';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';


import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import styles from '../styles/AppLoader.module.css';

function AppLoader({ Component, pageProps }) {
  const router = useRouter();
  const refLink = `https://tiarebalbi.com${router.asPath}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={refLink} />
        <link rel="shortlink" href={refLink} />
        <link rel="preconnect" href="https://tiarebalbi.com" />
        <link rel="dns-prefetch" href="https://tiarebalbi.com" />
      </Head>
      <main className={styles.containerHolder}>
        <div className={styles.content}>
          <PageHeader />
          <Analytics />
          <Component {...pageProps} />
          <Footer />
        </div>
        <div className={`${styles.gridLines} container`}>
          <div className={`${styles.rowStyle} row`}>
            <div className={`${styles.internalLine} col-2`} />
            <div className={`${styles.internalLine} col-2`} />
            <div className={`${styles.internalLine} col-2`} />
            <div className={`${styles.internalLine} col-2`} />
            <div className={`${styles.internalLine} col-2`} />
            <div className={`${styles.internalLine} col-2`} />
          </div>
        </div>
      </main>
    </>
  );
}

export default AppLoader;
