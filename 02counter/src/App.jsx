import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 5

  const addValue = function () {
    if (counter < 20) {
      setCounter(counter + 1)

    }

  }

  const removeValue = function () {
    if (counter > 0) {
      setCounter(counter - 1)

    }


  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
