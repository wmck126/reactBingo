import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import './Game.css'

function Game() {
  
  
  const [currentDraw, setCurrentDraw] = useState("")
  


  return (
    <div id="gameSpace">
      <BingoDraw setCurrentDraw={setCurrentDraw}/>
      <BingoCard />
    </div>
    
  )
}

export default Game