import '../styles/globals.css';
import '../styles/flexboxgrid.css';

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
        <Script>
          {`
            !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1545960279561693');
              fbq('track', 'PageView');  
          `}
        </Script>
      </Head>
      <main className={styles.containerHolder}>
        <noscript>
          <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1545960279561693&ev=PageView&noscript=1" />
        </noscript>
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
