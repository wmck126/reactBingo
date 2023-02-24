import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import './loginSignup.css'
import mail from '../mail.png'
import lock from '../padlock.png'


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      //Signed in
      const user = userCred.user
      navigate("/")
      console.log(user)
    })
    .catch((error) => {
      const eCode = error.code
      const eMessage = error.message
      setError(eCode)
      console.log(eCode, eMessage)
    })
  }

  function errorHandler(e) {
    if (e==='auth/wrong-password'){
      return 'Wrong password'
    } else if (e==="auth/invalid-email"){
      return 'Not a valid email address'
    } else if (e==="auth/user-not-found"){
      return "User not found"
    } else if (e==="auth/too-many-requests"){
      return ("Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. ")
    }
  }



  return (
    <div className="login-container">
        <h2 className='login-header'>Login</h2>
        <div className='login-field'>
        <form className='form'>
          <label className='login-h2'>Email</label>
          <div className='email-line'>
            <img className='mail-icon' src={mail} alt="mail icon" />
            <input
              className='inputs'
              id="email-address"
              name='email'
              type='email'
              required
              placeholder="Type your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
        </div>
        <label className='login-h2'>Password</label>
        <div className='email-line'>
          <img className='lock-icon' src={lock} alt="password icon"/>
          <input
            className='inputs'
            id="password"
            name='password'
            type='password'
            required
            placeholder='Type your password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label className='errors'>{errorHandler(error)}</label>
        <button onClick={onLogin} className='button-login'>Login</button>
      </form>
      </div>
      <p className='su-link'>
        No account yet?{' '}
        <br />
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </p>
    </div>
  )
}

export default Login