import './App.scss';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ImagePage from './pages/ImagePage/ImagePage';
import FourZeroFour from './pages/FourZeroFour/FourZeroFour';
import Footer from './components/Footer/Footer';

function App() {
  const [filterDisplayed, setFilterDisplayed] = useState(false);
  const [onHomePage, setOnHomePage] = useState(true);

  const updateFilterDisplayed = (filterDisplayed) => { 
    setFilterDisplayed(filterDisplayed);
  };

  return (
    <>
      <BrowserRouter>
        <Header filterDisplayed={filterDisplayed} 
          updateFilterDisplayed={updateFilterDisplayed}
          onHomePage={onHomePage}/>
        <Routes>
          <Route path='/' element={ <Home filterDisplayed={filterDisplayed} setOnHomePage={setOnHomePage}/> } />
          <Route path='/imagePage/:imageId' element={ <ImagePage setOnHomePage={setOnHomePage}/> } />
          <Route path='*' element={ <FourZeroFour setOnHomePage={setOnHomePage}/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
