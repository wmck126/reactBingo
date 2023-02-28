import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function BotCard({numbersDrawn, currentDraw}) {
  const Barr = []
  const Iarr = []
  const Narr = []
  const Garr = []
  const Oarr = []

  const winners = [
    ['b0', 'b1', 'b2', 'b3', 'b4'],
    ['i0', 'i1', 'i2', 'i3', 'i4'],
    ['n0', 'n1', 'n2', 'n3', 'n4'],
    ['g0', 'g1', 'g2', 'g3', 'g4'],
    ['o0', 'o1', 'o2', 'o3', 'o4'],
    ['b0', 'i0', 'n0', 'g0', 'o0'],
    ['b1', 'i1', 'n1', 'g1', 'o1'],
    ['b2', 'i2', 'n2', 'g2', 'o2'],
    ['b3', 'g3', 'i3', 'n3', 'o3'],
    ['b4', 'g4', 'i4', 'n4', 'o4'],
    ['b0', 'g3', 'i1', 'n2', 'o4'],
    ['b4', 'g1', 'i3', 'n2', 'o0']
  ]
  
  const selected = []

  //randomly assigned numbers to each column on the card w/o repeating
  function randomlyAssignCards(arr, max, min, iter){
    for(let i=0; i<=iter; i++){
      const newNum = Math.floor(Math.random() * (max - min +1)) + min
      if(arr.includes(newNum) === true){
        i=i-1
      } else {
        arr.push(newNum)
      }
    }
  }

  randomlyAssignCards(Barr, 1, 16, 5)
  randomlyAssignCards(Iarr, 16, 31, 5)
  randomlyAssignCards(Narr, 31, 46, 4)
  randomlyAssignCards(Garr, 46, 61, 5)
  randomlyAssignCards(Oarr, 61, 76, 5)

  useEffect(() => {
    console.log(Barr)
    console.log(currentDraw)
    for(let i =0; i<Barr.length; i++){
      if (currentDraw === Barr[i]){
        console.log('Bot has it!')
        let bID = `b${i}`
        handleSelect(bID)
      }
      
    }
    for(let i =0; i<Iarr.length; i++){
      if (currentDraw === Iarr[i]){
        console.log('Bot has it!')
        let iID = `i${i}`
        handleSelect(iID)
      }
      
    }
    for(let i =0; i<Narr.length; i++){
      if (currentDraw === Narr[i]){
        console.log('Bot has it!')
        let nID = `n${i}`
        handleSelect(nID)
      }
      
    }
    for(let i =0; i<Garr.length; i++){
      if (currentDraw === Garr[i]){
        console.log('Bot has it!')
        let gID = `g${i}`
        handleSelect(gID)
      }
    }
    for(let i =0; i<Oarr.length; i++){
      if (currentDraw === Oarr[i]){
        console.log('Bot has it!')
        let oID = `o${i}`
        handleSelect(oID)
      }
    }
  }, [currentDraw])

  function handleSelect(id) {
    const selectedNumber = document.getElementById(id)
    console.log(selectedNumber)
    const style = selectedNumber.style
    selected.push(selectedNumber)
    style.backgroundColor = 'blue'
    style.color = 'white'
  }



  return (
    <div>
      <div id="game-card">
        <div id="game-columns">
        <div id="B-Column">
          <h2>B</h2>
          <p id='b0'>{Barr[0]}</p>
          <p id='b1'>{Barr[1]}</p>
          <p id='b2'>{Barr[2]}</p>
          <p id='b3'>{Barr[3]}</p>
          <p id='b4'>{Barr[4]}</p>
        </div>
        <div id="I-Column">
          <h2>I</h2>
          <p id='i0'>{Iarr[0]}</p>
          <p id='i1'>{Iarr[1]}</p>
          <p id='i2'>{Iarr[2]}</p>
          <p id='i3'>{Iarr[3]}</p>
          <p id='i4'>{Iarr[4]}</p>
        </div>
        <div id="N-Column">
          <h2>N</h2>
          <p id='n0'>{Narr[0]}</p>
          <p id='n1'>{Narr[1]}</p>
          <p id='n2'>Free Space</p>
          <p id='n3'>{Narr[2]}</p>
          <p id='n4'>{Narr[3]}</p>
        </div>
        <div id="G-Column">
        <h2>G</h2>
          <p id='g0'>{Garr[0]}</p>
          <p id='g1'>{Garr[1]}</p>
          <p id='g2'>{Garr[2]}</p>
          <p id='g3'>{Garr[3]}</p>
          <p id='g4'>{Garr[4]}</p>
        </div>
        <div id="O-Column">
        <h2>O</h2>
          <p id='o0'>{Oarr[0]}</p>
          <p id='o1'>{Oarr[1]}</p>
          <p id='o2'>{Oarr[2]}</p>
          <p id='o3'>{Oarr[3]}</p>
          <p id='o4'>{Oarr[4]}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BotCard