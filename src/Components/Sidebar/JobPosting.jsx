import React from 'react'

import CloseIcon from '@mui/icons-material/Close';

import './JobPosting.css'


const JobPosting = ({companyLogo, positionName, companyName, location}) => {
  return (
    <div className='JobPosting'>
        <div className="jobInfo">
            <div className="jobLogo">
                <img src={companyLogo} alt="company logo" />
            </div>
            <div className="positionCompanyAndLocation">
                <p className="jobPosition">
                    {positionName}
                </p>
                <p className="company">
                    {companyName}
                </p>
                <p className="location">
                    {location}
                </p>
            </div>
        </div>
        <div className="jobCross">
            <CloseIcon />
        </div>
    </div>
  )
}

export default JobPosting