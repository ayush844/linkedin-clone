import React from 'react'
import noJob from '../ERROR/nojob.png'

import './MyJobs.css'

const MyJobs = () => {
  return (
    <div className='myJobsPage'>
        <div className="underConstruction">
            <p>THIS PAGE IS STILL UNDER CONTRUCTION</p>
        </div>
        <div className="myJobsBox">
            <h3>My Jobs</h3>
            <div className="divider"></div>
            <div className="savedJobPosting">
                <img src={noJob} alt="error img" />
                <p>NO JOBS SAVED</p>
            </div>
        </div>
    </div>
  )
}

export default MyJobs