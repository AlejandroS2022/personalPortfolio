import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeSwitch = styled(Switch)(() => ({
  width: 64,
  height: 36,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 9,
    color: "#f09207",
    backgroundColor: "#fcefd9",
    transition: "0.3s ease",

    '&:hover': {
      backgroundColor: "#ffe3b3",
    },
    '&.Mui-checked': {
      color: "#c8f6f7",
      backgroundColor: "#4a4949",
      transform: "translateX(25px)",

      '&:hover': {
        backgroundColor: "#555555",
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: "#4a4949",
      },
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: "#fcefd9",
    opacity: 1,
    border: 0,
  },
}));

const CustomDarkModeSwitch = (props) => {
  return (
    <DarkModeSwitch
      {...props}
      icon={<FaSun />} // Icon for off state (moon for dark mode)
      checkedIcon={<FaMoon />} // Icon for on state (sun for light mode)
    />
  );
};

export default CustomDarkModeSwitch;
