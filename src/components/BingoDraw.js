import {useState} from 'react'
import './BingoDraw.css'

function BingoDraw({numbersDrawn,setCurrentDraw}) {
  
  
  
  const [letterNumber, setLetterNumber] = useState ("")
  

  //random number selector
  function randomDrawing(){
    const randNumber = Math.floor(Math.random() * (76 - 1) + 1)
    if(numbersDrawn.includes(randNumber) === true){
      randomDrawing()
    } else {
      numbersDrawn.push(randNumber)
      setCurrentDraw(randNumber)
      document.getElementById(randNumber).style.backgroundColor = "blue"
      document.getElementById(randNumber).style.color = "white" 
      //adds the current number+letter pair drawn at top of page
      if (randNumber >= 1 && randNumber <= 15){
        setLetterNumber('B' + randNumber)
      } else if (randNumber >= 16 && randNumber <=30){
        setLetterNumber('I' + randNumber)
      } else if (randNumber >=31 && randNumber <=45){
        setLetterNumber('N' + randNumber)
      } else if (randNumber >=46 && randNumber <=60){
        setLetterNumber('G' + randNumber)
      } else if (randNumber >=61 && randNumber <=75){
        setLetterNumber('O' + randNumber)
      }
    }
  }

  //sets numbers to each row
  function setRowNumbers(min, max){
    let row = []
    for (let i = min; i <= max; i++){
      row.push(i)
    }
    return row
  }

  //assign numbers to each row on the board
  const bRow = setRowNumbers(1, 15)
  const iRow = setRowNumbers(16, 30)
  const nRow = setRowNumbers(31, 45)
  const gRow = setRowNumbers(46, 60)
  const oRow = setRowNumbers(61, 75)

  

  return (
    <div id="container">
      <h2 id="currentDrawNumber">{letterNumber}</h2>
      <div id="bingo-list">
        <div id="Row">
          <h2  id="letter">B</h2>
          {bRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="Row">
          <h2 id="letterI">I</h2>
          {iRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="Row">
          <h2 id="letterN">N</h2>
          {nRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="Row">
        <h2 id="letterG">G</h2>
        {gRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
        <div id="Row">
        <h2 id="letter">O</h2>
        {oRow.map((x) => (
            <p className='number' id={x}>{x}</p>
          ))}
        </div>
      </div>
      <button type='button' onClick={() => randomDrawing()}>Draw a number!</button>
    </div>
  )
}

export default BingoDraw