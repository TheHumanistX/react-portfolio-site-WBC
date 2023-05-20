import React from 'react'

// Importing needed images from 'assets' folder
import HTML from '../assets/html.png'
import CSS from '../assets/CSS.png'
import JS from '../assets/javascript.png'

const Portfolio = () => {

    return (
        <section id="portfolio" className="portfolio">
            <h2 className="bold uppercase white center">Portfolio</h2>

            {/* A div container with the class 'portfolio__grid-container' is defined within the section. */}
            {/* This is where your portfolio items will be placed. */}
            <div className="portfolio__grid-container">

                {/* A div with the class 'project-card' is created, representing a single project in the portfolio. */}
                {/* Each project card consists of an image, a heading, and a paragraph. */}
                {/* The structure is repeated for six projects. */}
                <div className="project-card center">
                    {/* A generic image element for this project. THere are three of these. One says HTML, one CSS, one Javascript. */}
                    {/* They are evenly dispersed among the six 'projects' */}
                    <img src={ HTML } alt="Project 1" />

                    {/* An h3 heading for the project's title. */}
                    <h3 className="bold uppercase">Project 1</h3>

                    {/* A paragraph element for the project's description. The placeholder text is currently lorem ipsum. */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* The structure is repeated for the remaining projects. */}
                {/* The source links and alt text of the images are changed for each project. */}
                {/* The project titles are also updated while the single-line Lorem Ipsum for the description is maintained. */}
                <div className="project-card center">
                    <img src={ CSS } alt="Project 2" />
                    <h3 className="bold uppercase">Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="project-card center">
                    <img src={ JS } alt="Project 3" />
                    <h3 className="bold uppercase">Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="project-card center">
                    <img src={ HTML } alt="Project 4" />
                    <h3 className="bold uppercase">Project 4</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="project-card center">
                    <img src={ CSS } alt="Project 5" />
                    <h3 className="bold uppercase">Project 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="project-card center">
                    <img src={ JS } alt="Project 6" />
                    <h3 className="bold uppercase">Project 6</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
