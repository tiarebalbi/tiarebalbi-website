import * as React from 'react';
import useArticles from '../hooks/useArticles';
import { Helmet } from 'react-helmet/es/Helmet';

const Articles = () => {
  const [data, loading] = useArticles();
  console.log(data, loading);
  return (
    <div>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      Articles
    </div>
  );
};

export default Articles;
