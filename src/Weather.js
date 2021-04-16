import React from "react";
//import axios from "axios";
//import Loader from "react-loader-spinner";
import "./Weather.css";


export default function Weather() {
  let weatherData = {
    city: "Barcelona",
    date: "Sunday 16:30h",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: "20",
    humidity: "80",
    temperature: "15"
  };
  return (
    <div className="cityW">
      <form onsubmit="handleSubmit(event)">
        <div className="row">
          <div className="col-6 flex-parent jc-center">
            <input
              type="search"
              placeholder="Enter city name"
              autofocus="on"
              autocomplete="off"
              className="form-control-input shadow-sm"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
            <button className="btn btn-success">Current</button>
          </div>
        </div>
      </form>
        <ul className="currentStatus">
          <li>{weatherData.city}</li>
          <br />
          <li>Last update: {weatherData.date}</li>
          <br />
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="weather-icon"
              />
            </div>
            <div className="temperatureStyle">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
          <ul className="humid-wind">
              <li>Humidity: {weatherData.humidity} %</li>
              <br />
              <li>Wind: {weatherData.wind} km/h</li>
         </ul>
      </div>

      <table className="five-days">
        <colgroup>
          <col span="5" className="Monday"></col>
          <col span="5" className="Friday"></col>
        </colgroup>
        <tr className="week-Days">
          <th scope="col">
            Mon
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            19º / 11º
          </th>
          <th scope="col">
            Tue
            <br />
            <i className="fas fa-cloud-sun"></i>
            <br />
            13º / 7º
          </th>
          <th scope="col">
            Wed
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            11º / 4º
          </th>
          <th scope="col">
            Thu
            <br />
            <i className="fas fa-cloud-sun"></i>
            <br />
            11º / 6º
          </th>
          <th scope="col">
            Fri
            <br />
            <i className="fas fa-cloud"></i>
            <br />
            11º / 4º
          </th>
        </tr>
      </table>
    </div>
  );
}

/* export default function Weather(props){
     let apiKey="755fa0d585548b254a8058369f909e72";
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
     
   
     function handleResponse(response){ 
         alert(`The weather in ${response.data.name} is ${response.data.main.temp}º C`);
        }
     axios.get(apiUrl).then(handleResponse);
     return(
         <div>
            <Loader 
               type="Hearts" 
               color="#00BFFF" 
               height={80} 
               width={80} 
             />
        </div>
    );
     } */
   
    


    
   
