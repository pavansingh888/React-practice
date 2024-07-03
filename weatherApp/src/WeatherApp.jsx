import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
const [weatherInfo, setWeatherInfo] = useState({
city: "Delhi",
temp: 24.84,
tempMin: 25.85,
tempMax: 25.05,
humidity: 47,
feelsLike: 40.07,
weather: "haze",
})

let updateInfo = (newInfo) => setWeatherInfo(newInfo)

return (
<div style={{textAlign:'center'}}>
<h2>Weather App by Pavan</h2>
<SearchBox updateInfo={updateInfo}/>
<InfoBox info={weatherInfo}/>
</div>
)
}