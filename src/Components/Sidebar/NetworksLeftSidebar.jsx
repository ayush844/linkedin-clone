import React from 'react'

import './NetworkLeftSidebar.css'

import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

const NetworksLeftSidebar = () => {
  return (
    <div className='networkLeft'>
        <h3>Manage my network</h3>
        <Link to='/networks/myConnections'>
        <div className="networkLeftConnectionBox">
            <div className="text">
                <GroupIcon />
                <span>Connections</span>
            </div>
            <span>526</span>
        </div>
        </Link>
    </div>
  )
}

export default NetworksLeftSidebar