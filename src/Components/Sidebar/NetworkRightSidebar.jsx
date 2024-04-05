import React from 'react'
import PeopleCard from '../Cards/PeopleCard'

import './NetworkRightSidebar.css'

const NetworkRightSidebar = () => {
  return (
    <div className='networkRight'>
        <h3>People you may know</h3>
        <div className="peopleBox">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
        </div>
    </div>
  )
}

export default NetworkRightSidebar