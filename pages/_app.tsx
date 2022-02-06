import React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globals.scss';

const MainApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

// noinspection JSUnusedGlobalSymbols
export default MainApp;
