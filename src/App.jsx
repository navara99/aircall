import React from 'react';
import useCallsData from './hooks/useCallsData.js';
import Header from './Header.jsx';
import CallsList from './CallsList.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const { calls, setCalls } = useCallsData();

  console.log(calls);
  
  return (
    <div className='container'>
      <Header />
      <div className="container-view">
        <Routes>
          <Route path="/" element={<CallsList {...{ calls }} />} />
          <Route path="/archive" element={<CallsList {...{ calls, filter: "archive" }} />} />
          <Route path="/inbound" element={<CallsList {...{ calls, filter: "inbound" }} />} />
          <Route path="/outbound" element={<CallsList {...{ calls, filter: "outbound" }} />} />
          <Route path="/missed" element={<CallsList {...{ calls, filter: "missed" }} />} />
          <Route path="/call/:id" element={<div>Call Details</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
