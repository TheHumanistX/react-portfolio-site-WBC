import React from 'react';

// Import 'motion' from framer-motion, a library for animations in React applications
import { motion } from 'framer-motion';


const Footer = () => {
    
    return (
        // The motion.footer component is an animated component from framer-motion that acts as a footer
        // The 'initial', 'animate', and 'transition' properties are responsible for defining the
        // animation and its behavior
        <motion.footer class="center"
            initial={{ y: 300 }} // The initial CSS properties, setting the initial y-axis position to 300 pixels below its final position
            animate={{ y: 0 }} // The animate properties, setting the final y-axis position to 0
            transition={{ type: 'spring', bounce: .1 }} // The transition properties, using a spring animation with bounce strength of 0.1
        >
            {/* Repeat the motion.span process with different initial and transition settings for each link */}
            <motion.span
                initial={{ x: '-45vw' }} // The initial property, setting the initial x-axis position to 45 viewport widths to the left of its final position
                animate={{ // The animate properties, setting the final x-axis position to 0 as well as defining the animation transition properties
                    x: 0, 
                    transition: { 
                        delay: 2.0, // The animation will start after a delay of 1.8 seconds
                        duration: .6, // The animation will last 0.6 seconds
                        type: 'spring', // The animation type is a spring motion
                        stiffness: 300, // The stiffness of the spring is 300
                        mass: 3, // The mass of the spring is 3 units
                        damping: 35 // The damping of the spring is 35, lower values result in more oscillation and higher values result in less oscillation
                    }
                }}
            >
                 <a href="#" class="white"> 
                     Terms of Use
                </a>
            </motion.span>

           {/* The other two motion.span components are similar , but with different initial positions and transition settings for each link. This allows each footer link to animate independently with their own timings and characteristics. */}

<motion.span
    initial={{ y: 300 }} // The initial property, setting the initial y-axis position to 300 pixels below its final position
    animate={{ // The animate properties, setting the final y-axis position to 0, as well as defining the animation transition properties
        y: 0, 
        transition: {
            delay: 1.8, // The animation will start after a delay of 1.6 seconds
            duration: .6, // The animation will last 0.6 seconds
            type: 'spring', // The animation type is a spring motion
            stiffness: 300, // The stiffness of the spring is 300
            mass: 2.5, // The mass of the spring is 2.5 units
            damping: 35 // The damping of the spring is 35
        }
    }}
>
     <a href="#" class="white"> 
         Privacy Policy
    </a>
    </motion.span>
            <motion.span
                initial={{ x: '45vw' }} // The initial property, setting the initial x-axis position to 45 viewport widths to the right of its final position
                animate={{ // The animate properties, setting the final x-axis position to 0, as well as defining the animation transition properties
                    x: 0, 
                    transition: {
                        delay: 2.0, // The animation will start after a delay of 1.8 seconds
                        duration: .6, // The animation will last 0.6 seconds
                        type: 'spring', // The animation type is a spring motion
                        stiffness: 300, // The stiffness of the spring is 300
                        mass: 3, // The mass of the spring is 3 units
                        damping: 35 // The damping of the spring is 35
                    }
                }}
            >
                 <a href="#" class="white"> 
                     Contact
                </a>
            </motion.span>
        </motion.footer>
    )
}

export default Footer;