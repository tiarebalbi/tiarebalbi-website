import { useEffect, useState } from 'react';
import useLoading from './useLoading';

const useArticles = (limit = 0) => {
  const ENDPOINT = '/articles.json';
  const [data, setData] = useState({
    error: undefined,
    articles: [],
  });
  const [loading, setLoading] = useLoading(false);

  useEffect(() => {
    async function fetchData() {
      // Start the request
      setLoading(true);

      try {
        const response = await fetch(ENDPOINT);
        const content = await response.json();
        const articles = limit > 0 ? content.articles.slice(0, limit) : content.articles;

        setLoading(false);
        setData({
          error: undefined,
          articles,
        });
      } catch (e) {
        setData({
          error: e.message,
          articles: [],
        });
        setLoading(false);
      }
    }

    fetchData().then();
  }, [limit, setLoading]);

  return [data, loading];
};

export default useArticles;