import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [allowNumber,setAllowNumber] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

   //useRef hook
   const passwordRef = useRef(null) //it's passowrd reference, default value is null we have given i.e no reference in password.

  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(allowNumber) str += "1123456789"
     if(charAllowed) str += "!@#$%^&*_+-=[]{}~`"

     for (let i = 1; i <= length ; i++) {
      let charIndex = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(charIndex)
     }

     setPassword(pass)
  },[length, allowNumber, charAllowed, setPassword]) 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //if current object is present - if yes then select...optional select
    passwordRef.current?.setSelectionRange(0, 4);
    //to tell selection range
    window.navigator.clipboard.writeText(passwordRef.current.value.substring(0,4)) //Window - Only for core react/ but in Nextjs there is serverside rendering so it don't have window object.
  }, [password]) //Use callback basically memorize function to whatever extent it can.
  //Whatevr is interdependent or with which we want to talk, that we give as dependencies in useCallback.

  useEffect(() => {
    passwordGenerator()
  }, [length, allowNumber, charAllowed, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-center text-white my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}></input>
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> setlength(e.target.value)}></input>
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={allowNumber} id="numberInput" onChange={() => {
              setAllowNumber((prev) => !prev);
          }}/> 
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev ) //*****
              }}
          />
          <label htmlFor="characterInput">Characters</label>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
