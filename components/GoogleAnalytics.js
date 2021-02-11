import React from 'react';
import Head from 'next/head';

const GoogleAnalytics = () => (
  <>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-8G0QDFHYFC" />
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());
                gtag("config", "G-8G0QDFHYFC");`
        }}
      />
    </Head>
  </>
);

export default GoogleAnalytics;
