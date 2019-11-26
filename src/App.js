import React from 'react';
import logo from './mgmvegantogo.png';
import './App.css';
import OrderFood from './orderfood.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OrderFood/>
      </header>
     
    </div>
  );
}

export default App;
