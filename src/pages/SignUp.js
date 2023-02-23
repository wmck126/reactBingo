import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './loginSignup.css'


function SignUp() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = async(e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user
        console.log(user)
        navigate("/login")
      })
      .catch((error) => {
        const ecode = error.ecode
        const errorMessage = error.message 
        console.log(ecode, errorMessage)
      })
  }


  return (
    <div>
      <h2>Sign up</h2>
      <form className='form'>
        <label>Email</label>
        <input 
          type="email" 
          id="email-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          />
        <label>Password</label>
        <input 
          type="password" 
          id="pword-login"
          value={password}
          label="Create password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          />
          <button
            type="submit"
            onClick={onSubmit}
            >
              Sign up
          </button>
      </form>
      <p>
        Already have an account?{' '}
        <NavLink to="/login">
          Sign in
        </NavLink>
      </p>
    </div>
  )
}

export default SignUp