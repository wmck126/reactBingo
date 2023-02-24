import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import './Game.css'

function Game({numberCards, user, userData}) {
  
  let rows = []
  const [numbersDrawn, setNumbersDrawn] = useState([])

  for(let i = 0; i<numberCards; i++){
      rows.push(<BingoCard numbersDrawn={numbersDrawn} user={user} userData={userData}/>)
  }

  return (
    <div>
      
      <div id="gameSpace">
        <BingoDraw numbersDrawn={numbersDrawn} setNumbersDrawn={setNumbersDrawn}/>
        <div id="gameCards">
          {rows}
        </div>
      </div>
    </div>
  )
}

export default Game