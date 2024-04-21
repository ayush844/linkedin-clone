import React from 'react'

import './Profile.css'
import UserInfoAndPic from '../Components/Profile/UserInfoAndPic'
import About from '../Components/Profile/About'
import Activity from '../Components/Profile/Activity'
import Experience from '../Components/Profile/Experience'
import Education from '../Components/Profile/Education'
import Skills from '../Components/Profile/Skills'

const Profile = () => {
  return (
    <div className='profilePage'>
      <div className="profilePageBox">
        <UserInfoAndPic />
        <About />
        <Activity />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  )
}

export default Profile