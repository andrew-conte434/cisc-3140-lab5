import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Rankings from './Components/Rankings.js'
import Home from './Components/Home'
import AddCar from './Components/AddCar';
import './App.css'

function App() {



  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path = "/"
                      element = {<Home />}/>
          <Route exact path = "/rankings"
                      element ={ <Rankings />}/>
          <Route exact path = "/addCar"
                      element = {<AddCar />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
