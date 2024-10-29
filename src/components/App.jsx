import { useState } from 'react'
import CandyBar from './CandyBar'

function App() {
  
  // I am a JS comment
  /* I am also a JS comment */

  // let clicks = 0
  const [clicks, setClicks] = useState(0)
  const [candyBars, setCandyBars] = useState( ['100 Grand', 'Almond Joy', 'Snickers', 'Reese\'s Fast Break', 'Milky Way', 'Cookies and Cream Hershey\'s'] )

  const mappedCandy = candyBars.map(bar => <CandyBar key={bar} candy={bar} /> )

  // clicks = "hamburger"
  // setClicks("hamburger")
  
  function handleClick() {
    setClicks(clicks + 1)
    console.log("clicks: ", clicks)
  }

  function handleAddNewCandy() {
    setCandyBars( [...candyBars, 'Reese\'s'] )
  }
  
  function handleReset() {
    setClicks(0)
  }

  function handleSortCandies() {
    const sortedCandy = [...candyBars].sort((candyA, candyB) => candyA > candyB)
    setCandyBars(sortedCandy)
  }

  return (
    <div className="App">

      {/* I am a JS comment but in JSX */}

      <h1>React State and Events</h1>

      <button onClick={handleClick} >You have clicked me {clicks} times</button>

      <button onClick={handleAddNewCandy}>Add New Reese's</button>

      <button onClick={handleReset}>Reset clicks</button>

      <button onClick={handleSortCandies}>Sort Candy Bars</button>

      { mappedCandy }

    </div>
  )
}

export default App
