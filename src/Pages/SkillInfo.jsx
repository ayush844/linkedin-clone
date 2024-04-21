import React from 'react'

import './SkillInfo.css'

import EditIcon from '@mui/icons-material/Edit';


const SkillInfo = ({skillName}) => {
  return (
<div className='SkillInfo'>
    <div className="SkillInfoPost">
        <h3>{skillName}</h3>

        <div className="editBtn">
            <EditIcon  style={{fontSize: '2rem'}}/>
        </div>
    </div>
</div>
  )
}

export default SkillInfo