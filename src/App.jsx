import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
