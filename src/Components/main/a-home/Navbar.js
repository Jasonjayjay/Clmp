import React, { useState } from 'react'
import Logo from "./logo.png";
import "./Navbar.css"
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HandshakeIcon from '@mui/icons-material/Handshake';
import InfoIcon from "@mui/icons-material/Info";
import ExploreIcon from '@mui/icons-material/Explore';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BusinessIcon from '@mui/icons-material/Business';
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
    {
      text: "What is CLMP? ",
      icon: <InfoIcon />,
    },
    {
      text: "What We Can Do For You",
      icon: <HandshakeIcon />,
      
    },
    {
      text: "Explore",
      icon: <ExploreIcon/>,
      
    },
    {
      text: "Pricing",
      icon: <LocalOfferIcon/>,
    },
    {
      text: "Large Enterprise?",
      icon: <BusinessIcon/>
    },
    {
      text: "Sign Up Now",
      icon: <ContentPasteIcon />, 
    },
  ];
  return (
    <div className='navbar'>
      <nav className='nav-container'>
            <img src={Logo} alt="Logo" className='logo'/>
            <ul className='navbar-items'>
              <li><a href='#' className='navbar-item'>What is CLMP?</a></li>
              <li><a href='#' className='navbar-item'>What We Can Do For You?</a></li>
              <li><a href='#' className='navbar-item'>Explore</a></li>
              <li><a href='#' className='navbar-item'>Pricing</a></li>
            </ul>
            <a href='#' className='navbar-item4'>Large Enterprise?</a>
            <button className='navbar-sign-in'>Sign up Now</button>
            <div className="navbar-menu-container">
              <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
              >
                <List>
                  {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </Box>
            </Drawer>     
      </nav> 
    </div>
  )
}

export default Navbar
