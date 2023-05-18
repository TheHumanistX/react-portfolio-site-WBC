import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Header = () => {  
    return (
    <header>
      <nav>
            <ul>
              {/* 
              A good thing to talk about here could be <Link> vs <NavLink>. The former being the more basic and common way
              to handle route links but the latter allows for styling based on active links... so if I want the navbar to underline
              the link for whatever page they are on, NavLink is good for that (hence the reason I am using it) 
              */}
              <motion.li
              initial={{ y: '-200px' }}
              animate={{ y: 0, transition: {delay: 0.1}}}
              >
                <NavLink to="/" className="bold uppercase white">Home<div className="underline"></div></NavLink>
              </motion.li>
              <motion.li
              initial={{ y: '-200px' }}
              animate={{ y: 0, transition: {delay: 0.3}}}
              >
                <NavLink to="/About" className="bold uppercase white">About<div className="underline"></div></NavLink>
              </motion.li>
              <motion.li
              initial={{ y: '-200px' }}
              animate={{ y: 0, transition: {delay: 0.5}}}
              
              >
                <NavLink to="/Portfolio" className="bold uppercase white">Portfolio<div className="underline"></div></NavLink>
              </motion.li>
              <motion.li
              initial={{ y: '-200px' }}
              animate={{ y: 0, transition: {delay: 0.7}}}
              
              >
                <NavLink to="/Contact" className="bold uppercase white">Contact<div className="underline"></div></NavLink>
              </motion.li>
            </ul>
          </nav>
    </header>
  )
}

export default Header;
