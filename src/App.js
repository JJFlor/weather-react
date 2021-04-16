import Weather from "./Weather";
import Bottom from "./Bottom";

import './App.css';
import './Bottom.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather /*city="Barcelona"*//>
      </header>
      <Bottom />
    </div>
  );
}

export default App;
