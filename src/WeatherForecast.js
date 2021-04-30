import React, {useState , useEffect} from "react";
import "./WeatherForecast.css";
import Loader from "react-loader-spinner";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
  const [loaded, setLoaded]= useState(false);
  const [forecast, setForecast]= useState(null);
  
  useEffect(() =>{
   setLoaded(false);
  }, [props.coordinates])


  function handleResponse(response){
       setForecast(response.data.daily);
       setLoaded(true);
   }

   function load(){
       let apiKey="755fa0d585548b254a8058369f909e72";
       let longitude= props.coordinates.lon;
       let latitude= props.coordinates.lat;
       let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
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
                    return null;  
                })}
            </div>
        </div>
        );
    } else {
         load();
         return (
             <Loader
        type="ThreeDots"
        color="#52057b"
        height={50}
        width={50}
      />
         );  
    }  
}