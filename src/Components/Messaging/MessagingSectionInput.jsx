import React from 'react'

import './MessagingSectionInput.css'

import SendIcon from '@mui/icons-material/Send';

const MessagingSectionInput = () => {
  return (
    <form className='messageForm'>
        <input type="text" placeholder='write a message' />
        <button type="submit">
            <SendIcon />
        </button>
    </form>
  )
}

export default MessagingSectionInput