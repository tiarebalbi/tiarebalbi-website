import * as React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet/es/Helmet';

const Articles = () => {
  const { slug } = useParams();

  console.log(slug);

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
