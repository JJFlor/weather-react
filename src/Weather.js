import React, {useState} from "react";
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";


export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
  
   function displayWeather(response) {
     setLoaded(true);
     setWeather({
      city: response.data.name,
      date: response.data.dt,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
     });
    }
    function handleSubmit(event) {
     event.preventDefault();
     let apiKey = "755fa0d585548b254a8058369f909e72";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
    setCity(event.target.value);
    }

    let form = (
      <form onSubmit= {handleSubmit}>
        <div className="row">
          <div className="col-6 flex-parent jc-center">
            <input
              type="search"
              placeholder="Enter city name"
              autoComplete="off"
              onChange={updateCity}
              className="form-control-input shadow-sm"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
            <button className="btn btn-success">Current</button>
          </div>
        </div>
      </form>
    );

    let table=(
      <table className="five-days">
        <colgroup>
          <col span="5" className="Monday"></col>
          <col span="5" className="Friday"></col>
        </colgroup>
        <tr className="week-Days">
          <th scope="col">
            Mon
            <br />
            <ReactAnimatedWeather icon="SNOW" color="#cc0e74" size="40" animate="true" />
            <br />
            19º / 11º
          </th>
          <th scope="col">
            Tue
            <br />
            <ReactAnimatedWeather icon="CLEAR_DAY" color="#cc0e74" size="40" animate="true" />
            <br />
            13º / 7º
          </th>
          <th scope="col">
            Wed
            <br />
            <ReactAnimatedWeather icon="PARTLY_CLOUDY_DAY" color="#cc0e74" size="40" animate="true" />
            <br />
            11º / 4º
          </th>
          <th scope="col">
            Thu
            <br />
            <ReactAnimatedWeather icon="CLOUDY" color="#cc0e74" size="40" animate="true" />
            <br />
            11º / 6º
          </th>
          <th scope="col">
            Fri
            <br />
            <ReactAnimatedWeather icon="RAIN" color="#cc0e74" size="40" animate="true" />
            <br />
            11º / 4º
          </th>
        </tr>
      </table>
    );

  if(loaded){
  return (
    <div className="cityW">
      {form}
        <ul className="currentStatus">
          <li> 
            {weather.city}
          </li>
            <br />
          <li>
            <strong>Last update:</strong> {weather.date}
          </li>
            <br />
          <li>  
            <strong>Description:</strong> {weather.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div>
              <img src={weather.icon} alt={weather.description} />
            </div>
            <div className="temperatureStyle">
              <strong> {Math.round(weather.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <ul className="humid-wind">
              <li>
                Humidity: {weather.humidity} %
              </li>
              <br />
              <li>
               Wind: {weather.wind} km/h
              </li>
         </ul>
      </div>
      {table}
    </div>
  );
  } else {
    return (
      <div>
         {form}
         {table}
      </div>
      );
  }
}


   
    


    
   
