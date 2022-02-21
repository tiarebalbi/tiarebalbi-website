import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from '@components/Layout/Header';

interface ILayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossOrigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <div className="tb-root-layout">
      <Header />
      <main>{children}</main>
    </div>
  </>
);

Layout.displayName = 'Layout';

export default Layout;
