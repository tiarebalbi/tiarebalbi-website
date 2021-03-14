import '../styles/globals.css';
import '../styles/flexboxgrid.css';

import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import seo from '../lib/seo';
import { useTitle } from '../lib/title';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import styles from '../styles/AppLoader.module.css';

function AppLoader({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{useTitle('Home Page')}</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
      </Head>
      <NextSeo {...seo} />
      <main className={styles.containerHolder}>
        <div className={styles.content}>
          <PageHeader />
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
