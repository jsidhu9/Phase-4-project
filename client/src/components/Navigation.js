import { Link, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { LinkContainer } from 'react-router-bootstrap';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import TagFacesSharpIcon from '@mui/icons-material/TagFacesSharp';

const Navigation = ({ setIsAuthenticated, setUser, user }) => {
  let navigate = useNavigate();
  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {
      setUser(null);
    });
    navigate("/");
  };

//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className="navigation">
//       <h1 className="u-pull-left">Flatiron Dental</h1>
//       <button className="u-pull-right" onClick={logout}>
//         Logout
//       </button>
//       <div className="u-cf"></div>
//       <h4>Welcome, {user.name}!</h4>

//       <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
//       <Tabs
//        value={value} 
//       onChange={handleChange} 
//       // textColor="primary"
//       // indicatorColor='primary'
//       aria-label="disabled tabs example"
//       centered
//       >
//         <LinkContainer exact to="/">
//         <Tab label="Home"/>
//         </LinkContainer>
//         <LinkContainer to="/appointments">
//         <Tab label="Appointments"/>
//         </LinkContainer>
//         {/* <Link to="/dentists">Dentists</Link> */}
//       </Tabs>
//       </Box>
//     </div>
//   );
// };

// export default Navigation;



// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TagFacesSharpIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FLATIRON DENTAL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem key='dentists' onClick={handleCloseNavMenu}>
                <LinkContainer exact to='/'>
                  <Typography textAlign="center">Dentists</Typography>
                </LinkContainer>
                </MenuItem>
                <MenuItem key='appointments' onClick={handleCloseNavMenu}>
                <LinkContainer to='/appointments'>
                  <Typography textAlign="center">Appointments</Typography>
                </LinkContainer>
                </MenuItem>
            </Menu>
          </Box>
          <TagFacesSharpIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          FLATIRON DENTAL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
      
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
            
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.name} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                  <Typography onClick={logout} textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;