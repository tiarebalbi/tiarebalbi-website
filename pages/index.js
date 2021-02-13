import React from 'react';
import Head from 'next/head';

import Banner from '../components/home/Banner';
import Blog from '../components/home/Blog';
import { useTitle } from '../lib/title';

export default function Home() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>{useTitle('Home Page')}</title>
      </Head>
      <section className='container'>
        <Banner />
        <Blog />
      </section>
    </div>
  );
}
