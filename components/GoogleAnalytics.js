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

      <script
        async
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "5k25bhyyoe");`
        }}
      />
    </Head>
  </>
);

export default GoogleAnalytics;
