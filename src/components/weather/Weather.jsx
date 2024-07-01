import { Search } from "@mui/icons-material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./weather.css";
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';

const Weather = () => {
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <div className="icon-container">
          <Search className="icon" />
        </div>
      </div>
      <div className="weather-info">
        <WbSunnyIcon className="weather-icon" />
        <p className="temperature">24°C</p>
        <p className="location">Pune</p>
        <div className="weather-data">
            <div className="col">
                <WaterIcon className="humid"/>
                <p className="percentage">91%</p>
                <span className="feel">Humidity</span>
            </div>
             <div className="col">
                <AirIcon className="airIcon"/>
                <p className="percentage">3.6Km/hr</p>
                <span className="feel">Wind Speed</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
