import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import './components/index';


function App() {
  return (
    <div className="App">
         <button id="grantAccess" type="button">Grant Access</button>
         <div id="grantsAccess" ></div>

         <button id="fetchAddress" type="button">Fetch Address</button>
         <div id="addressAccess" ></div>
    </div>
  );
}

export default App;









