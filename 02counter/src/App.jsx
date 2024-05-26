import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=5;
  //we get 2 values from useState in form of array.
//let [variableName,setfunction(this will control our variable)] = useState(default value of variable/true/false/''/'pavan'/[]/{}) is reponsible to change the state, this change is propagated to UI/DOM.
  let [counter,setCounter] = useState(5)

 // Here problem is coming in UI updation 
  const increaseCount= ()=>{
    if(counter<20){
      setCounter(counter+1)  //to update counter and let react know that we have updated it, so it will update this variable on webpage.
    }
    console.log("Clicked", counter);
  }

  const decreaseCount= ()=>{
    if(counter>0){
      setCounter( counter-1)
    }
    console.log("Clicked", counter);
  }

  return (
    <>
      <h1>Counter project using react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increaseCount}>Increase Counter {counter}</button>
      <br/>
      <button onClick={decreaseCount}>Decrease Counter {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
