import React from 'react'

import './Profile.css'
import UserInfoAndPic from '../Components/Profile/UserInfoAndPic'
import About from '../Components/Profile/About'
import Activity from '../Components/Profile/Activity'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="profilePageBox">
        <UserInfoAndPic />
        <About />
        <Activity />
      </div>
    </div>
  )
}

export default Profile