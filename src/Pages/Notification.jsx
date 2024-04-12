import React from 'react'
import './Notification.css'
import NotificationRectagle from '../Components/Cards/NotificationRectagle'

const Notification = () => {
  return (
    <div className='notificationPage'>
      <div className="notificationContainer">
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
        <NotificationRectagle />
      </div>
    </div>
  )
}

export default Notification