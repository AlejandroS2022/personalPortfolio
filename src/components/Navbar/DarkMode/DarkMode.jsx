import DarkModeSwitch from './Switch';
import useDarkMode from '../../../hooks/useDarkMode';

const DarkMode = () => {
  const { darkMode, toggleMode } = useDarkMode();

  return (
    <div className="flex justify-center items-center">
      <DarkModeSwitch checked={darkMode} onChange={toggleMode} />
    </div>
  );
};

export default DarkMode;
