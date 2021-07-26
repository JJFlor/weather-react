import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [ready, setReady]= useState(false);
  
   function displayWeather(response) {
    setWeather({
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
     });
     setReady(true);
    }

    function handleSubmit(event) {
     event.preventDefault();
     search();
    }

    function updateCity(event) {
    setCity(event.target.value);
    }

    function search() {
     let apiKey = "755fa0d585548b254a8058369f909e72";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayWeather);
    }

    let form = (
      <form onSubmit= {handleSubmit}>
        <div className="row mt-2">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city name..."
              autoFocus="on"
              onChange={updateCity}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <button className="search-button">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  
  if(ready){
  return (
    <div className="cityW">
      {form}
      <WeatherInfo data={weather}/>
      <WeatherForecast coordinates={weather.coordinates}/>
    </div>
  );
  } else {
    search();
    return (
      <div>
        {form}
        <Loader
        type="ThreeDots"
        color="#52057b"
        height={50}
        width={50}
      />
      </div>
      );   
  }
}


   
    


    
   
