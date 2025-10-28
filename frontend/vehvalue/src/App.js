import Navbar from './components/Navbar';
import React,{useEffect,useState} from 'react'
import Home from './components/Home';
import Footer from './components/Footer';

import Calculate from './components/Calculate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
function App() {

  return (
    <>
    
    <div>
    <Router>
            <Navbar title="Flood Systems2" Home1="Home" Map1="CurrentMap"About1="About Us" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />}/>
              </Routes>
    </Router>
    <Footer />
    </div>
    </>
  )
}


export default App