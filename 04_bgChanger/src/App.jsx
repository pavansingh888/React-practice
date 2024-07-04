import { useState } from "react"
//Learning - onClick handler expects a function reference, but we need to provide color as an argument because of which it will be a function call, to resolve this issue we use/give arrow callback function to the onClick and inside arrow function we call the function with argument-value (i.e color).
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap bg-white justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-2xl" style={{backgroundColor: "white"}} onClick={()=>setColor("white")}>White</button>
          </div>
      </div>
    </div>
  )
}

export default App
