import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import React from 'react';

function App() {
  const [filterDisplayed, setFilterDisplayed] = useState(false);
  const updateFilterDisplayed = (filterDisplayed)=>{
    setFilterDisplayed(filterDisplayed);
  };

  return (
    <>
      <BrowserRouter>
        <Header filterDisplayed={filterDisplayed} updateFilterDisplayed={updateFilterDisplayed}/>
        <Routes>
          <Route path='/' element={ <Home filterDisplayed={filterDisplayed}/> } />
          {/* <Route path='*' element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
