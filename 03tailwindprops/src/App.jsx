import './App.css'
import Card from './components/Card.jsx'

function App() {

  let myObject = {
    username: "mayank",
    age: 21
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="mayank" price="1.3 sol" />
      <Card username="krishna" price="1.8 sol" />

    </>
  )
}

export default App
