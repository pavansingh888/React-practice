import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

//after card addition - PROPS begins :
/*
props makes component reusable. Once we have made a card why not place that card in a component and reuse that component.
General concept of WebDev suuggest to keep HTML JS CSS seperately, but in React it is said to not segregate things on basis of tech type, but on the basis of what work they do.
To resuse the card - its HTML CSS JS we should write in itself only.So that when we pass any value to the card, its value gets change on its basis.

So we cut the card and make a new component for it.

Now name in all cards will be same, but we and different names to be displayed. So to show different value in same components - we use props.

Whatever components we make all of them have access to props.
*/
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    user: "Pavan Singh",
    age: 24
  }
  let newArr=[1,2,3,4];
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card username="Pavan" btntext="click me!" someObj={myObj}/>
     <Card username="Ankush" btntext="Visit me!"/>
     <Card/>
    </>
  )
}

export default App
