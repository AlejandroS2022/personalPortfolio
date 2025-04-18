import { useEffect } from 'react';
import useDarkMode from './useDarkMode';

const useLocalStorage = () => {
  const { darkMode, setMode } = useDarkMode();

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

    if (savedDarkMode !== null && savedDarkMode !== darkMode) {
      setMode(savedDarkMode);
    }

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
};

export default useLocalStorage;
