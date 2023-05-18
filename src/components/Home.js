import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Home = () => {
    return (
        <section id="home" class="hero">
            <div class="home_container">
                <motion.h1
                initial={{x:'-70vw'}}
                animate={{
                    x:0, 
                    transition: {
                        delay: 1.0,
                        type: 'spring',
                        stiffness: 300,
                        mass: 3,
                        damping: 35
                        
                    }}}
                >Web Design Showcase</motion.h1>
                <motion.h2 class="white"
                initial={{x:'70vw'}}
                animate={{
                    x:0, 
                    transition: {
                    duration: .6, 
                    delay: 1.3,
                        type: 'spring',
                        stiffness: 300,
                        mass: 3,
                        damping: 35
                }}}
                >Discover creative and modern web designs</motion.h2>
                
                <Link to="/Portfolio" >
                    <motion.p class="cta bold uppercase white"
                    initial={{x: '-70vw'}}
                    animate={{
                        x: 0, 
                        transition: {
                        duration: .6, 
                        delay: 1.6,
                        type: 'spring',
                        stiffness: 300,
                        mass: 3,
                        damping: 35
                    }}}
                >View Portfolio</motion.p></Link>
            </div>
        </section>
    )
}

export default Home
