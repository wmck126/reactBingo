import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import "./Game.css"

function CardSelect({setNumberCards, userData, user}) {
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



  return (
    <div className='card-select'>
      <label>How many cards would you like? $15 per card</label>
      <label>Current selection is ${price}</label>
      <label>You have ${userData.money} in the bank</label>
      <select onChange={(e) => handleChange(e)}>
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button onClick={() => handleClick()}>Confirm</button>
      
    </div>
  )
}

export default CardSelect