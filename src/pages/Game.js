import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'

function Game() {
  
  const [numbersDrawn, setNumbersDrawn] = useState([])

  


  return (
    <div>
      <BingoDraw numbersDrawn={numbersDrawn} setNumbersDrawn={setNumbersDrawn} />
      <BingoCard />
    </div>
    
  )
}

export default Game