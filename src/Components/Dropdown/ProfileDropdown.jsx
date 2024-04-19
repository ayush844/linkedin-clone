import React from 'react'

import './ProfileDropdown.css'

const ProfileDropdown = ({setOpenProfileOptions}) => {
  return (
    <div className='profileDropdown'>
        <div className="profileDropdownTop">
            <div className="profilePic">
                <div className="profilePicAvatar">
                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                </div>
            </div>
            <div className="profileInfo">
                <div className="profileName">
                    <h4>Ayush Sharma</h4>
                </div>
                <div className="profileDescription">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum natus esse est voluptates ratione magni animi fugiat vitae veritatis quam cumque molestias unde, perferendis nulla voluptatibus tenetur. Dolor, nisi ipsum.</p>
                </div>
            </div>
        </div>
        <button className='viewProfileBtn' onClick={() => setOpenProfileOptions((prev) => !prev)}>View Profile</button>
        <div className="divider"></div>
        <p className='signOut' onClick={() => setOpenProfileOptions((prev) => !prev)}>Sign Out</p>
    </div>
  )
}

export default ProfileDropdown