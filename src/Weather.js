import React, {useState} from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";


export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});
  const [ready, setReady]= useState(false);
  
   function displayWeather(response) {
     setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
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
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              onChange={updateCity}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary w-100">
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
        height={100}
        width={100}
      />
      </div>
      );   
  }
}


   
    


    
   
