import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'
import './welcome.css'


function Welcome({user, setLoggedIn, setUserData, userData}) {
  const navigate = useNavigate()
  

  //get users info
  const getUserdetails = async () => {
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data())
      setUserData(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  useEffect(() => {
    getUserdetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  

  function handleClick() {
    return (
      navigate('/bingoCard')
    )
  }
  
  return (
    <div className='welcome-screen'>
      <h3>Welcome to Bingo! Click New Game to start a game</h3>
      <h4>You currently have {userData.wins} wins</h4>
      <h4>Your wallet: ${userData.money}</h4>
      <button onClick={() => handleClick()} className="new-game-btn">New game</button>
    </div>
  )
}

export default Welcome