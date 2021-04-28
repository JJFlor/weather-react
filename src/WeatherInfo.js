import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return(
    <div className="WeatherInfo">
        <ul className="currentStatus">
          <li className="currentCity"> 
            <strong>{props.data.city}</strong>
          </li>
          <li>  
           <FormattedDate date={props.data.date} />
          </li>
          <li>  
           {props.data.description}
          </li>
        </ul>
        <div className="row mt-3">
           <div className="col-3">
             <WeatherIcon className="canvas" code={props.data.icon} size={80}/>
           </div>
           <div className="col-6 temperatureStyle">
              <WeatherTemperature celsius={props.data.temperature}/>
           </div>
           <div className="col-6">
             <ul className="humid-wind">
               <li>
                  Humidity: {props.data.humidity} %
               </li>
               <li>
                 Wind: {props.data.wind} km/h
               </li>
             </ul>
           </div>  
       </div>
     </div>);    
}