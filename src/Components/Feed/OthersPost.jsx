import React from 'react'
import './OthersPost.css'
import ReactPostOptions from './ReactPostOptions'

const OthersPost = ({name, description, message, photoURL, avatar}) => {
  return (
    <div className='othersPost'>
        <div className="authorInfo">
            <div className="author-avatar-div">
                <img src={avatar} alt="avatar" />
            </div>
            <div className="authorNameAndProfession">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            
        </div>
        <div className="postContent">
            <p>{message}</p>
        </div>
        <ReactPostOptions />
    </div>
  )
}

export default OthersPost