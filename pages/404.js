import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/10', undefined, { shallow: true })
  }, [router])

  return <div />;
};

export default Custom404;
