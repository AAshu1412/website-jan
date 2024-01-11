import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
    
function App() {
  return (
    <BrowserRouter>
    <img src='C:\Javascript\react\freelance\src\components\assets\BG.png'></img>
      <Navbar/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
