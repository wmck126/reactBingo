import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import BotCard from '../components/BotCard'
import './Game.css'

function Game({numberCards, user, userData}) {
  
  let rows = []
  const [numbersDrawn, setNumbersDrawn] = useState([])
  const [currentDraw, setCurrentDraw] = useState([])
  

  for(let i = 0; i<numberCards; i++){
      rows.push(<BingoCard numbersDrawn={numbersDrawn} user={user} userData={userData} key={i}/>)
  }

/*
  able to get bot to auto select spaces, but can't get more than one bot due to local storage/useMemo
  if there is a way to have each bot card render independently that would work
  maybe use a localstorage(`B${i}`) so it would have independent storage spaces per the bot component key
  Also need to refactor player cards the same way so change of state doesn't rerender those components
*/
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