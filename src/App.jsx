import React from 'react';
import useCallsData from './hooks/useCallsData.js';
import Header from './Header.jsx';
import CallsList from './CallsList.jsx';
import CallDetails from './CallDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Snackbar, Alert } from '@mui/material';

const App = () => {
  const [loading, setLoading] = useState(false);
  const { calls, setCalls } = useCallsData(setLoading);
  const { pathname } = useLocation();
  const [tabIndex, setTabIndex] = useState(pathname === "/archive" || pathname === "/" ? pathname : false);
  const [snackBarDetails, setSnackBarDetails] = useState({
    open: false,
    message: "",
  });

  const handleSnackBarClose = () => {
    setSnackBarDetails((prev) => {
      return { ...prev, open: false }
    });
  };

  return (
    <div className='container'>
      <Snackbar
        open={snackBarDetails.open}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {
          <Alert severity="success" sx={{ width: "100%" }}>
            {snackBarDetails.message}
          </Alert>}
      </Snackbar>
      <Header    {...{ tabIndex, setTabIndex }} />
      <div className="container-view">
        <Routes>
          <Route path="/" element={<CallsList {...{
            calls,
            setCalls,
            loading,
            setLoading,
            setSnackBarDetails
          }} />} />
          <Route path="/archive" element={<CallsList {...{
            calls,
            setCalls,
            filter: "archive",
            loading,
            setLoading,
            setSnackBarDetails
          }} />} />
          <Route path="/call/:id" element={<CallDetails {...{
            loading,
            setLoading,
            setTabIndex,
            calls,
            setCalls,
            setSnackBarDetails
          }} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
