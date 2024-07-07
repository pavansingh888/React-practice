import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login/> //setting value in UserContext
      <Profile/> //accessing value form UserContext
    </UserContextProvider>
  )
}

export default App
