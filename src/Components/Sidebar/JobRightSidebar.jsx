import React from 'react'
import JobPosting from './JobPosting'

import './JobRightSidebar.css'

const JobRightSidebar = () => {
  return (
    <div className='jobRightSidebar'>
        <h3>Top job picks for you</h3>
        <div className="jobBox">
            <JobPosting companyLogo="https://images.unsplash.com/photo-1700419231488-4bb78b696937?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Senior Frontend Developer" companyName="Falcons United" location="Gurugram, Haryana, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Node JS developer" companyName="Bontons Tech" location="Gurugram, Haryana, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1590874315261-788881621f7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Data Science Intern" companyName="FENDI pvt ltd." location="Noida, UP, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1617727553252-65863c156eb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Software Developer" companyName="Red Bull" location="Chennai, Tamil Nadu, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1614851099518-055a1000e6d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Devops Endineer" companyName="Circles" location="Gurugram, Haryana, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1593055368921-0c6b357303ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Full Stack Developer" companyName="Maserati" location="Noida, UP, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1600105412998-761e184831fe?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="DevRel Intern" companyName="OMO" location="Pune, Mahrashtra, India"/>
            <JobPosting companyLogo="https://images.unsplash.com/photo-1616323691387-06695064d4cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" positionName="Product Manager" companyName="Royal Enfield" location="Banglore, Karnataka, India"/>
        </div>
    </div>
  )
}

export default JobRightSidebar