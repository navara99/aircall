import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function HeaderTabs({ tabIndex, setTabIndex }) {
  const location = useLocation();

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Tabs value={location.pathname} onChange={handleTabChange} style={{ width: "100%" }}>
      <Tab label="Activity" style={{ width: "50%" }} component={Link} to="/" value="/" />
      <Tab label="Archived" style={{ width: "50%" }} component={Link} to="/archive" value="/archive" />
    </Tabs>
  )
};

export default HeaderTabs;