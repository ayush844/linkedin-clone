import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import LeftSidebar from './Components/Sidebar/LeftSidebar';
import Feed from './Components/Feed/Feed';
import NewsSidebar from './Components/Sidebar/NewsSidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <LeftSidebar />
        <Feed />
        <NewsSidebar />
      </div>
    </div>
  );
}

export default App;
