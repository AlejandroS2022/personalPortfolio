import { useEffect } from 'react';
import useDarkMode from './useDarkMode';

const useLocalStorage = () => {
  const { darkMode, setMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (savedDarkMode !== null) {
      setMode(savedDarkMode);
    }
  }, [setMode]);
};

export default useLocalStorage;
