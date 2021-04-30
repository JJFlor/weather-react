import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
  const [loaded, setLoaded]= useState(false);
  const [forecast, setForecast]= useState(null);
  
  function handleResponse(response){
       setForecast(response.data.daily);
       setLoaded(true);
   }
  
    if(loaded) {
        return(
            <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if(index < 5){
                        return(
                        <div className="col" key={index}>
                          <WeatherForecastDay data={dailyForecast}/>
                        </div>
                    );
                    }  
                })}
            </div>
        </div>
        );
    } else {
         let apiKey="755fa0d585548b254a8058369f909e72";
         let longitude= props.coordinates.lon;
         let latitude= props.coordinates.lat;
         let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);

         return "Loading...";  
    }  
}