import React from 'react'

import './Profile.css'
import UserInfoAndPic from '../Components/Profile/UserInfoAndPic'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="profilePageBox">
        <UserInfoAndPic />
      </div>
    </div>
  )
}

export default Profile