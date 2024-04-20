import React from 'react';

import './About.css';

import EditIcon from '@mui/icons-material/Edit';


const About = () => {
  return (
    <div className='About'>
        <div className="aboutHeading">
            <h3>About</h3>
            <div className="editBtn">
                <EditIcon />
            </div>
        </div>
        <div className="aboutDescription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iure maiores placeat sit voluptate asperiores aut blanditiis totam corrupti velit quod rerum corporis aliquam accusantium unde facilis, perspiciatis, odit tempore fugit. Quod cupiditate laudantium fugiat ea illo, fuga cumque quam, aut ad aperiam accusantium magnam excepturi non alias? Labore debitis aperiam perspiciatis veritatis repellendus sit amet ad, laudantium, eum molestiae illum quaerat facilis quam eveniet sed sapiente hic cupiditate in ducimus quidem expedita officia totam quae! Repellat, maxime animi ducimus dolorem, sit quod recusandae possimus maiores repudiandae aperiam quisquam pariatur?</p>
        </div>
    </div>
  )
}

export default About