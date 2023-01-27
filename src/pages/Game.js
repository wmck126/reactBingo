import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'

function Game() {
  const [currentDraw, setCurrentDraw] = useState("")



  return (
    <div>


      <BingoDraw />
      <BingoCard />
    </div>
    
  )
}

export default Game