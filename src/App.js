import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hello from React!!
        </h2>
        <Weather city="New York" />
      
      </header>
    </div>
  );
}

export default App;