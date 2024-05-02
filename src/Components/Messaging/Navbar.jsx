import React from 'react'
import './Navbar.css';

import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div className='messagingNavbar'>
        <h2>Messaging</h2>
        <form className='searchForm'>
            <SearchIcon />
            <input type="text" placeholder='search' />
        </form>
    </div>
  )
}

export default Navbar