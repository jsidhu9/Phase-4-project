import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LinkContainer } from 'react-router-bootstrap';

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="navigation">
      <h1 className="u-pull-left">Flatiron Dental</h1>
      <button className="u-pull-right" onClick={logout}>
        Logout
      </button>
      <div className="u-cf"></div>
      <h4>Welcome, {user.name}!</h4>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
       value={value} 
      onChange={handleChange} 
      // textColor="primary"
      // indicatorColor='primary'
      aria-label="disabled tabs example"
      centered
      >
        <LinkContainer exact to="/">
        <Tab label="Home"/>
        </LinkContainer>
        <LinkContainer to="/appointments">
        <Tab label="Appointments"/>
        </LinkContainer>
      </Tabs>
      </Box>
    </div>
  );
};

export default Navigation;
