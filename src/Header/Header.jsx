import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';



const Header = () => {
  return (
    <div className='header'>
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="logo"/>
        <div className="header_search">
          <SearchIcon style={{ fontSize: '1.5rem' }} />
          <input type="text" placeholder='Search'/>
        </div>
      </div>

      <div className="header_right">
        <HeaderOptions />
        <div className="avatar">
          <div className="avatar_image">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="me" />
          </div>
          <span>me</span>
        </div>
      </div>
    </div>
  )
}

export default Header