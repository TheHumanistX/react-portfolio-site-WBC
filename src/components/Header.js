// The React library is imported, which is necessary for creating React components.
import React from 'react'; 

// The NavLink component from 'react-router-dom' is imported. NavLink is a special version of the 
// Link component that can be styled based on whether its 'to' prop matches the current URL.
import { NavLink } from 'react-router-dom'; 

// The motion component from 'framer-motion' is imported. This is a powerful library for animations in React.
// The motion component is used to animate HTML elements.
import { motion } from 'framer-motion';

// A React functional component called Header is defined.
const Header = () => {  

    // The Header component returns JSX (JavaScript XML) which describes the UI.
    return (
    
    // The motion component from 'framer-motion' is used as a header tag, to animate the header.
    <motion.header 
        // The 'initial' prop is used to define the initial state of the animation.
        // Here, it initially moves the header up by 300 pixels along the y-axis.
        initial={{y: -300}}

        // The 'animate' prop is used to define the final state of the animation.
        // Here, it will move the header back to its original position (y:0) from the initial state.
        animate={{y:0}}

        // The 'transition' prop is used to define how the state transition (animation) should behave.
        // Here, it specifies that the animation type is 'spring' and the 'bounce' factor is 0.1. This gives the 
        // animation a spring effect.
        transition={{type:'spring', bounce: .1}}
    >
        {/* A nav element is defined. This typically contains a list of navigation links. */}
        <nav>
            {/* An unordered list (ul) is defined within the nav element. */}
            <ul>
                {/* A list item (li) is wrapped with a 'motion' component to animate it. */}
                {/* The 'initial' prop moves the list item up by 200px along the y-axis. */}
                {/* The 'animate' prop moves it back to its original position with a delay of 0.4 seconds. */}
                <motion.li
                    initial={{ y: '-200px' }}
                    animate={{ y: 0, transition: {delay: 0.4}}}
                >
                    {/* NavLink creates a navigation link to the root URL ("/"). */}
                    {/* The 'className' prop is used to apply CSS classes for styling. */}
                    {/* An empty div with the class 'underline' is created, which can be used for styling purposes, such as underlining the link text. */}
                    <NavLink to="/" className="bold uppercase white">Home<div className="underline"></div></NavLink>
                </motion.li>

                {/* Similar to the above, NavLink and motion.li create an animated navigation link to the '/About' page. */}
                <motion.li
                    initial={{ y: '-200px' }}
                    animate={{ y: 0, transition: {delay: 0.6}}}
                >
                    <NavLink to="/About" className="bold uppercase white">About<div className="underline"></div></NavLink>
                </motion.li>

                {/* Similar to the above, NavLink and motion.li create an animated navigation link to the '/Portfolio' page. */}
                <motion.li
                    initial={{ y: '-200px' }} // This line sets the initial position of the list item 200 pixels above its normal position.
                    animate={{ y: 0, transition: {delay: 0.8}}} // This line makes the list item return to its original position with a delay of 0.8 seconds.
                >
                    {/* The NavLink component is used to create a link to the /Portfolio route. The class names "bold uppercase white" are added for styling. */}
                    <NavLink to="/Portfolio" className="bold uppercase white">Portfolio<div className="underline"></div></NavLink>
                </motion.li>

                {/* Similar to the above, NavLink and motion.li create an animated navigation link to the '/Contact' page. */}
                <motion.li
                    initial={{ y: '-200px' }} // This line sets the initial position of the list item 200 pixels above its normal position.
                    animate={{ y: 0, transition: {delay: 1.0}}} // This line makes the list item return to its original position with a delay of 1 second.
                >
                    {/* The NavLink component is used to create a link to the /Contact route. The class names "bold uppercase white" are added for styling. */}
                    <NavLink to="/Contact" className="bold uppercase white">Contact<div className="underline"></div></NavLink>
                </motion.li>
            </ul>
          </nav>
          <input type="checkbox" id="nav__toggle" className="nav__toggle" />
            <label for="nav__toggle" className="nav__toggle-label"><span></span></label>
            <nav className="nav__phone">
                <ul>
                    <li><a href="#home" className="bold uppercase white">Home</a></li>
                    <li><a href="#about" className="bold uppercase white">About</a></li>
                    <li><a href="#portfolio" className="bold uppercase white">Portfolio</a></li>
                    <li><a href="#contact" className="bold uppercase white">Contact</a></li>
                </ul>
            </nav>
            <h1 className="white">Welcome</h1>
    </motion.header> // This closing tag denotes the end of the motion.header element.
  )
}

// This line exports the Header component as a default export, which allows it to be imported in other files using a simplified syntax.
export default Header;

