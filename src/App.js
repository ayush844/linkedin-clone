import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import LeftSidebar from './Components/Sidebar/LeftSidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;
