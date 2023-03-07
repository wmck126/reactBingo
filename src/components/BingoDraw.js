/* eslint-disable */
import {useState, useMemo, useEffect} from 'react'
import './BingoDraw.css'
import BingoCard from './BingoCard'
import { useNavigate } from 'react-router-dom'


function BingoDraw({numberCards, user, userData}) {
  const [currentDraw, setCurrentDraw] = useState(0)
  const [letterNumber, setLetterNumber] = useState ("")
  const numbersDrawn = []
  const navigate = useNavigate()
  let rows = []
  let bots =[]

  //creates bots to play against the user
  function BotCard(currentDraw, key) {
    
    const [selected, setSelected] = useState([`n2${key}`])

    const winners = [
      [`b0${key}`, `b1${key}`, `b2${key}`, `b3${key}`, `b4${key}`],
      [`i0${key}`, `i1${key}`, `i2${key}`, `i3${key}`, `i4${key}`],
      [`n0${key}`, `n1${key}`, `n2${key}`, `n3${key}`, `n4${key}`],
      [`g0${key}`, `g1${key}`, `g2${key}`, `g3${key}`, `g4${key}`],
      [`o0${key}`, `o1${key}`, `o2${key}`, `o3${key}`, `o4${key}`],
      [`b0${key}`, `i0${key}`, `n0${key}`, `g0${key}`, `o0${key}`],
      [`b1${key}`, `i1${key}`, `n1${key}`, `g1${key}`, `o1${key}`],
      [`b2${key}`, `i2${key}`, `n2${key}`, `g2${key}`, `o2${key}`],
      [`b3${key}`, `i3${key}`, `n3${key}`, `g3${key}`, `o3${key}`],
      [`b4${key}`, `i4${key}`, `n4${key}`, `g4${key}`, `o4${key}`],
      [`b0${key}`, `g3${key}`, `i1${key}`, `n2${key}`, `o4${key}`],
      [`b4${key}`, `g1${key}`, `i3${key}`, `n2${key}`, `o0${key}`]
    ]
    
    

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
      randomlyAssignCards(Narr, 31, 46, 3)
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
          handleSelect(bID)
        }
      }
      for(let i =0; i<I.length; i++){
        if (currentDraw === I[i]){
          let iID = `i${i}${key}`
          handleSelect(iID)
        }
      }
      for(let i =0; i<N.length; i++){
        if (currentDraw === N[i]){
          let nID = `n${i}${key}`
          handleSelect(nID)
        }
      }
      for(let i =0; i<G.length; i++){
        if (currentDraw === G[i]){
          let gID = `g${i}${key}`
          handleSelect(gID)
        }
      }
      for(let i =0; i<O.length; i++){
        if (currentDraw === O[i]){
          let oID = `o${i}${key}`
          handleSelect(oID)
        }
      }
    }, [currentDraw])

    function handleSelect(id) {
      const selectedNumber = document.getElementById(id)
      const style = selectedNumber.style
      setSelected([...selected, id])
      style.backgroundColor = 'blue'
      style.color = 'white'
    }

    function declareBingo() {
      //check if selected length is less than 5
      if (selected.length < 5){
        return false
      }
      for (let i=0; i<winners.length; i++){
        if (winners[i].every(elem => selected.includes(elem))){
          return true
        } else if(i === winners.length - 1){
          return false
        } 
      }
    }

    function isCorrectNumbers() {
      const userNumbers = []
      selected.forEach(elem => userNumbers.push(parseInt(document.getElementById(elem).textContent)))
      const newArray = userNumbers.filter(function (value) {
        return !Number.isNaN(value);
      })
      if (newArray.every(elem => numbersDrawn.includes(elem))){
        return true
      } else {
        return false
      }
    }

    function isAWinner(){
      if (isCorrectNumbers() === true && declareBingo() === true){
        alert("Bot had bingo, better luck next time!")
        navigate("/")
      } else {
        return
      }
    }

    useEffect(() => {
      isAWinner()
    }, [selected])


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
            <p id={`n2${key}`} style={{backgroundColor:'blue' ,color:'white'}}>Free Space</p>
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
      console.log(numbersDrawn)
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