import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(async () => {
    await router.push('/');
  }, []);

  return <div />;
};

export default Custom404;
