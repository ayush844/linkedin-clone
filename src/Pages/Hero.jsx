import React from 'react'

import './Hero.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="HeroBox">
            <div className="logoContainer">
                <img src={logo} alt="logo" />
            </div>

            <h2>Linkedin Clone</h2>

            <p>Welcome to LinkedIn Clone - where professional connections happen. I hope you enjoy your experience! 😀</p>

            <Link to='/login'>
                <button>LogIn / SignUp</button>
            </Link>
            
        </div>
    </div>
  )
}

export default Hero