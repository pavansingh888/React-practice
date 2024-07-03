import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" 
import { useState } from 'react';


export default function SearchBox({updateInfo}){
  
    let [city,setCity] = useState("");
    let [error,setError] = useState(false)

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
           throw err
        }  
    }
    let handleChange = (evt) => {
       setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("")
            setError(false)
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo)
        }catch(err){
            setError(true)
        }
       
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City" variant="outlined" value={city} onChange={handleChange} required/>
            <br></br><br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form> 
        </div>
    )
}