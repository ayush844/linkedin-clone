import React from 'react'

import './Education.css'
import AddIcon from '@mui/icons-material/Add';
import EducationInfo from './EducationInfo';

const Education = () => {
  return (
    <div className='Education'>
        <div className="EducationTop">
            <h2>Education</h2>
            <div className="EducationTopBtn">
                <div className="editBtn">
                    <AddIcon  style={{fontSize: '3rem'}}/>
                </div>
            </div>
        </div>
        <EducationInfo />
    </div>
  )
}

export default Education