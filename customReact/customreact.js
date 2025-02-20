function customRender(reactElement, mainContainer) {

  /*const domElement = document.createElement(reactElement.type)

  domElement.innerHTML = reactElement.children

  domElement.setAttribute('href', reactElement.props.href);

  domElement.setAttribute('target', reactElement.props.target);

  mainContainer.appendChild(domElement)
  
  */

  const domElement = document.createElement(reactElement.type)

  domElement.innerHTML = reactElement.children

  for (const [key, value] of Object.entries(reactElement.props)) {
    if (key === "children") continue
    domElement.setAttribute(key, value);
  }

  // for (const key in reactElement.props) {
  // if (key === "children") continue
  //   domElement.setAttribute(key, reactElement.props.key)
  // }

  mainContainer.appendChild(domElement)
}



const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me to visit google"
}

// function customRender(reactElement, mainContainer) {
//   const domElement = document.createElement(reactElement.type)

//   domElement.innerHTML = reactElement()


//   mainContainer.appendChild(domElement)
// }

// function reactElement() {
//   return `<a href="https://google.com" target="_blank">Click me to visit google</a>`
// }
const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)

