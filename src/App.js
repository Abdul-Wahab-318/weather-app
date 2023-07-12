import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationProvider from './context/LocationProvider';
import Home from './pages/Home/Home';

function App() {

  return (
    
    <LocationProvider>
        <div className="App">
          <Home/>
        </div>
    </LocationProvider>

  );
}

export default App;
