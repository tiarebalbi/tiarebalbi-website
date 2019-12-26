import { useState } from 'react';

const useLoading = (initialState = false) => {
  const [loading, setLoading] = useState(initialState);
  return [loading, setLoading];
};

export default useLoading;
