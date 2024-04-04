import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
<div className="app">
    <Header />
    <div className="app_body">
        <Outlet />
    </div>
</div>
  )
}

export default Layout