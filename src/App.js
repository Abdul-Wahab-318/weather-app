import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationProvider from './context/LocationProvider';
import Home from './pages/Home/Home';
import Header from './components/header/Header';

function App() {

  return (
    
    <LocationProvider>
        <div className="App">
          <Header/>
          <Home/>
        </div>
    </LocationProvider>

  );
}

export default App;
