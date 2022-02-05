import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';

function HeaderTabs({ tabIndex, setTabIndex }) {

  const handleTabChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <Tabs
      value={tabIndex}
      onChange={handleTabChange}
      style={{ width: "100%" }}
      TabIndicatorProps={{
        style: {
          backgroundColor:  "#2ac420",
        }
      }}
    >
      <Tab label={<span style={{color:"#2ac420"}}>Activity</span>} style={{ width: "50%" }} component={Link} to="/" value="/" />
      <Tab label={<span style={{color:"#2ac420"}}>Archived</span>} style={{ width: "50%" }} component={Link} to="/archive" value="/archive" />
    </Tabs>
  )
};

export default HeaderTabs;