import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase'

function Welcome() {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if (user){
        const uid = user.uid
        setUserEmail(user.email)
        console.log('uid', uid)
      } else {
        console.log('user is signed out')
      }
    })
  }, [])

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/login")
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log(error)
    })
  }

  function handleClick() {
    return (
      navigate('/bingoCard')
    )
  }
  
  return (
    <div>
      <h1>Bingo</h1>
      <h3>Welcome {userEmail}</h3>
      <button onClick={() => handleClick()}>New game</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Welcome