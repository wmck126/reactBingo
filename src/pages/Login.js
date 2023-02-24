import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import './loginSignup.css'

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
    <div>
      <h2>Login</h2>
      <form className='form'>
        <label>Email</label>
        <input
          id="email-address"
          name='email'
          type='email'
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          id="password"
          name='password'
          type='password'
          required
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{errorHandler(error)}</p>
        <button onClick={onLogin}>Login</button>
      </form>

      <p>
        No account yet?{' '}
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </p>
    </div>
  )
}

export default Login