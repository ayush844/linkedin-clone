import React from 'react'

import './Conversation.css'

const Conversation = ({name, pic}) => {
  return (
    <div className='Conversation'>
        <div className="imageBox">
            <img src={pic} alt="avatar" />
        </div>
        <div className="nameBox">
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default Conversation