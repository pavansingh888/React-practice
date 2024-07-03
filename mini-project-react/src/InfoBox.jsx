import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
import env from "dotenv"

export default function InfoBox({info}){

    console.log(import.meta.env.VITE_COLD_URL,import.meta.env.VITE_RAIN_URL);
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? import.meta.env.VITE_RAIN_URL : (info.temp < 15 ? import.meta.env.VITE_COLD_URL : import.meta.env.VITE_HOT_URL )}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp < 15 ? <AcUnitIcon/> : <WbSunnyIcon/> )}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> & feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
    )
}