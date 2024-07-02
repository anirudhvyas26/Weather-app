import { Search } from "@mui/icons-material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./weather.css";
import WaterIcon from "@mui/icons-material/Water";
import AirIcon from "@mui/icons-material/Air";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const inputRef =useRef()
  const [weatherData, setWeatherData] = useState(false);

  const allIcons={
"01d":"https://openweathermap.org/img/wn/01d@2x.png",
"01n":"https://openweathermap.org/img/wn/01n@2x.png",
"02d":"https://openweathermap.org/img/wn/02d@2x.png",
"03d":"https://openweathermap.org/img/wn/03d@2x.png",
"03n":"https://openweathermap.org/img/wn/03n@2x.png",
"04d":"https://openweathermap.org/img/wn/04d@2x.png",
"04n":"https://openweathermap.org/img/wn/04n@2x.png",
"09d":"https://openweathermap.org/img/wn/09d@2x.png",
"09n":"https://openweathermap.org/img/wn/09n@2x.png",
"10d":"https://openweathermap.org/img/wn/10d@2x.png",
"10n":"https://openweathermap.org/img/wn/10n@2x.png",
"13d":"https://openweathermap.org/img/wn/13d@2x.png",
"13n":"https://openweathermap.org/img/wn/13n@2x.png",
  }
  const search = async (city) => {
    if(city===""){
      alert("Enter the City Name")
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch (url);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || WbSunnyIcon;
      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temperature:Math.floor(data.main.temp),
        location:data.name,
        icon: icon
      })

    } catch (error) {
      setWeatherData(false);
            console.error("Error in Fetching Data")
    }
  };
  useEffect(()=>{
    search("Amazon");
  },[])
  return (
    <div className="weather">
      <div className="search-bar">
        <input  ref={inputRef} type="text" placeholder="Search" />
        <div className="icon-container">
          <Search className="icon" onClick={()=>search(inputRef.current.value)} />
        </div>

      </div>
      {weatherData?<>
        <div className="weather-info">
        {/* <WbSunnyIcon className="weather-icon" /> */}
        <img src={weatherData.icon} alt="" className="weather-icon"/>
        <p className="temperature">{weatherData.temperature}°C</p>
        <p className="location">{weatherData.location}</p>
        <div className="weather-data">
          <div className="col">
            <WaterIcon className="humid" />
            <p className="percentage">{weatherData.humidity}%</p>
            <span className="feel">Humidity</span>
          </div>
          <div className="col">
            <AirIcon className="airIcon" />
            <p className="percentage">{weatherData.windSpeed}Km/hr</p>
            <span className="feel">Wind Speed</span>
          </div>
        </div>
      </div>
      </>:<></>}
     
    </div>
  );
};

export default Weather;
