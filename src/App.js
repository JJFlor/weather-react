import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/JJFlor/weather-react" target="_blank">
            Open-source code
            </a>
            , by <a href="https://www.linkedin.com/in/juliajaile/" target="_blank">
              Júlia Jaile
              </a> 👩🏽‍💻
        </footer>
      </div>
    </div>
  );
}

export default App;
