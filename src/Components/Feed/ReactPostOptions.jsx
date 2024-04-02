import React from 'react'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';

import './ReactPostOptions.css'

const ReactPostOptions = () => {
  return (
    <div className='reactOptionBox'>
        <div className="option">
            <ThumbUpOffAltIcon />
            <span>Like</span>
        </div>
        <div className="option">
            <CommentIcon/>
            <span>Comment</span>
        </div>
        <div className="option">
            <RepeatIcon />
            <span>Repost</span>
        </div>
    </div>
  )
}

export default ReactPostOptions