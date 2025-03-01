import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <>
      <div>
        <h1>Custom App !</h1>
      </div>
    </>
  )
}
// At end the function is converted or parsed into this kind of object

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me to google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(


  reactElement


)
