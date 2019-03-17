import React from 'react';
import Layout from '../components/page/layout';
import Head from '../components/page/head';

const Products = () => {
  const header = {
    title: 'products.',
    description: 'Products available to help you on your next endeavour or project.',
    keywords:
      'software engineer,java,scala,kotlin,react.js,angularjs,full stack developer,developer,coding,programming back-end,front-end,software architecture',
  };

  return (
    <Layout>
      <Head title={header.title} description={header.description} keywords={header.keywords} />
      Products
    </Layout>
  );
};

export default Products;
