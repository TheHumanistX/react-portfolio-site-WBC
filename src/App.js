import React from 'react';

// Import Route and Routes components from 'react-router-dom' library to enable routing and navigation
import { Route, Routes } from 'react-router-dom';

// Import CSS file for styling the components
import './index.css';

// Import custom components to be used in the app
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

// !!Of importance!! The HashRouter tags wrap this entire app from within the index.js
function App() {
  return (
    
    
    <div>
      
      {/* Render the Header component at the top of the app */}
      <Header />

      {/* Define the Routes for the app's navigation between components and assign corresponding components to the routes */}
      <Routes>
        {/* Route for the home page with exact path '/' and render the Home component */}
        <Route exact path="/" element={<Home />} />

        {/* Route for the About page with exact path '/About' and render the About component */}
        <Route exact path="/About" element={<About />} />

        {/* Route for the Portfolio page with exact path '/Portfolio' and render the Portfolio component */}
        <Route exact path="/Portfolio" element={<Portfolio />} />

        {/* Route for the Contact page with exact path '/Contact' and render the Contact component */}
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;