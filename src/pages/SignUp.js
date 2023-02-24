import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import './loginSignup.css'
import { db } from "../firebase";
import {doc, setDoc} from "firebase/firestore"


function SignUp({loggedIn}) {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  const onSubmit = async(e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Signed in
        const user = userCredential.user
        console.log(user)
        setDoc(doc(db, 'users', userCredential.user.uid), {
          username: username,
          email: email,
          money: 500,
          wins: 0
        })
      })
      .catch((error) => {
        const ecode = error.code
        const errorMessage = error.message 
        console.log(ecode, errorMessage)
        setError(error.code)
      })
  }

  useEffect(() => {
    if (loggedIn){
      navigate("/")
    }
  })

  function errors(e){
    if (e === 'auth/email-already-in-use'){
      return 'Email is already in use'
    } else if (e === 'auth/invalid-email'){
      return 'Invalid Email'
    } else if (e === 'auth/weak-password'){
      return 'Password should be at least 6 characters'
    }
  }


  return (
    <div>
      <h2>Sign up</h2>
      <form className='form'>
      <label>Username</label>
        <input 
          type="text" 
          id="username-su"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Username"
          />
        <label>Email</label>
        <input 
          type="email" 
          id="email-su"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          />
        <label>Password</label>
        <input 
          type="password" 
          id="pword-su"
          value={password}
          label="Create password"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          />
          <p>{errors(error)}</p>
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