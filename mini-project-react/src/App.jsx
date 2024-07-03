import { useState } from 'react'
// import './App.css'
import Button from '@mui/material/Button';
import WeatherApp from './WeatherApp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherApp/>
    </>
  )
}

export default App
