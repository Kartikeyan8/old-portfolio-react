import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/contact" element={<Contact/>} />
        
        </Routes>
        <Footer />
        </BrowserRouter>    
  );
};

export default App;
