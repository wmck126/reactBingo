import {useEffect, useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import BotCard from '../components/BotCard'
import './Game.css'

function Game({numberCards, user, userData}) {
  
  let rows = []
  const [numbersDrawn, setNumbersDrawn] = useState([])
  const [currentDraw, setCurrentDraw] = useState(0)
  
  

  for(let i = 0; i<numberCards; i++){
      rows.push(<BingoCard numbersDrawn={numbersDrawn} user={user} userData={userData}/>)
  }

  return (
    <div>
      
      <div id="gameSpace">
        <BotCard numbersDrawn={numbersDrawn} currentDraw={currentDraw}/>
        <BingoDraw 
          numbersDrawn={numbersDrawn} 
          setNumbersDrawn={setNumbersDrawn} 
          currentDraw={currentDraw} 
          setCurrentDraw={setCurrentDraw}
        />
        <div id="gameCards">
          {rows}
        </div>
      </div>
    </div>
  )
}

export default Game