import {useState, useEffect} from 'react'

function CurrentNumber({currentDraw}) {
  const [letterNumber, setLetterNumber] = useState ("")
  
  //puts a letter before the number when being called out 
  useEffect(() => {
    if (currentDraw >= 1 && currentDraw <= 15){
      setLetterNumber('B' + currentDraw)
    } else if (currentDraw >= 16 && currentDraw <=30){
      setLetterNumber('I' + currentDraw)
    } else if (currentDraw >=31 && currentDraw <=45){
      setLetterNumber('N' + currentDraw)
    } else if (currentDraw >=46 && currentDraw <=60){
      setLetterNumber('G' + currentDraw)
    } else if (currentDraw >=61 && currentDraw <=75){
      setLetterNumber('O' + currentDraw)
    }
  }, [currentDraw])
    
  
  return (
    <div>
      <h2 id="currentDrawNumber">{letterNumber}</h2>
      
    </div>
  )
}

export default CurrentNumber