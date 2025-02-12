import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='*' element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
