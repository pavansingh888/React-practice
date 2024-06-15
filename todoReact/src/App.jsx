import { LudoBoard } from './LudoBoard'
import './App.css'
import TodoList from './TodoList'
import LotteryGame from './LotteryGame'

function App() {


  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      <LotteryGame n={3} winningSum={15}/>
    </>
  )
}

export default App
