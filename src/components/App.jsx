import { useState } from 'react'
import CandyBar from './CandyBar'

function App() {
  
  // I am a JS comment
  /* I am also a JS comment */

  // let clicks = 0
  const [clicks, setClicks] = useState(0)
  const [candyBars, setCandyBars] = useState( ['100 Grand', 'Almond Joy', 'Snickers', 'Reese\'s Fast Break', 'Milky Way', 'Cookies and Cream Hershey\'s'] )

  const mappedCandy = candyBars.map(bar => <CandyBar key={bar} candy={bar} />)

  // clicks = "hamburger"
  // setClicks("hamburger")
  
  function handleClick() {
    setClicks(clicks + 1)
    console.log("clicks: ", clicks)
  }

  function handleMakeClicksGood() {
    setClicks("that was great")
    setCandyBars( candyBars + 'Three Musketeers' )
  }
  
  function handleReset() {
    setClicks(0)
  }

  return (
    <div className="App">

      {/* I am a JS comment but in JSX */}

      <h1>React State and Events</h1>

      <button onClick={handleClick} >You have clicked me {clicks} times</button>

      <button onClick={handleMakeClicksGood}>Make clicks pretty good</button>

      <button onClick={handleReset}>Reset clicks</button>

      { mappedCandy }

    </div>
  )
}

export default App
