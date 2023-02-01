import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import CurrentNumber from '../components/CurrentNumber'
import './Game.css'

function Game() {
  
  const [numbersDrawn, setNumbersDrawn] = useState([])
  const [currentDraw, setCurrentDraw] = useState("")
  


  return (
    <div id="gameSpace">
      <CurrentNumber currentDraw={currentDraw}/>
      <BingoDraw numbersDrawn={numbersDrawn} setNumbersDrawn={setNumbersDrawn} setCurrentDraw={setCurrentDraw}/>
      <BingoCard />
    </div>
    
  )
}

export default Game