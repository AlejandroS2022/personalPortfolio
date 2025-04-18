import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { IoClose } from "react-icons/io5";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';

function MobileDrawer({
  open,
  toggleDrawer,
}) {
  const DrawerList = (
    <Box className="w-65" role="presentation" onClick={toggleDrawer(false)}>
      <IoClose className="hide-drawer-button" onClick={toggleDrawer(false)} />

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton href="#home">
            <ListItemIcon>
              <HomeIcon className="drawer-icon" />
            </ListItemIcon>
            <ListItemText className="drawer-text" primary="Home" disableTypography />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#projects">
            <ListItemIcon>
              <WorkIcon className="drawer-icon" />
            </ListItemIcon>
            <ListItemText className="drawer-text" primary="Projects" disableTypography />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#about">
            <ListItemIcon>
              <PersonIcon className="drawer-icon" />
            </ListItemIcon>
            <ListItemText className="drawer-text" primary="About Me" disableTypography />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="#contact">
            <ListItemIcon>
              <PhoneIcon className="drawer-icon" />
            </ListItemIcon>
            <ListItemText className="drawer-text" primary="Contact Me" disableTypography />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default MobileDrawer
