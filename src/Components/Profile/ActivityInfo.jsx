import React from 'react'

import './ActivityInfo.css'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ActivityInfo = () => {
  return (
    <div className='ActivityInfo'>
        <p><span>Ayush Sharma</span> posted this ● 1d</p>
        <div className="ActivityInfoPost">
            <div className="imgBox">
                <img src="https://plus.unsplash.com/premium_photo-1701202020992-8435d66fb91d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post" />
            </div>
            <div className="postDescription">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nemo vero odit eius autem quasi tenetur officia suscipit quas dolores aperiam inventore, cupiditate perspiciatis illo asperiores quia ipsa tempore accusantium a. Fugit voluptate qui necessitatibus veniam dolorum mollitia adipisci explicabo soluta quasi beatae, placeat, facilis perferendis doloremque nemo deleniti? Assumenda vitae mollitia alias dolor itaque molestiae odio quia beatae. Exercitationem debitis quas iusto dolor doloremque non. Laudantium quibusdam soluta velit dolor! Molestias eius facilis atque excepturi, quidem necessitatibus ducimus tempore aut rem reprehenderit. Dicta harum odio excepturi quasi voluptatum. Accusantium debitis eos doloremque temporibus quia mollitia ab nihil repudiandae possimus!</p>
            </div>
        </div>
        <div className="likesComments">
            <div className="likes">
                <ThumbUpIcon className='likeBtn'/>
                <span>360 likes</span>
            </div>
            <span>50 comments</span>
        </div>
    </div>
  )
}

export default ActivityInfo