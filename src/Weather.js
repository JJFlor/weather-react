import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){
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
}
   
    


    
   
