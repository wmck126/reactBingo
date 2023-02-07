import {useState} from 'react'
import BingoCard from '../components/BingoCard'
import BingoDraw from '../components/BingoDraw'
import { useNavigate } from 'react-router-dom'
import './Game.css'

function Game({numberCards}) {
  
  const navigate = useNavigate()
  let rows = []
  const [numbersDrawn, setNumbersDrawn] = useState([])

    for(let i = 0; i<numberCards; i++){
        rows.push(<BingoCard numbersDrawn={numbersDrawn} />)
    }

  function handleReturnToHome() {
    navigate('/')
  }

  return (
    <div>
      <div id="navbar">
        <img 
          id="bingoLogo" 
          src='https://img.freepik.com/free-vector/bingo-neon-lettering-explosion_1262-20711.jpg' 
          alt="bingoLogo"
          onClick={() => handleReturnToHome()}
        />
      </div>
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