import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../features/stores/darkMode/darkModeSlice';

const useDarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const toggleMode = () => {
    dispatch(toggleDarkMode());
  };

  const setMode = (mode) => {
    dispatch(setDarkMode(mode));
  };

  return { darkMode, toggleMode, setMode };
};

export default useDarkMode;
