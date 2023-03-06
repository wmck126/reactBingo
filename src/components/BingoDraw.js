/* eslint-disable */
import {useState, useMemo, useEffect} from 'react'
import './BingoDraw.css'
import BingoCard from './BingoCard'


function BingoDraw({numberCards, user, userData}) {
  const [currentDraw, setCurrentDraw] = useState(0)
  const [letterNumber, setLetterNumber] = useState ("")
  let rows = []
  let bots =[]
  const numbersDrawn = []

//Testing botcard within the bingodraw to prevent rerendering
  function BotCard(currentDraw, key) {
    

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
      const Barr = []
      const Iarr = []
      const Narr = []
      const Garr = []
      const Oarr = []
      randomlyAssignCards(Barr, 1, 16, 4)
      randomlyAssignCards(Iarr, 16, 31, 4)
      randomlyAssignCards(Narr, 31, 46, 4)
      randomlyAssignCards(Garr, 46, 61, 4)
      randomlyAssignCards(Oarr, 61, 76, 4)
      localStorage.setItem(`savedB${key}`, JSON.stringify(Barr))
      localStorage.setItem(`savedI${key}`, JSON.stringify(Iarr))
      localStorage.setItem(`savedN${key}`, JSON.stringify(Narr))
      localStorage.setItem(`savedG${key}`, JSON.stringify(Garr))
      localStorage.setItem(`savedO${key}`, JSON.stringify(Oarr))
    }, [key])
      
    const B = JSON.parse(localStorage.getItem(`savedB${key}`))
      const I = JSON.parse(localStorage.getItem(`savedI${key}`))
      const N = JSON.parse(localStorage.getItem(`savedN${key}`))
      const G = JSON.parse(localStorage.getItem(`savedG${key}`))
      const O = JSON.parse(localStorage.getItem(`savedO${key}`))

    useEffect(() => {
      
      for(let i =0; i<B.length; i++){
        if (currentDraw === B[i]){
          let bID = `b${i}${key}`
          console.log('Bot has it!', bID)
          handleSelect(bID)
        }
        
      }
      for(let i =0; i<I.length; i++){
        if (currentDraw === I[i]){
          let iID = `i${i}${key}`
          console.log('Bot has it!', iID)
          handleSelect(iID)
        }
        
      }
      for(let i =0; i<N.length; i++){
        if (currentDraw === N[i]){
          let nID = `n${i}${key}`
          console.log('Bot has it!', nID)
          handleSelect(nID)
        }
        
      }
      for(let i =0; i<G.length; i++){
        if (currentDraw === G[i]){
          let gID = `g${i}${key}`
          console.log('Bot has it!', gID)
          handleSelect(gID)
        }
      }
      for(let i =0; i<O.length; i++){
        if (currentDraw === O[i]){
          
          let oID = `o${i}${key}`
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
      <div id={key}>
        <div id="game-card">
          <div id="game-columns">
          <div id="B-Column">
            <h2>B</h2>
            <p id={`b0${key}`}>{B[0]}</p>
            <p id={`b1${key}`}>{B[1]}</p>
            <p id={`b2${key}`}>{B[2]}</p>
            <p id={`b3${key}`}>{B[3]}</p>
            <p id={`b4${key}`}>{B[4]}</p>
          </div>
          <div id="I-Column">
            <h2>I</h2>
            <p id={`i0${key}`}>{I[0]}</p>
            <p id={`i1${key}`}>{I[1]}</p>
            <p id={`i2${key}`}>{I[2]}</p>
            <p id={`i3${key}`}>{I[3]}</p>
            <p id={`i4${key}`}>{I[4]}</p>
          </div>
          <div id="N-Column">
            <h2>N</h2>
            <p id={`n0${key}`}>{N[0]}</p>
            <p id={`n1${key}`}>{N[1]}</p>
            <p id='n2' style={{backgroundColor:'blue' ,color:'white'}}>Free Space</p>
            <p id={`n3${key}`}>{N[2]}</p>
            <p id={`n4${key}`}>{N[3]}</p>
          </div>
          <div id="G-Column">
          <h2>G</h2>
            <p id={`g0${key}`}>{G[0]}</p>
            <p id={`g1${key}`}>{G[1]}</p>
            <p id={`g2${key}`}>{G[2]}</p>
            <p id={`g3${key}`}>{G[3]}</p>
            <p id={`g4${key}`}>{G[4]}</p>
          </div>
          <div id="O-Column">
          <h2>O</h2>
            <p id={`o0${key}`}>{O[0]}</p>
            <p id={`o1${key}`}>{O[1]}</p>
            <p id={`o2${key}`}>{O[2]}</p>
            <p id={`o3${key}`}>{O[3]}</p>
            <p id={`o4${key}`}>{O[4]}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }

  for(let i = 0; i<numberCards; i++){
      rows.push(<BingoCard numbersDrawn={numbersDrawn} user={user} userData={userData} key={i}/>)
  }

  for(let i = 0; i<3; i++){
    bots.push(BotCard(currentDraw, i))
  } 
  

  //random number selector
  function randomDrawing(){
    const randNumber = Math.floor(Math.random() * (76 - 1) + 1)
    if(numbersDrawn.includes(randNumber) === true){
      randomDrawing()
    } else {
      numbersDrawn.push(randNumber)
      setCurrentDraw(randNumber)
      document.getElementById(randNumber).style.backgroundColor = "blue"
      document.getElementById(randNumber).style.color = "white" 
      //adds the current number+letter pair drawn at top of page
      if (randNumber >= 1 && randNumber <= 15){
        setLetterNumber('B' + randNumber)
      } else if (randNumber >= 16 && randNumber <=30){
        setLetterNumber('I' + randNumber)
      } else if (randNumber >=31 && randNumber <=45){
        setLetterNumber('N' + randNumber)
      } else if (randNumber >=46 && randNumber <=60){
        setLetterNumber('G' + randNumber)
      } else if (randNumber >=61 && randNumber <=75){
        setLetterNumber('O' + randNumber)
      }
    }
  }

  //sets numbers to each row
  function setRowNumbers(min, max){
    let row = []
    for (let i = min; i <= max; i++){
      row.push(i)
    }
    return row
  }

  //assign numbers to each row on the board
  const bRow = setRowNumbers(1, 15)
  const iRow = setRowNumbers(16, 30)
  const nRow = setRowNumbers(31, 45)
  const gRow = setRowNumbers(46, 60)
  const oRow = setRowNumbers(61, 75)

  

  return (
    <div id='gamespace'>
      
      <h4 className='section-title'>Bots</h4>
      <div className='botcards'>
        {bots}
      </div>
      <div id="container">
        <h2 id="currentDrawNumber">{letterNumber}</h2>
        <div id="bingo-list">
          <div id="Row">
            <h2  id="letter">B</h2>
            {bRow.map((x) => (
              <p className='number' id={x}>{x}</p>
            ))}
          </div>
          <div id="Row">
            <h2 id="letterI">I</h2>
            {iRow.map((x) => (
              <p className='number' id={x}>{x}</p>
            ))}
          </div>
          <div id="Row">
            <h2 id="letterN">N</h2>
            {nRow.map((x) => (
              <p className='number' id={x}>{x}</p>
            ))}
          </div>
          <div id="Row">
          <h2 id="letterG">G</h2>
          {gRow.map((x) => (
              <p className='number' id={x}>{x}</p>
            ))}
          </div>
          <div id="Row">
          <h2 id="letter">O</h2>
          {oRow.map((x) => (
              <p className='number' id={x}>{x}</p>
            ))}
          </div>
        </div>
        <button type='button' onClick={() => randomDrawing()}>Draw a number!</button>
      </div>
      
      <h4 className='section-title'>Your Cards</h4>
      <div id="gameCards">
      
          {rows}
      </div>
    </div>
  )
}

export default BingoDraw