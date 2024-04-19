import React from 'react'

import './UserInfoAndPic.css'

import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const UserInfoAndPic = () => {
  return (
    <div className='UserInfoAndPic'>
        <div className="editBtn">
            <EditIcon />
        </div>
        <div className="UserInfoAndPicTop">
            <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="cover" />
            <div className="profileAvatar">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile pic" />
            </div>
        </div>
        <div className="nameEducationInfoLocation">
            <div className="nameInfoLocaton">
                <h2>Ayush Sharma</h2>
                <div className="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus earum, quo eos vitae at possimus provident a repellendus reiciendis rerum consequatur animi delectus quibusdam incidunt. Accusamus quis molestias in.</p>
                </div>
                <div className="locationAndContact">
                    <span className='location'>Delhi, India</span>
                    <a href='/me' className='contact'>Contact Info</a>
                </div>
                <Link to="/networks/myConnections" className="connection">500+ connections</Link>
            </div>
            <div className="education">
                <div className="editBtn">
                    <EditIcon />
                </div>
                <div className="educationInfo">
                    <div className="logo">
                        <img src="https://images.unsplash.com/photo-1616512659455-111d3367649f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="collegeLogo" />
                    </div>
                    <div className="collegeName">
                        <p>University School of Information, Communication and Technology</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UserInfoAndPic