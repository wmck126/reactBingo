import BingoDraw from '../components/BingoDraw'
import BingoCard from '../components/BingoCard'
import './Game.css'

function Game({numberCards, user, userData, difficulty}) {
  let rows = []
  const numbersDrawn = []

  for(let i = 0; i<numberCards; i++){
    rows.push(<BingoCard numbersDrawn={numbersDrawn} user={user} userData={userData} key={i}/>)
}
  
  return (
    <div>
      <BingoDraw 
        numberCards={numberCards}
        user={user}
        userData={userData}
        numbersDrawn={numbersDrawn}
        difficulty={difficulty}
      />
      <div id="gameCards">
        {rows}
      </div>
    </div>
  )
}

export default Game