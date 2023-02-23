import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth, db} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'


function Welcome({user}) {
  const navigate = useNavigate()
  console.log(user.uid)

  const getUserdetails = async () => {
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data())
      console.log("Data: ",docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  useEffect(() => {
    getUserdetails()
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
      <h3>Welcome {user.email}</h3>
      <button onClick={() => handleClick()}>New game</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Welcome