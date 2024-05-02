import React from 'react'

import './Messages.css';
import Navbar from '../Components/Messaging/Navbar';
import Sidebar from '../Components/Messaging/Sidebar';
import MessagingSection from '../Components/Messaging/MessagingSection';

const Messages = () => {
  return (
    <div className='messagesPage'>
      <div className="messagingBox">
        <Navbar />
        <div className="nameAndMessages">
          <Sidebar />
          <MessagingSection />
        </div>
      </div>
    </div>
  )
}

export default Messages