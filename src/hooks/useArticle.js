import { useEffect, useState } from 'react';
import useLoading from './useLoading';
import useArticles from './useArticles';

const useArticle = slug => {
  const baseUrl = '/md/';
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useLoading(false);
  const [data] = useArticles(0);

  useEffect(() => {
    async function fetchData() {
      // Start the request
      setLoading(true);

      try {
        const response = await fetch(`${baseUrl}${slug}.md`);
        const content = await response.text();

        const definition = data.articles.find(item => item.slug === slug);
        const related = data.articles
          .filter(item => item.slug !== slug)
          .filter(item => item.category !== definition.category)
          .splice(0, 3);

        if (definition === undefined) {
        }

        setLoading(false);
        setArticle({ definition, content, related });
      } catch (e) {
        setLoading(false);
      }
    }

    fetchData().then();
  }, [slug, setLoading, data]);

  return [article, loading];
};

export default useArticle;
