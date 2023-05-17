import React from 'react';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    
      <div class="flex-container">
        <header>
          <nav>
            <ul>
              {/* 
              A good thing to talk about here could be <Link> vs <NavLink>. The former being the more basic and common way
              to handle route links but the latter allows for styling based on active links... so if I want the navbar to underline
              the link for whatever page they are on, NavLink is good for that (hence the reason I am using it) 
              */}
              <li>
                <NavLink to="/" className="bold uppercase white">Home<div className="underline"></div></NavLink>
              </li>
              <li>
                <NavLink to="/About" className="bold uppercase white">About<div className="underline"></div></NavLink>
              </li>
              <li>
                <NavLink to="/Portfolio" className="bold uppercase white">Portfolio<div className="underline"></div></NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="bold uppercase white">Contact<div className="underline"></div></NavLink>
              </li>
            </ul>
          </nav>
        </header>
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
