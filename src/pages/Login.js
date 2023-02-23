import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import './loginSignup.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      const eCode = error.eCode
      const eMessage = error.message
      console.log(eCode, eMessage)
    })
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