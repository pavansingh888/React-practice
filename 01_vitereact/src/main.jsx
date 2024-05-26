import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}
//<MyApp /> - How this syntax in jsx - In every react app a bundler is used. babble/transpiler is there and vite also uses bundler -  its work is to syntax improvement/upgradation. So below syntax conversion is also handled by bundler. Although HTML syntax is easy but react doesn't under it. That's why it is called JSX because HTML is mixed inside JS. So HTML syntax is parsed and converted into tree by bundler. 

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }

//So this MyApp will also be converted by transpiler.
//MyApp() - can be executed in this way also below without </React.StrictMode>. But not preferred due to optimization and code convention will be effected.
//<ReactElement/> - doesn't work because its not a function its a object. So object won't get executed.

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
) // this will work and get converted into object. but why ReactElement was not working - that is also object only right. --> because the syntax in ReactElement is not correct.

const anotherUser = "Pavan and coffee"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit google',
  anotherUser 
  // So inside object we don't use if else and JS code right that's why we can use JS code inside {} while providing variable in JS.
)

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   <MyApp/>
  
// )  

//Above haven't written any custom render code. its a react render function & and it will expect some type of paramters.

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)  
