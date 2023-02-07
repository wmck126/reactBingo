import React from 'react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  function handleClick() {
    return (
      navigate('/bingoCard')
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