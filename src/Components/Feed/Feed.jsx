import React from 'react'
import './Feed.css'
import Post from './Post'

const Feed = () => {
  return (
    <div className='feed-section'>
        <Post />
        <div className="divider"></div>
    </div>
  )
}

export default Feed