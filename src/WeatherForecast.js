import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Wed.</div>
                    <WeatherIcon code="01d" size={36}/>
                    <div className="WeatherForecast-temp">
                        <span className="WeatherForecast-temp-max">
                            19º
                        </span> 
                        <span className="WeatherForecast-temp-min">
                            10º
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}