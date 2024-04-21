import React from 'react'

import './EducationInfo.css'

import EditIcon from '@mui/icons-material/Edit';


const EducationInfo = () => {
  return (
<div className='EducationInfo'>
    <div className="EducationInfoPost">
        <div className="eduDescription">
            <div className="imgBox">
                <img src="https://images.unsplash.com/photo-1616512659455-111d3367649f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post" />
            </div>
        
            <div className="eduTitle">
                <h3>University School of Information, Communication and Technology</h3>
                <h6>Bachelor of Technology</h6>
                <p>July 2022 - July 2026</p>
            </div>
        </div>
        <div className="editBtn">
            <EditIcon  style={{fontSize: '2rem'}}/>
        </div>
    </div>
</div>
  )
}

export default EducationInfo