import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='*' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
