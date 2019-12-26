import { useEffect, useState } from 'react';
import useLoading from './useLoading';

const useArticle = slug => {
  const baseUrl = '/md/';
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useLoading(false);

  useEffect(() => {
    async function fetchData() {
      // Start the request
      setLoading(true);

      try {
        const response = await fetch(`${baseUrl}${slug}`);
        const content = await response.text();

        setLoading(false);
        setArticle(content);
      } catch (e) {
        setLoading(false);
      }
    }

    fetchData().then();
  }, [slug, setLoading, setArticle]);

  return [article, loading];
};

export default useArticle;
