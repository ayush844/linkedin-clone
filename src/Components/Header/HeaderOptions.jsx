import React from 'react'

import './HeaderOptions.css'

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NavLink } from 'react-router-dom';


const HeaderOptions = () => {
  return (
    <div className='header_options'>
        <NavLink to='/home' className={({isActive})=>`headerOptionLink ${isActive ? "activeHeaderOptionLink":""}`}>
          <div className="box">
            <HomeIcon className='icon' />
            <span style={{textDecoration: 'none'}}>Home</span>
          </div>
        </NavLink>  

        <NavLink to='/networks' className={({isActive})=>`headerOptionLink ${isActive ? "activeHeaderOptionLink":""}`}>
          <div className="box">
            <PeopleAltIcon className='icon'/>
            <span>My Network</span>
          </div>
        </NavLink>  

        <NavLink to='/jobs' className={({isActive})=>`headerOptionLink ${isActive ? "activeHeaderOptionLink":""}`}>
          <div className="box">
            <WorkIcon className='icon'/>
            <span>Jobs</span>
          </div>
        </NavLink>  

        <NavLink to='/messages' className={({isActive})=>`headerOptionLink ${isActive ? "activeHeaderOptionLink":""}`}>
          <div className="box">
            <MessageIcon className='icon' />
            <span>Messaging</span>
          </div>
        </NavLink>

        <NavLink to='/notification' className={({isActive})=>`headerOptionLink ${isActive ? "activeHeaderOptionLink":""}`}>
          <div className="box">
            <NotificationsIcon className='icon' />
            <span>Notifications</span>
          </div>
        </NavLink>  

    </div>
  )
}

export default HeaderOptions