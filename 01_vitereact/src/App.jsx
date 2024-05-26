import Tea from "./Tea"

function App() {
  const username = "Pavan made tea"
//{username} use this to treat variable in HTML below.
//#Interview - {username}  this is known as Evaluated expression , it won't accept JS code inside it. it will just accept the evaluated value of JS, only.
  return (
    <>
      <Tea/>  
    <h1>Tea and Coffee {username}</h1>
    <p>test paragraph</p>
    </>
)
}
//Since above problem was so common in react, we can write empty html tag as well - this is called Fragment in react.
export default App
