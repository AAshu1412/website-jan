import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Careers from './components/careers/Careers';

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/careers' element={<Careers/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
