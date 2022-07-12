import React from "react";
// import logo from './logo.svg';
import { Signup } from "./components/signup";
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import "./App.css";
import {Studenttable } from "./components/studenttable"

import {Login } from "./components/login"


function App() {
  return (
    <div className="App">
       


      <Router>

      <Link to="/"><h1>Home</h1></Link>&nbsp;&nbsp;
        <Link to="/signup"><h1>Signup:</h1></Link>&nbsp;&nbsp;
        
        <Link to="/login"><h1> login</h1></Link>&nbsp;&nbsp;
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/studenttable" element={<Studenttable />} />
          
          <Route path="/login" element={<Login />} />
         
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;