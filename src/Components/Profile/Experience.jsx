import React from 'react'

import './Experience.css'

// import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ExperienceInfo from './ExperienceInfo';

const Experience = () => {
  return (
    <div className='Experience'>
        <div className="ExperienceTop">
            <h2>Experience</h2>
            <div className="ExperienceTopBtn">
                {/* <div className="editBtn">
                    <EditIcon />
                </div> */}
                <div className="editBtn">
                    <AddIcon  style={{fontSize: '3rem'}}/>
                </div>
            </div>
        </div>

        <ExperienceInfo />

        
    </div>
  )
}

export default Experience