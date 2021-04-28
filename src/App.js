import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona"/>
        <footer>
          Project coded by <a href="https://www.linkedin.com/in/juliajaile/" rel="noreferrer" target="_blank">
              Júlia Jaile </a> 👩🏽‍💻, <a href="https://github.com/JJFlor/weather-react"  rel="noreferrer" target="_blank">
            open-sourced on GitHub </a> and <a href="https://weather-react-web-801652.netlify.app"  rel="noreferrer">hosted on Netlify</a>   
        </footer>
      </div>
    </div>
  );
}

export default App;
