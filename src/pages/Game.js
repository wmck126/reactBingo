import BingoDraw from '../components/BingoDraw'
import './Game.css'

function Game({numberCards, user, userData}) {
  
  return (
    <div>
        <BingoDraw 
          numberCards={numberCards}
          user={user}
          userData={userData}
        />
    </div>
  )
}

export default Game