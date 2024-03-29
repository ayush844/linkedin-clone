import React from 'react'

import './Post.css'

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import { blue, orange, purple } from '@mui/material/colors';

const Post = () => {
  return (
    <div className='post-div'>
        <div className="avatar-and-input">

            <div className="post-avatar-div">
                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
            </div>

            <form>
                <input type="text" placeholder='Start a post'/>
            </form>

        </div>
        <div className="post-options">
            <div className="media post-option">
                <ImageIcon sx={{ color: blue[500] }}/>
                <span>Media</span>
            </div>
            <div className="job post-option">
                <WorkIcon sx={{ color: purple[500]}} />
                <span>Job</span>
            </div>
            <div className="article post-option">
                <ArticleIcon sx={{ color: orange[500] }} />
                <span>Write Article</span>
            </div>
        </div>
    </div>
  )
}

export default Post