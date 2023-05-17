import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio">
            <h2 class="bold uppercase white center">Portfolio</h2>
            <div class="portfolio__grid-container">
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/html.png" alt="Project 1" />
                    <h3 class="bold uppercase">Project 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/CSS.png" alt="Project 2" />
                    <h3 class="bold uppercase">Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/javascript.png" alt="Project 3" />
                    <h3 class="bold uppercase">Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/html.png" alt="Project 4" />
                    <h3 class="bold uppercase">Project 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/CSS.png" alt="Project 5" />
                    <h3 class="bold uppercase">Project 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="project-card">
                    <img src="https://www.geeksforgeeks.org/wp-content/uploads/javascript.png" alt="Project 6" />
                    <h3 class="bold uppercase">Project 6</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

        </section>
  )
}

export default Portfolio
