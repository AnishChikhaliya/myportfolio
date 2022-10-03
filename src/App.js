import './App.scss';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route index element={<Home/>}/> 
      <Route path='about' element={<About />}/> 
      </Route>
    </Routes>
    </>

  );
}

export default App;
