import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './MyConnectionRectangle.css'

const MyConnectionRectangle = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleRemove = () => {
        setIsOpen(false);         
    };

  return (
    <div className='myConnectionRectangle'>
        <div className="myConnectionRectangleInfo">
            <div className="myConnectionRectangleImage">
                <img src="https://images.unsplash.com/photo-1610130383669-95917c70ca20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="connection avatar" />
            </div>
            <div className="nameAndBio">
                <div className="nameAndBioName">
                    <h3>Ashima Mishra</h3>
                </div>
                <div className="nameAndBioBio">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere accusamus tempore mollitia sunt velit maxime nesciunt nam asperiores quia? Fugit veniam quam est totam deserunt eligendi. Incidunt accusantium id rerum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati inventore tenetur eos reprehenderit distinctio natus molestiae totam fuga, asperiores, aliquid ea. Eius, labore animi? Soluta, rem suscipit! Repellendus, vero?</p>
                </div>
            </div>
        </div>

        <div className="messageAndRemove">
            <button>Message</button>
            <div className="horizontalDots" onClick={toggleMenu}>
                <MoreHorizIcon />
            </div>
            {isOpen && (
                <div className="menu-options">
                     <div className="option" onClick={handleRemove}>
                        Remove connection
                    </div>          
                </div>
                )}
        </div>

    </div>
  )
}

export default MyConnectionRectangle