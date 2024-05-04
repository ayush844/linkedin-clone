import React from 'react'

import logo from '../assets/logo.png'
import googlogo from '../assets/googleLogo.png'

import { Link } from 'react-router-dom'

import './Signup.css'

const Signup = () => {
  return (
<div className='Login'>
    <div className="loginBox">
        <div className="logoBox">
            <img src={logo} alt="logo" />
        </div>
        <h2>SIGN UP</h2>
        <form className='loginForm'>

            <div className="inputField">
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' name='username' placeholder='entrer your username'/>
            </div>

            <div className="inputField">
                <label htmlFor="email">Email:</label>
                <input type="email" id='email' name='email' placeholder='entrer your email address'/>
            </div>

            <div className="inputField">
                <label htmlFor="password">Password:</label>
                <input type="password" id='password' name='password' placeholder='entrer your password' />
            </div>

            <div className="inputField">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id='confirmPassword' name='confirmPassword' placeholder='confirm your password' />
            </div>

            <button className='loginBtn'>SIGN UP</button>

        </form>

        <div className="divider">
            <span className='horizontal'></span>
            <span className='or'>or</span>
            <span className='horizontal'></span>
        </div>

        <button className='googleBtn'>
            <div className="googleLogo">
                <img src={googlogo} alt="google logo" />
            </div>
            <span>Signup with Google</span>
        </button>

        <p>already registered ? <Link to='/login'>Log In</Link></p>
    </div>
</div>
  )
}

export default Signup