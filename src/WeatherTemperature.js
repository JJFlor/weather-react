import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit]= useState("celsius");
    
    function convertToFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
    }

    function convertToCelsius(event){
      event.preventDefault();
      setUnit("celsius");
    }
    if(unit === "celsius"){
     return(
        <div className="WeatherTemperature">
            <strong> 
              {Math.round(props.celsius)}
            </strong>
            <span className="units">°C | <a href="/" onClick={convertToFahrenheit}>°F</a></span> 
        </div>  
     );
    } else{
        let fahrenheit = (props.celsius * 9/5) + 32;
        return(
            <div className="WeatherTemperature">
            <strong> 
              {Math.round(fahrenheit)}
            </strong>
            <span className="units"> <a href="/" onClick={convertToCelsius}>°C</a> | °F</span> 
        </div>  
        );
    }
}