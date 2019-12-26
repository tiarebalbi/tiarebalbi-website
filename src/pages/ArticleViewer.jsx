import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet/es/Helmet';
import useArticle from '../hooks/useArticle';

const Articles = () => {
  const { slug } = useParams();
  const { article, loading } = useArticle(slug);

  console.log(slug, article, loading);

  return (
    <div>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <span>View {slug}</span>
    </div>
  );
};

export default Articles;
