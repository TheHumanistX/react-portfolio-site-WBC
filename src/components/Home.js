import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Home = () => {
    return (
        <section id="home" class="hero">
            <div class="home_container">
                <motion.h1
                initial={{x:'-100vw'}}
                animate={{
                    x:0, 
                    transition: {
                        duration: .6, 
                        delay: .5,
                        type: 'spring',
                        stiffness: 250,
                        mass: .5
                    }}}
                >Web Design Showcase</motion.h1>
                <motion.h2 class="white"
                initial={{x:'100vw'}}
                animate={{
                    x:0, 
                    transition: {
                    duration: .6, 
                    delay: .7,
                        type: 'spring',
                        stiffness: 250,
                        mass: .5
                }}}
                >Discover creative and modern web designs</motion.h2>
                
                <Link to="/Portfolio" >
                    <motion.p class="cta bold uppercase white"
                    initial={{x: '-100vw'}}
                    animate={{
                        x: 0, 
                        transition: {
                        duration: .6, 
                        delay: .9,
                        type: 'spring',
                        stiffness: 250,
                        mass: .5
                    }}}
                >View Portfolio</motion.p></Link>
            </div>
        </section>
    )
}

export default Home
