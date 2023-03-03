import React, { useEffect, useMemo } from 'react'

function BotCard({currentDraw}) {
  const Barr = []
  const Iarr = []
  const Narr = []
  const Garr = []
  const Oarr = []

  // const winners = [
  //   ['b0', 'b1', 'b2', 'b3', 'b4'],
  //   ['i0', 'i1', 'i2', 'i3', 'i4'],
  //   ['n0', 'n1', 'n2', 'n3', 'n4'],
  //   ['g0', 'g1', 'g2', 'g3', 'g4'],
  //   ['o0', 'o1', 'o2', 'o3', 'o4'],
  //   ['b0', 'i0', 'n0', 'g0', 'o0'],
  //   ['b1', 'i1', 'n1', 'g1', 'o1'],
  //   ['b2', 'i2', 'n2', 'g2', 'o2'],
  //   ['b3', 'g3', 'i3', 'n3', 'o3'],
  //   ['b4', 'g4', 'i4', 'n4', 'o4'],
  //   ['b0', 'g3', 'i1', 'n2', 'o4'],
  //   ['b4', 'g1', 'i3', 'n2', 'o0']
  // ]
  
  const selected = ['n2']

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

  useMemo(() => {
    randomlyAssignCards(Barr, 1, 16, 4)
    randomlyAssignCards(Iarr, 16, 31, 4)
    randomlyAssignCards(Narr, 31, 46, 4)
    randomlyAssignCards(Garr, 46, 61, 4)
    randomlyAssignCards(Oarr, 61, 76, 4)
    localStorage.setItem('savedB', JSON.stringify(Barr))
    localStorage.setItem('savedI', JSON.stringify(Iarr))
    localStorage.setItem('savedN', JSON.stringify(Narr))
    localStorage.setItem('savedG', JSON.stringify(Garr))
    localStorage.setItem('savedO', JSON.stringify(Oarr))
  }, [])
    
  const B = JSON.parse(localStorage.getItem('savedB'))
  console.log(B)
  const I = JSON.parse(localStorage.getItem('savedI'))
  const N = JSON.parse(localStorage.getItem('savedN'))
  const G = JSON.parse(localStorage.getItem("savedG"))
  const O = JSON.parse(localStorage.getItem('savedO'))

  useEffect(() => {
    for(let i =0; i<B.length; i++){
      if (currentDraw === B[i]){
        let bID = `b${i}`
        console.log('Bot has it!', bID)
        handleSelect(bID)
      }
      
    }
    for(let i =0; i<I.length; i++){
      if (currentDraw === I[i]){
        let iID = `i${i}`
        console.log('Bot has it!', iID)
        handleSelect(iID)
      }
      
    }
    for(let i =0; i<N.length; i++){
      if (currentDraw === N[i]){
        let nID = `n${i}`
        console.log('Bot has it!', nID)
        handleSelect(nID)
      }
      
    }
    for(let i =0; i<G.length; i++){
      if (currentDraw === G[i]){
        let gID = `g${i}`
        console.log('Bot has it!', gID)
        handleSelect(gID)
      }
    }
    for(let i =0; i<O.length; i++){
      if (currentDraw === O[i]){
        
        let oID = `o${i}`
        console.log('Bot has it!', oID)
        handleSelect(oID)
      }
    }
    console.log(selected)
  }, [currentDraw])

  function handleSelect(id) {
    const selectedNumber = document.getElementById(id)
    console.log(selectedNumber)
    const style = selectedNumber.style
    selected.push(id)
    style.backgroundColor = 'blue'
    style.color = 'white'
  }


  return (
    <div>
      <div id="game-card">
        <div id="game-columns">
        <div id="B-Column">
          <h2>B</h2>
          <p id='b0'>{B[0]}</p>
          <p id='b1'>{B[1]}</p>
          <p id='b2'>{B[2]}</p>
          <p id='b3'>{B[3]}</p>
          <p id='b4'>{B[4]}</p>
        </div>
        <div id="I-Column">
          <h2>I</h2>
          <p id='i0'>{I[0]}</p>
          <p id='i1'>{I[1]}</p>
          <p id='i2'>{I[2]}</p>
          <p id='i3'>{I[3]}</p>
          <p id='i4'>{I[4]}</p>
        </div>
        <div id="N-Column">
          <h2>N</h2>
          <p id='n0'>{N[0]}</p>
          <p id='n1'>{N[1]}</p>
          <p id='n2' style={{backgroundColor:'blue' ,color:'white'}}>Free Space</p>
          <p id='n3'>{N[2]}</p>
          <p id='n4'>{N[3]}</p>
        </div>
        <div id="G-Column">
        <h2>G</h2>
          <p id='g0'>{G[0]}</p>
          <p id='g1'>{G[1]}</p>
          <p id='g2'>{G[2]}</p>
          <p id='g3'>{G[3]}</p>
          <p id='g4'>{G[4]}</p>
        </div>
        <div id="O-Column">
        <h2>O</h2>
          <p id='o0'>{O[0]}</p>
          <p id='o1'>{O[1]}</p>
          <p id='o2'>{O[2]}</p>
          <p id='o3'>{O[3]}</p>
          <p id='o4'>{O[4]}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BotCard