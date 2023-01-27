import React from 'react'
import './BingoDraw.css'

function BingoDraw() {

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
  console.log(bRow)
  return (
    <div id="bingo-list">
      <div id="B-Row">
        <h2>B</h2>
        {bRow.map((x) => (
          <p id="number">{x}</p>
        ))}
      </div>
      <div id="I-Row">
        <h2>I</h2>
        {iRow.map((x) => (
          <p id="number">{x}</p>
        ))}
      </div>
      <div id="N-Row">
        <h2>N</h2>
        {nRow.map((x) => (
          <p id="number">{x}</p>
        ))}
      </div>
      <div id="G-Row">
      <h2>G</h2>
      {gRow.map((x) => (
          <p id="number">{x}</p>
        ))}
      </div>
      <div id="O-Row">
      <h2>O</h2>
      {oRow.map((x) => (
          <p id="number">{x}</p>
        ))}
      </div>
    </div>
  )
}

export default BingoDraw