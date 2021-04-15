import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hello there!
        </h2>
        <Weather city="Barcelona"/>
      </header>
    </div>
  );
}

export default App;
