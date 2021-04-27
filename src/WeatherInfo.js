import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherInfo(props){
    let table = (
      <table className="five-days">
        <colgroup>
          <col span="5" className="Monday"></col>
          <col span="5" className="Friday"></col>
        </colgroup>
        <tr className="week-Days">
          <th scope="col">
            Mon
            <br />
            <ReactAnimatedWeather icon="SNOW" color="#8675a9" size="40" animate="true" />
            <br />
            19º / 11º
          </th>
          <th scope="col">
            Tue
            <br />
            <ReactAnimatedWeather icon="CLEAR_DAY" color="#8675a9" size="40" animate="true" />
            <br />
            13º / 7º
          </th>
          <th scope="col">
            Wed
            <br />
            <ReactAnimatedWeather icon="PARTLY_CLOUDY_DAY" color="#8675a9" size="40" animate="true" />
            <br />
            11º / 4º
          </th>
          <th scope="col">
            Thu
            <br />
            <ReactAnimatedWeather icon="CLOUDY" color="#8675a9" size="40" animate="true" />
            <br />
            11º / 6º
          </th>
          <th scope="col">
            Fri
            <br />
            <ReactAnimatedWeather icon="RAIN" color="#8675a9" size="40" animate="true" />
            <br />
            11º / 4º
          </th>
        </tr>
      </table>);
    
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
             <WeatherIcon className="canvas" code={props.data.icon}/>
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
       {table}
     </div>);    
}