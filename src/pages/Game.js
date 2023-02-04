import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import './Game.css'

function Game() {
  
  const [numbersDrawn, setNumbersDrawn] = useState([])
  const [currentDraw, setCurrentDraw] = useState("")


  return (
    <div id="gameSpace">
      <BingoDraw setCurrentDraw={setCurrentDraw} numbersDrawn={numbersDrawn} setNumbersDrawn={setNumbersDrawn}/>
      <BingoCard numbersDrawn={numbersDrawn} />
    </div>
    
  )
}

export default Game