import {useState, useEffect} from 'react'
import './BingoDraw.css'

function BingoDraw() {
  
  const [numbersDrawn, setNumbersDrawn] = useState([])
  const [currentDraw, setCurrentDraw] = useState("")
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
    }
  }

  //adds the current number+letter pair drawn at top of page
  useEffect(() => {
    if (currentDraw >= 1 && currentDraw <= 15){
      setLetterNumber('B' + currentDraw)
    } else if (currentDraw >= 16 && currentDraw <=30){
      setLetterNumber('I' + currentDraw)
    } else if (currentDraw >=31 && currentDraw <=45){
      setLetterNumber('N' + currentDraw)
    } else if (currentDraw >=46 && currentDraw <=60){
      setLetterNumber('G' + currentDraw)
    } else if (currentDraw >=61 && currentDraw <=75){
      setLetterNumber('O' + currentDraw)
    }
  }, [currentDraw])


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