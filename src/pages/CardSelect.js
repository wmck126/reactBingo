import React from 'react'
import { useNavigate } from 'react-router-dom'

function CardSelect({setNumberCards}) {
  const navigate = useNavigate()

  function handleChange(e) {
    setNumberCards(parseInt(e.target.value))
  }
  function handleClick() {
    navigate('/game')
  }
  return (
    <div>
      <label>How many cards would you like?</label>
      <select onChange={(e) => handleChange(e)}>
        <option selected>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button onClick={() => handleClick()}>Confirm</button>
      
    </div>
  )
}

export default CardSelect