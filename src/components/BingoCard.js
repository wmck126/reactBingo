import React from 'react'
import "./BingoCard.css"

function BingoCard() {
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
    ['b3', 'i3', 'n3', 'g3', 'o3'],
    ['b4', 'i4', 'n4', 'g4', 'o4'],
    ['b0', 'i1', 'n2', 'g3', 'o4'],
    ['b4', 'i3', 'n2', 'g1', 'o0']
  ]
  
  const selected = []



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


  function handleClick(id) {
    console.log(selected)

    const style = id.target.style
    if (selected.includes(id.target.id)){
      let index = selected.indexOf(id.target.id)
      selected.splice(index, 1)
      style.backgroundColor = ''
      style.color = 'black'
    } else {
      selected.push(id.target.id)
      style.backgroundColor = 'blue'
      style.color = 'white'
    }
  }

  function declareBingo() {
    console.log("clicked")
    if (selected.length < 5){
      console.log(false)
      return 
    }
    let winnersCounter = 0
    let array = 0
    
    //compare two arrays and see if all 
    //values in one array of the winners appears in the users selected array
    for (let i = 0; i<selected.length; i++){
      
      console.log('array', array)
      console.log('winnerscounter', winnersCounter)
      if (i === 5){
        console.log('bingo!')
        return
      } else if (selected[i] === winners[array][winnersCounter]){
        winnersCounter++
        console.log('selected', selected[i])
        console.log('winnners', winners[array][winnersCounter])
        console.log('increasing winners')
      }  
      else if (selected[i] !== winners[array][winnersCounter]){
        array++
        i=0
        winnersCounter = 0
        console.log('increasing array')
      }
      
    }
  }

  //Create a 5x5 grid
  //In each box assign a randomly selected number from values, no repeats
  //Need to optimize and not reuse lines
  return (
    <div id="game-card">
      <div id="game-columns">
      <div id="B-Column">
        <h2>B</h2>
        <p id='b0' onClick={(id) => handleClick(id)}>{Barr[0]}</p>
        <p id='b1' onClick={(id) => handleClick(id)}>{Barr[1]}</p>
        <p id='b2' onClick={(id) => handleClick(id)}>{Barr[2]}</p>
        <p id='b3' onClick={(id) => handleClick(id)}>{Barr[3]}</p>
        <p id='b4' onClick={(id) => handleClick(id)}>{Barr[4]}</p>
      </div>
      <div id="I-Column">
        <h2>I</h2>
        <p id='i0' onClick={(id) => handleClick(id)}>{Iarr[0]}</p>
        <p id='i1' onClick={(id) => handleClick(id)}>{Iarr[1]}</p>
        <p id='i2' onClick={(id) => handleClick(id)}>{Iarr[2]}</p>
        <p id='i3' onClick={(id) => handleClick(id)}>{Iarr[3]}</p>
        <p id='i4' onClick={(id) => handleClick(id)}>{Iarr[4]}</p>
      </div>
      <div id="N-Column">
        <h2>N</h2>
        <p id='n0' onClick={(id) => handleClick(id)}>{Narr[0]}</p>
        <p id='n1' onClick={(id) => handleClick(id)}>{Narr[1]}</p>
        <p id='n2' onClick={(id) => handleClick(id)}>Free Space</p>
        <p id='n3' onClick={(id) => handleClick(id)}>{Narr[2]}</p>
        <p id='n4' onClick={(id) => handleClick(id)}>{Narr[3]}</p>
      </div>
      <div id="G-Column">
      <h2>G</h2>
        <p id='g0' onClick={(id) => handleClick(id)}>{Garr[0]}</p>
        <p id='g1' onClick={(id) => handleClick(id)}>{Garr[1]}</p>
        <p id='g2' onClick={(id) => handleClick(id)}>{Garr[2]}</p>
        <p id='g3' onClick={(id) => handleClick(id)}>{Garr[3]}</p>
        <p id='g4' onClick={(id) => handleClick(id)}>{Garr[4]}</p>
      </div>
      <div id="O-Column">
      <h2>O</h2>
        <p id='o0' onClick={(id) => handleClick(id)}>{Oarr[0]}</p>
        <p id='o1' onClick={(id) => handleClick(id)}>{Oarr[1]}</p>
        <p id='o2' onClick={(id) => handleClick(id)}>{Oarr[2]}</p>
        <p id='o3' onClick={(id) => handleClick(id)}>{Oarr[3]}</p>
        <p id='o4' onClick={(id) => handleClick(id)}>{Oarr[4]}</p>
      </div>
      </div>
      <button onClick={() => declareBingo()} id="bingoBttn">BINGO!</button>
    </div>
  )
}

export default BingoCard