import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import './PeopleCard.css'

const PeopleCard = () => {
  return (
    <div className='peopleCard'>
        <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Pic" />
        <div className="peopleCardAvatar">
            <img src="https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="people avatar" />
        </div>
        <div className="peopleCardInfo">
            <h2>Aditi Sharma</h2>
            <div className="peopleCardInfoDescription">
                <p>SDE 3 @ Google || ex SDE 2 @ amazon || ex sde 1 @ Walmart</p>
            </div>
        </div>
        <button>
            <PersonAddIcon />
            <span>Connect</span>
        </button>
    </div>
  )
}

export default PeopleCard