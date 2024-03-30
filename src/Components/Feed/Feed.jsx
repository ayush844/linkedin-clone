import React from 'react'
import './Feed.css'
import Post from './Post'
import OthersPost from './OthersPost'

const Feed = () => {
  return (
    <div className='feed-section'>
        <Post />
        <div className="divider"></div>
        <OthersPost />
        <OthersPost />
        <OthersPost />
        <OthersPost />
        <OthersPost />
        <OthersPost />
    </div>
  )
}

export default Feed