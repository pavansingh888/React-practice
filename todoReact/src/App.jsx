import { LudoBoard } from './LudoBoard'
import './App.css'
import TodoList from './TodoList'
import LotteryGame from './LotteryGame'
import { sum } from './helper'

function App() {

  let winCondition=(arr)=>{
    // return sum(arr)===15;
    // return arr.every((num)=>num === arr[0])
    return arr[0]===0;
  }

  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      <LotteryGame n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
