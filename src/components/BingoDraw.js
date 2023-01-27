import React from 'react'
import './BingoDraw.css'

function BingoDraw({numbersDrawn}) {

  function randomDrawing(){
    const randNumber = Math.floor(Math.random() * (76 - 1) + 1)
    if(numbersDrawn.includes(randNumber) === true){
      randomDrawing()
    } else {
      numbersDrawn.push(randNumber)
    }
    
    if (randNumber >= 1 && randNumber <= 15){
      alert('B' + randNumber)
    } else if (randNumber >= 16 && randNumber <=30){
      alert('I' + randNumber)
    } else if (randNumber >=31 && randNumber <=45){
      alert('N' + randNumber)
    } else if (randNumber >=46 && randNumber <=60){
      alert('G' + randNumber)
    } else if (randNumber >=61 && randNumber <=75){
      alert('O' + randNumber)
    }
  }

  function setRowNumbers(min, max){
    let row = []
    for (let i = min; i <= max; i++){
      row.push(i)
    }
    return row
  }
  const bRow = setRowNumbers(1, 15)
  const iRow = setRowNumbers(16, 30)
  const nRow = setRowNumbers(31, 45)
  const gRow = setRowNumbers(46, 60)
  const oRow = setRowNumbers(61, 75)

  return (
    <div id="container">
      <div id="bingo-list">
        <div id="B-Row">
          <h2>B</h2>
          {bRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="I-Row">
          <h2>I</h2>
          {iRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="N-Row">
          <h2>N</h2>
          {nRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="G-Row">
        <h2>G</h2>
        {gRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="O-Row">
        <h2>O</h2>
        {oRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
      </div>
      <button onClick={() => randomDrawing()}>Draw a number!</button>
    </div>
  )
}

export default BingoDraw