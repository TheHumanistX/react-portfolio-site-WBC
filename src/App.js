import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    
      <div class="flex-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
        <footer class="center">
            <a href="#" class="white">Terms of Use</a>
            <a href="#" class="white">Privacy Policy</a>
            <a href="#" class="white">Contact</a>
        </footer>
      </div>
    
  );
}

export default App;
