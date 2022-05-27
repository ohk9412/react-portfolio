import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import PythonProject from './components/pythonProject/pythonProject';
import ReactProject from './components/reactProject/reactProject';



function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path="/" axact element={<Home />} />
          <Route path="/python" axact element={<PythonProject />} />
          <Route path="/react" axact element={<ReactProject />} />
       </Routes>
      <Footer />
    </div>
  )
};

export default App;
