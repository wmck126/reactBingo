import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import "./Game.css"

function CardSelect({setNumberCards, userData, user, setDifficulty}) {
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)


  const updateMoney = async () => {
    if ((userData.money - price) < 0){
      console.log(userData.money - price)
      alert("You don't have enough money for the selection")
      return
    }
    const docRef = doc(db, "users", user.uid)
    await updateDoc(docRef, {
      money: (userData.money - price)
    })
    navigate('/game')
  }
  

  function handleChange(e) {
    setNumberCards(parseInt(e.target.value))
    setPrice(15*e.target.value)
  }
  function handleClick() {
    updateMoney()
  }

  function handleDifficulty(e) {
    let diff = e.target.value
    if (diff.includes("Easy")){
      setDifficulty(3)
    } else if (diff.includes("Medium")){
      setDifficulty(6)
    } else if (diff.includes("Hard")){
      setDifficulty(9)
    } else if (diff.includes("Insane")){
      setDifficulty(20)
    }
  }



  return (
    <div className='card-select'>
      <label>How many cards would you like? $15 per card</label>
      <label>Current selection is ${price}</label>
      <label>You have ${userData.money} in the bank</label>
      <select onChange={(e) => handleChange(e)}>
        <option selected>Please select an option</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <label>What difficulty would you like to play?</label>
      <label>Harder difficulty means a higher jackpot!</label>
      <select onChange={(e) => handleDifficulty(e)}>
        <option selected>Select a difficulty</option>
        <option>Easy (3 bots)</option>
        <option>Medium (6 bots)</option>
        <option>Hard (9 bots)</option>
        <option>Insane (20 bots)</option>
      </select>
      <button onClick={() => handleClick()}>Confirm</button>
      
    </div>
  )
}

export default CardSelect