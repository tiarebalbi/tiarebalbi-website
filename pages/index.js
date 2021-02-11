import React from 'react';
import Head from 'next/head';
import { useTitle } from '../lib/title';

export default function Home() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>{useTitle('Home Page')}</title>
      </Head>
      <main>
        <h1 className='title'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
