import './App.scss';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ImagePage from './pages/ImagePage/ImagePage';
import Footer from './components/Footer/Footer';

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
          <Route path='/imagePage/:imageId' element={ <ImagePage /> } />
          <Route path='*'element={ <div>404</div> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
