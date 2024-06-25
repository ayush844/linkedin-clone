import React from 'react'
import JobLeftSidebar from '../Components/Sidebar/JobLeftSidebar'
import JobRightSidebar from '../Components/Sidebar/JobRightSidebar'
// import JobPreferenceModal from '../Components/Modals/JobPreferenceModal'

const Jobs = () => {
  return (
    <main style={{
    width: "-webkit-fill-available"
}}>
      <JobLeftSidebar />
      <JobRightSidebar />
    </main>
  )
}

export default Jobs