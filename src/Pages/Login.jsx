import React from 'react'

import './Login.css'

import logo from '../assets/logo.png'
import googlogo from '../assets/googleLogo.png'

import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='Login'>
        <div className="loginBox">
            <div className="logoBox">
                <img src={logo} alt="logo" />
            </div>
            <h2>LOG IN</h2>
            <form className='loginForm'>

                <div className="inputField">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' name='username' placeholder='entrer your username'/>
                </div>

                <div className="inputField">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' placeholder='entrer your password' />
                </div>

                <button className='loginBtn'>LOG IN</button>

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
                <span>Login with Google</span>
            </button>

            <p>new to Linkedin ? <Link to='/signup'>Sign Up</Link></p>
        </div>
    </div>
  )
}

export default Login