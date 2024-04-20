import React from 'react'

import './Activity.css'
import ActivityInfo from './ActivityInfo'

const Activity = () => {
  return (
    <div className='Activity'>
        <div className="activityTop">
            <h2>Activity</h2>
            <button>
                Create a post
            </button>
        </div>

        <ActivityInfo />

        <ActivityInfo />

        <ActivityInfo />

        <ActivityInfo />

        <ActivityInfo />
        
    </div>
  )
}

export default Activity