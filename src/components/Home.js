import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section id="home" class="hero">
            <div class="home_container">
                <h1>Web Design Showcase</h1>
                <h2 class="white">Discover creative and modern web designs</h2>
                <Link to="/Portfolio" class="cta bold uppercase white">View Portfolio</Link>
            </div>
        </section>
    )
}

export default Home
