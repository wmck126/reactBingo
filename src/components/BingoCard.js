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

  function handleClick(id) {
    const style = id.target.style
    style.backgroundColor = 'blue'
    style.color = 'white'
  }

  //Create a 5x5 grid
  //In each box assign a randomly selected number from values, no repeats
  return (
    <div id="game-card">
      <div id="B-Column">
        <h2>B</h2>
        <p id='b0' onClick={(id) => handleClick(id)}>{Barr[0]}</p>
        <p id='b1' onClick={(id) => handleClick(id)}>{Barr[1]}</p>
        <p id='b2' onClick={(id) => handleClick(id)}>{Barr[2]}</p>
        <p id='b3' onClick={(id) => handleClick(id)}>{Barr[3]}</p>
        <p id='b4' onClick={(id) => handleClick(id)}>{Barr[4]}</p>
      </div>
      <div id="I-Column">
        <h2>I</h2>
        <p id='i0' onClick={(id) => handleClick(id)}>{Iarr[0]}</p>
        <p id='i1' onClick={(id) => handleClick(id)}>{Iarr[1]}</p>
        <p id='i2' onClick={(id) => handleClick(id)}>{Iarr[2]}</p>
        <p id='i3' onClick={(id) => handleClick(id)}>{Iarr[3]}</p>
        <p id='i4' onClick={(id) => handleClick(id)}>{Iarr[4]}</p>
      </div>
      <div id="N-Column">
        <h2>N</h2>
        <p id='n0' onClick={(id) => handleClick(id)}>{Narr[0]}</p>
        <p id='n1' onClick={(id) => handleClick(id)}>{Narr[1]}</p>
        <p id='n2' onClick={(id) => handleClick(id)}>Free Space</p>
        <p id='n3' onClick={(id) => handleClick(id)}>{Narr[2]}</p>
        <p id='n4' onClick={(id) => handleClick(id)}>{Narr[3]}</p>
      </div>
      <div id="G-Column">
      <h2>G</h2>
        <p id='g0' onClick={(id) => handleClick(id)}>{Garr[0]}</p>
        <p id='g1' onClick={(id) => handleClick(id)}>{Garr[1]}</p>
        <p id='g2' onClick={(id) => handleClick(id)}>{Garr[2]}</p>
        <p id='g3' onClick={(id) => handleClick(id)}>{Garr[3]}</p>
        <p id='g4' onClick={(id) => handleClick(id)}>{Garr[4]}</p>
      </div>
      <div id="O-Column">
      <h2>O</h2>
        <p id='o0' onClick={(id) => handleClick(id)}>{Oarr[0]}</p>
        <p id='o1' onClick={(id) => handleClick(id)}>{Oarr[1]}</p>
        <p id='o2' onClick={(id) => handleClick(id)}>{Oarr[2]}</p>
        <p id='o3' onClick={(id) => handleClick(id)}>{Oarr[3]}</p>
        <p id='o4' onClick={(id) => handleClick(id)}>{Oarr[4]}</p>
      </div>
    </div>
  )
}

export default BingoCard