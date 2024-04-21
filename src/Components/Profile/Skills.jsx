import React from 'react'

import './Skills.css'
import AddIcon from '@mui/icons-material/Add';
import SkillInfo from '../../Pages/SkillInfo';

const Skills = () => {
  return (
    <div className='Skills'>
    <div className="SkillsTop">
        <h2>Skills</h2>
        <div className="SkillsTopBtn">
            <div className="editBtn">
                <AddIcon  style={{fontSize: '3rem'}}/>
            </div>
        </div>
    </div>
    <SkillInfo skillName="Typescript" />
    <SkillInfo skillName="Javascript" />
    <SkillInfo skillName="ReactJS" />
    <SkillInfo skillName="NodeJS" />
    <SkillInfo skillName="ExpressJS" />
    <SkillInfo skillName="MongoDB" />
    </div>
  )
}

export default Skills