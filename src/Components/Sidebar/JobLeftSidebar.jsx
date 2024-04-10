import React from 'react'
import { Link } from 'react-router-dom'

import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';

import './JobLeftSidebar.css'

const JobLeftSidebar = () => {
  return (
    <div className="jobLeftSection">
        <div className='jobLeft'>
            <Link>
                <div className="jobLeftOptions">
                    <BookmarkIcon />
                    <span>My jobs</span>
                </div>
            </Link>
            <Link>
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
    </div>
  )
}

export default JobLeftSidebar