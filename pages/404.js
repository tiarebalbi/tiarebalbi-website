import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Custom404 = () => (
  <>
    <Head>
      <title>Page Not Found</title>
    </Head>
    <main className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">The page you are looking for does not exist.</p>
      <Link className="text-blue-500 underline" href="/">Go back home</Link>
    </main>
  </>
);

export default Custom404;
