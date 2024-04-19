import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import ProfileDropdown from '../Dropdown/ProfileDropdown';



const Header = () => {

  const [openProfileOptions, setOpenProfileOptions] = useState(false);

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
        <div className="avatar" onClick={() => setOpenProfileOptions((prev) => !prev)}>
          <div className="avatar_image">
            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="me" />
          </div>
          <span>me</span>
        </div>
      </div>
      {openProfileOptions 
      && 
      <ProfileDropdown setOpenProfileOptions={setOpenProfileOptions} openProfileOptions={openProfileOptions} />}
    </div>
  )
}

export default Header