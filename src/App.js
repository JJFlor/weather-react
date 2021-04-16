import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather /*city="Barcelona"*//>
      </header>
      <bottom>
         <small>
           <a href="https://github.com/JJFlor/weather-react">Open-source code</a>, by <a href="https://www.linkedin.com/in/juliajaile/">Júlia Jaile</a> 👩🏽‍💻
        </small>
      </bottom>
    </div>
  );
}

export default App;
