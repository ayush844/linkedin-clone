import React, { useState } from 'react'
import './NotificationRectangle.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import DeleteIcon from '@mui/icons-material/Delete';

const NotificationRectagle = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleRemove = () => {
        setIsOpen(false);         
    };

  return (
    <div className='notificationRectangle'>
        <div className="notificationInfo">
            <div className="notificationRectangleImage">
                <img src="https://images.pexels.com/photos/3363304/pexels-photo-3363304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="notification Avatar" />
            </div>
            <div className="notificationBox">
                <div className="notificationMessage">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus sint nihil ut saepe, totam earum sapiente officiis laboriosam commodi corporis sed voluptatem quidem atque in quaerat ab inventore perferendis cum aliquam consequatur error. Sed alias facere repellat, quasi voluptatibus nam quam autem tenetur, hic modi qui cum quas, quidem sit.</p>
                </div>
            </div>
        </div>
        <div className="buttonOptions">
            <div className="horizontalDots" onClick={toggleMenu}>
                <MoreHorizIcon />
            </div>
            {isOpen && (
                <div className="menu-options">
                     <div className="option" onClick={handleRemove}>
                        <DeleteIcon />
                        <span>Remove Notification</span>
                    </div>          
                </div>
            )}
        </div>

    </div>
  )
}

export default NotificationRectagle