import * as React from 'react';
import useArticles from '../hooks/useArticles';

const Articles = () => {
  const [data, loading] = useArticles();
  console.log(data, loading);
  return <span>Articles</span>;
};

export default Articles;
