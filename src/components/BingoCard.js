import React from 'react'
import "./BingoCard.css"

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

function BingoCard() {
  const Barr = []
  const Iarr = []
  const Narr = []
  const Garr = []
  const Oarr = []

  randomlyAssignCards(Barr, 1, 16, 5)
  randomlyAssignCards(Iarr, 16, 31, 5)
  randomlyAssignCards(Narr, 31, 46, 4)
  randomlyAssignCards(Garr, 46, 61, 5)
  randomlyAssignCards(Oarr, 61, 76, 5)


  //Create a 5x5 grid
  //In each box assign a randomly selected number from values, no repeats
  return (
    <div id="game-card">
      <div id="B-Column">
        <h2>B</h2>
        <p>{Barr[0]}</p>
        <p>{Barr[1]}</p>
        <p>{Barr[2]}</p>
        <p>{Barr[3]}</p>
        <p>{Barr[4]}</p>
      </div>
      <div id="I-Column">
        <h2>I</h2>
        <p>{Iarr[0]}</p>
        <p>{Iarr[1]}</p>
        <p>{Iarr[2]}</p>
        <p>{Iarr[3]}</p>
        <p>{Iarr[4]}</p>
      </div>
      <div id="N-Column">
        <h2>N</h2>
        <p>{Narr[0]}</p>
        <p>{Narr[1]}</p>
        <p>Free Space</p>
        <p>{Narr[2]}</p>
        <p>{Narr[3]}</p>
      </div>
      <div id="G-Column">
      <h2>G</h2>
        <p>{Garr[0]}</p>
        <p>{Garr[1]}</p>
        <p>{Garr[2]}</p>
        <p>{Garr[3]}</p>
        <p>{Garr[4]}</p>
      </div>
      <div id="O-Column">
      <h2>O</h2>
        <p>{Oarr[0]}</p>
        <p>{Oarr[1]}</p>
        <p>{Oarr[2]}</p>
        <p>{Oarr[3]}</p>
        <p>{Oarr[4]}</p>
      </div>
    </div>
  )
}

export default BingoCard