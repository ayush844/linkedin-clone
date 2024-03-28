import React from 'react'

import './HeaderOptions.css'

import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


const HeaderOptions = () => {
  return (
    <div className='header_options'>
        <div className="box">
          <HomeIcon className='home_icon' />
          <span>Home</span>
        </div>
        <div className="box">
          <PeopleAltIcon className='network_icon'/>
          <span>My Network</span>
        </div>
        <div className="box">
          <WorkIcon className='work_icon'/>
          <span>Jobs</span>
        </div>
        <div className="box">
          <MessageIcon className='message_icon' />
          <span>Messaging</span>
        </div>
        <div className="box">
          <NotificationsIcon className='notification_icon' />
          <span>Notifications</span>
        </div>
    </div>
  )
}

export default HeaderOptions