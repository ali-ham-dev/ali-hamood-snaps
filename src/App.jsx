import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Gallery />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='*' element={<Home />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
