import React from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import "./BingoCard.css"

function BingoCard({numbersDrawn, user, userData, pot}) {
  const Barr = []
  const Iarr = []
  const Narr = []
  const Garr = []
  const Oarr = []
  const navigate = useNavigate()

  const winners = [
    ['b0', 'b1', 'b2', 'b3', 'b4'],
    ['i0', 'i1', 'i2', 'i3', 'i4'],
    ['n0', 'n1', 'n2', 'n3', 'n4'],
    ['g0', 'g1', 'g2', 'g3', 'g4'],
    ['o0', 'o1', 'o2', 'o3', 'o4'],
    ['b0', 'i0', 'n0', 'g0', 'o0'],
    ['b1', 'i1', 'n1', 'g1', 'o1'],
    ['b2', 'i2', 'n2', 'g2', 'o2'],
    ['b3', 'g3', 'i3', 'n3', 'o3'],
    ['b4', 'g4', 'i4', 'n4', 'o4'],
    ['b0', 'g3', 'i1', 'n2', 'o4'],
    ['b4', 'g1', 'i3', 'n2', 'o0']
  ]
  
  const selected = []

  //randomly assigned numbers to each column on the card w/o repeating
  function randomlyAssignCards(arr, max, min, iter){
    for(let i=0; i<=iter; i++){
      const newNum = Math.floor(Math.random() * (max - min +1)) + min
      if(arr.includes(newNum) === true){
        i=i-1
      } else {
        arr.push(newNum)
      }
    }
  }

  randomlyAssignCards(Barr, 1, 16, 5)
  randomlyAssignCards(Iarr, 16, 31, 5)
  randomlyAssignCards(Narr, 31, 46, 4)
  randomlyAssignCards(Garr, 46, 61, 5)
  randomlyAssignCards(Oarr, 61, 76, 5)

  //highlights each number on the card and puts them in an array
  function handleClick(id) {
    if (selected.includes(id.target.id)){
      let index = selected.indexOf(id.target.id)
      selected.splice(index, 1)
      id.target.className = 'number-card'
    } else {
      selected.push(id.target.id)
      id.target.className = 'number-card-selected'
    }
  }

  function declareBingo() {
    //check if selected length is less than 5
    console.log(selected)
    if (selected.length < 5){
      return false
    }
    for (let i=0; i<winners.length; i++){
      if (winners[i].every(elem => selected.includes(elem))){
        return true
      } else if(i === winners.length - 1){
        return false
      } 
    }
  }

  function isCorrectNumbers() {
    const userNumbers = []
    selected.forEach(elem => userNumbers.push(parseInt(document.getElementById(elem).textContent)))
    const newArray = userNumbers.filter(function (value) {
      return !Number.isNaN(value);
    })
    if (newArray.every(elem => numbersDrawn.includes(elem))){
      return true
    } else {
      return false
    }
  }

  const updateMoney = async () => {
    const docRef = doc(db, "users", user.uid)
    await updateDoc(docRef, {
      money: (userData.money + pot),
      wins: (userData.wins + 1)
    })
  }

  function isAWinner(){
    if (isCorrectNumbers() === true && declareBingo() === true){
      alert(`Congrats you win $${pot}!!`)
      updateMoney()
      navigate("/")
    } else {
      alert('Sorry not a valid bingo')
    }
  }
  
  //Create a 5x5 grid
  //In each box assign a randomly selected number from values, no repeats
  //Need to optimize and not reuse lines
  return (
    <div id="game-card">
      <div id="game-columns">
      <div id="Column">
        <h2>B</h2>
        <p id='b0'className='number-card'onClick={(id) => handleClick(id)}>{Barr[0]}</p>
        <p id='b1'className='number-card' onClick={(id) => handleClick(id)}>{Barr[1]}</p>
        <p id='b2'className='number-card' onClick={(id) => handleClick(id)}>{Barr[2]}</p>
        <p id='b3'className='number-card' onClick={(id) => handleClick(id)}>{Barr[3]}</p>
        <p id='b4'className='number-card' onClick={(id) => handleClick(id)}>{Barr[4]}</p>
      </div>
      <div id="Column">
        <h2>I</h2>
        <p id='i0'className='number-card' onClick={(id) => handleClick(id)}>{Iarr[0]}</p>
        <p id='i1'className='number-card' onClick={(id) => handleClick(id)}>{Iarr[1]}</p>
        <p id='i2'className='number-card' onClick={(id) => handleClick(id)}>{Iarr[2]}</p>
        <p id='i3'className='number-card' onClick={(id) => handleClick(id)}>{Iarr[3]}</p>
        <p id='i4'className='number-card' onClick={(id) => handleClick(id)}>{Iarr[4]}</p>
      </div>
      <div id="Column">
        <h2>N</h2>
        <p id='n0'className='number-card' onClick={(id) => handleClick(id)}>{Narr[0]}</p>
        <p id='n1'className='number-card' onClick={(id) => handleClick(id)}>{Narr[1]}</p>
        <p id='n2'className='number-card' onClick={(id) => handleClick(id)}>Free Space</p>
        <p id='n3'className='number-card' onClick={(id) => handleClick(id)}>{Narr[2]}</p>
        <p id='n4'className='number-card' onClick={(id) => handleClick(id)}>{Narr[3]}</p>
      </div>
      <div id="Column">
      <h2>G</h2>
        <p id='g0'className='number-card' onClick={(id) => handleClick(id)}>{Garr[0]}</p>
        <p id='g1'className='number-card' onClick={(id) => handleClick(id)}>{Garr[1]}</p>
        <p id='g2'className='number-card' onClick={(id) => handleClick(id)}>{Garr[2]}</p>
        <p id='g3'className='number-card' onClick={(id) => handleClick(id)}>{Garr[3]}</p>
        <p id='g4'className='number-card' onClick={(id) => handleClick(id)}>{Garr[4]}</p>
      </div>
      <div id="Column">
      <h2>O</h2>
        <p id='o0'className='number-card' onClick={(id) => handleClick(id)}>{Oarr[0]}</p>
        <p id='o1'className='number-card' onClick={(id) => handleClick(id)}>{Oarr[1]}</p>
        <p id='o2'className='number-card' onClick={(id) => handleClick(id)}>{Oarr[2]}</p>
        <p id='o3'className='number-card' onClick={(id) => handleClick(id)}>{Oarr[3]}</p>
        <p id='o4'className='number-card' onClick={(id) => handleClick(id)}>{Oarr[4]}</p>
      </div>
      </div>
      <button onClick={() => isAWinner()} id="bingoBttn">BINGO!</button>
    </div>
  )
}

export default BingoCard