import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class RootDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.png' />
          <meta name='description'
                content='I am a software engineer who can be described as a serious enthusiast of technology, fortunate to work with one of my biggest passions: software development. Finding different ways to solve different problems.' />
          <meta name='keywords'
                content='software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini' />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
