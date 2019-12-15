import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'theme';
const LIGHT_NAME = 'light';
const DARK_NAME = 'dark';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(LIGHT_NAME);
  const [componentMounted, setComponentMounted] = useState(false);
  const setMode = mode => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    setTheme(mode);
  };

  const toggleTheme = useCallback(() => {
    if (theme === LIGHT_NAME) {
      setMode(DARK_NAME);
    } else {
      setMode(LIGHT_NAME);
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem(STORAGE_KEY);
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode(DARK_NAME)
      : localTheme
      ? setTheme(localTheme)
      : setMode(LIGHT_NAME);
    setComponentMounted(true);
  }, [toggleTheme]);

  return [theme, toggleTheme, componentMounted];
};
