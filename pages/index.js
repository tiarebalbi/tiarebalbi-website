import React from 'react';
import Head from 'next/head';

import Banner from '../components/home/Banner';
import Projects from '../components/home/Projects';
import { useTitle } from '../lib/title';

export default function Home() {
  return (
    <div className='container-fluid'>
      <Head>
        <title>{useTitle('Home Page')}</title>
      </Head>
      <section className='container'>
        <Banner />
        
      </section>
    </div>
  );
}
