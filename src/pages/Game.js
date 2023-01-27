import {useState, useEffect} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'

function Game() {
  const [currentDraw, setCurrentDraw] = useState("")
  const [numbersDrawn, setNumbersDrawn] = useState([])

  


  return (
    <div>


      <BingoDraw numbersDrawn={numbersDrawn} setCurrentDraw={setCurrentDraw} setNumbersDrawn={setNumbersDrawn} />
      <BingoCard />
    </div>
    
  )
}

export default Game