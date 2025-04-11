import SidebarButton from './Button/SidebarButton';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';

import '../../assets/styles/Sidebar/sidebar.css'

function Sidebar() {
  return (
    <>
      <div className="fixed flex h-full z-10">
        <div className="sidebar-main">
          <SidebarButton href="#home" tooltip="Home" icon={HomeIcon} />
          <SidebarButton href="#projects" tooltip="Projects" icon={WorkIcon} />
          <SidebarButton href="#about" tooltip="About Me" icon={PersonIcon} />
          <SidebarButton href="#contact" tooltip="Contact Me" icon={PhoneIcon} />
        </div>
        
      </div>
    </>
  )
}

export default Sidebar
