import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/page/layout';
import Head from '../components/page/head';
import EditorFormat from '../components/ui-kit/editor-format';
import BlogTitle from '../components/ui-kit/blog-title';
/* eslint import/no-webpack-loader-syntax: off */
import Test from '!raw-loader!./../views/posts/test.md';

const Products = () => {
  const tags1 = 'software engineer,java,scala,kotlin,react.js,angularjs,full stack developer,';
  const tags2 = 'developer,coding,programming back-end,front-end,software architecture,blog,article,post';

  const header = {
    title: 'blog.',
    description: 'Technical Post as output of my studies.',
    keywords: tags1 + tags2,
  };

  return (
    <Layout>
      <Head title={header.title} description={header.description} keywords={header.keywords} />
      <BlogTitle>Blog Post Sample</BlogTitle>
      <EditorFormat>
        <ReactMarkdown source={Test} />
      </EditorFormat>
    </Layout>
  );
};

export default Products;
