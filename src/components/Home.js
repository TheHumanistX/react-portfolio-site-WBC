// The React library is imported, necessary for creating React components.
import React from 'react'; 

import { Link } from 'react-router-dom'

// The motion component from 'framer-motion' is imported. This library is used to animate components in the application.
import { motion } from 'framer-motion'



const Home = () => {
    
    return (
        
        <section id="home" class="hero">
            
            <div class="home_container">
                {/* The motion component from 'framer-motion' is used to animate the h1 tag. */}
                {/* The 'initial' prop sets the initial state of the animation (85vw to the left of the normal position),  */}
                {/* and 'animate' prop sets the final state of the animation (back to the normal position). */}
                <motion.h1
                    initial={{x:'-80vw'}}
                    animate={{
                        x:0, 
                        transition: {
                            delay: 1.0, // The delay before the animation starts is 1 second.
                            type: 'spring', // The type of the animation is 'spring'.
                            stiffness: 300, // The stiffness of the spring is 300.
                            mass: 3, // The mass attached to the spring is 3.
                            damping: 35 // The damping (resistance) in the spring is 35.
                        }}}
                >Web Design Showcase</motion.h1>

                {/* Similar to the above, but this time an h2 tag is animated.  */}
                {/* The h2 tag starts from 85vw to the right of the normal position. */}
                <motion.h2 class="white"
                    initial={{x:'85vw'}}
                    animate={{
                        x:0, 
                        transition: {
                            delay: 1.3, // The delay before the animation starts is 1.3 seconds.
                            type: 'spring', // The type of the animation is 'spring'.
                            stiffness: 300, // The stiffness of the spring is 300.
                            mass: 3, // The mass attached to the spring is 3.
                            damping: 35 // The damping (resistance) in the spring is 35.
                    }}}
                >Discover creative and modern web designs</motion.h2>
                
                {/* A Link component from 'react-router-dom' creates a link to the '/Portfolio' page. */}
                <Link to="/Portfolio" >
                    {/* A paragraph tag is animated with 'motion' from 'framer-motion'. The paragraph starts from 85vw to the left of the normal position. */}
                    <motion.p class="cta bold uppercase white"
                        initial={{x: '-80vw'}}
                        animate={{
                            x: 0, 
                            transition: {
                                delay: 1.6, // The delay before the animation starts is 1.6 seconds.
                                type: 'spring', // The type of the animation is 'spring'.
                                stiffness: 300, // The stiffness of the spring is 300.
                                mass: 3, // The mass attached to the spring is 3.
                                damping: 35 // The damping (resistance) in the spring is 35.
                            }}}
                    >View Portfolio</motion.p></Link>
                    {/* This paragraph is also wrapped with a Link component, so clicking on it will take you to the "/Portfolio" page. */}
                </div> 
            </section> // This is the closing tag for the 'hero' section.
        )
    }


    export default Home;

