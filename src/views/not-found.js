import React from 'react';
import Layout from '../components/page/layout';
import Head from '../components/page/head';
import Glitch from '../components/ui-kit/glitch';

const NotFound = () => {
  const header = {
    title: 'Not Found!',
    description: '404 not found.',
    keywords:
      'software engineer,java,scala,kotlin,react.js,angularjs,full stack developer,developer,coding,programming back-end,front-end,software architecture',
  };

  return (
    <Layout>
      <Head title={header.title} description={header.description} keywords={header.keywords} />
      <Glitch>404 Not Found</Glitch>
    </Layout>
  );
};

export default NotFound;
