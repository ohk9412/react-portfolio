import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Python from './components/python/python';
import Reacts from './components/react/react';


function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" axact element={<Home />} />
          <Route path="/python" axact element={<Python />} />
          <Route path="/react" axact element={<Reacts />} />
       </Routes>
      <Footer />
    </div>
  )
};

export default App;
