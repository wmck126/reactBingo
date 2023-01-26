import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  function handleClick() {
    console.log("clicked!")
    return (
      <Link to="/bingoCard" />
    )
  }
  
  return (
    <div>
      <h1>Bingo</h1>
      <button onClick={() => handleClick()}>New game</button>
    </div>
  )
}

export default Welcome