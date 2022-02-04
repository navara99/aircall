import React from 'react';
import useCallsData from './hooks/useCallsData.js';
import Header from './Header.jsx';
import CallsList from './CallsList.jsx';
import CallDetails from './CallDetails.jsx';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router';
import Loading from './Loading.jsx';

const App = () => {
  const [loading, setLoading] = useState(false);
  const { calls, setCalls } = useCallsData(setLoading);
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(location.pathname);

  return (
    <div className='container'>
      <Header {...{ tabIndex, setTabIndex }} />
      <div className="container-view">
        {loading && <Loading />}
        <Routes>
          <Route path="/" element={<CallsList {...{ calls, setCalls, loading, setLoading }} />} />
          <Route path="/archive" element={<CallsList {...{ calls, setCalls, filter: "archive", loading, setLoading }} />} />
          <Route path="/call/:id" element={<CallDetails {...{ setTabIndex }} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
