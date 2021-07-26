import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background_img">
          <img src="./raindrops.jpg" alt="Raindrops picture"/>
        </div>
        <Weather defaultCity="Barcelona"/>
        <footer>
          👩🏽‍💻 Coded by <a href="https://www.linkedin.com/in/juliajaile/" alt="Júlia's Linkedin" target="_blank" rel="noreferrer">
              Júlia Jaile </a>and <a href="https://github.com/JJFlor/weather-react" alt="Júlia's GitHub repository" rel="noreferrer" target="_blank">
            open-sourced on GitHub</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
