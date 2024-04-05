import React from 'react'

import './NetworkLeftSidebar.css'

import GroupIcon from '@mui/icons-material/Group';

const NetworksLeftSidebar = () => {
  return (
    <div className='networkLeft'>
        <h3>Manage my network</h3>
        <div className="networkLeftConnectionBox">
            <div className="text">
                <GroupIcon />
                <span>Connections</span>
            </div>
            <span>526</span>
        </div>
    </div>
  )
}

export default NetworksLeftSidebar