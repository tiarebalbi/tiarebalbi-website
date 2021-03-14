import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { defaultPageDescription } from '../lib/seo';

class RootDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.png" rel="icon" />
          <meta content={defaultPageDescription} name="description" />
          <meta
            content="software development engineer, software architecture, blog, software and engineering, developer, code, scala, kotlin, java, cloud platform, cloud software, cloud native, tiare, tiare balbi, tiare balbi bonamini"
            name="keywords"
          />
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
