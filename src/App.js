import React, { Component } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/layout/navbar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import AddUser from "./components/users/adduser";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
  <Router>
     <NavBar />
     <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/user/add" element={<AddUser/>}/>
     </Routes>
    
  </Router>
  );
}

export default App;
