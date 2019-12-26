import * as React from 'react';
import { useParams } from 'react-router-dom';

const Articles = () => {
  const { slug } = useParams();

  console.log(slug);

  return <span>View {slug}</span>;
};

export default Articles;
