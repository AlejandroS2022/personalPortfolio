import { useState } from 'react';
import MobileDrawer from './Drawer/Drawer';
import DarkMode from './DarkMode/DarkMode';

import { FaBars } from "react-icons/fa6";

import '../../assets/styles/Navbar/navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <MobileDrawer open={open} toggleDrawer={toggleDrawer} />

      <div className="fixed flex w-full z-20 h-15 px-3">
        <div className="
          flex
          md:hidden
          justify-center
          items-start"
        >
          <FaBars className="navbar-button" onClick={toggleDrawer(true)} />
        </div>

        <div className="
          ml-auto
          mr-2
          my-auto"
        >
          <DarkMode />
        </div>
      </div>
    </>
  )
}

export default Navbar
