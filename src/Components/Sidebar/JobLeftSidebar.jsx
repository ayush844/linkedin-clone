import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';

import './JobLeftSidebar.css'
import JobPreferenceModal from '../Modals/JobPreferenceModal';

const JobLeftSidebar = () => {

    const [showModel, setShowModel] = useState(false);


  return (
    <div className="jobLeftSection">
        <div className='jobLeft'>
            <Link to="/jobs/myJobs">
                <div className="jobLeftOptions">
                    <BookmarkIcon />
                    <span>My jobs</span>
                </div>
            </Link>
            <Link onClick={() => setShowModel(model => !model)}>
                <div className="jobLeftOptions">
                    <ListIcon />
                    <span>Preferences</span>
                </div>
            </Link>
        </div>
        <button>
            <CreateIcon />
            <span>Post a free job</span>
        </button>
        {showModel &&
            <JobPreferenceModal onClose={()=>setShowModel(model => !model)} />
        }
      
    </div>
  )
}

export default JobLeftSidebar