import React from 'react'

// Import Headshot image for use in the component
import Headshot from '../assets/headshot.jpeg'

const About = () => {
    return (
        <section id="about" className="about center">
            {/* Place the imported Headshot image as a source with alt attribute */}
            <img src={Headshot} alt="Profile Headshot"
                className="headshot" />
            {/* Add a header element with the user's name and necessary styling classes */}
            <h2 className="bold uppercase">Jane Doe</h2>
            {/* Create a container for the "about_info" content */}
            <div className="about_info">
                {/* Create the first info-card element with a class */}
                <div className="about_info-card">
                    {/* Create the heading for the first info-card */}
                    <div className="about_info-card--heading">
                        {/* Add a number for the first section */}
                        <h3>01</h3>
                        {/* Add a header element for the first section title */}
                        {/* and apply a style class "white" for text color */}
                        <h3 className="white">Background</h3>
                    </div>
                    {/* Create a container for the first info-card's text content */}
                    <div className="about_info-card--text">
                        {/* Add a paragraph element with sample text */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
                {/* Create the second info-card element with a class */}
                <div className="about_info-card">
                    {/* Create the heading for the second info-card */}
                    <div className="about_info-card--heading">
                        {/* Add a number for the second section */}
                        <h3>02</h3>
                        {/* Add a header element for the second section title */}
                        {/* and apply a style class "white" for text color */}
                        <h3 className="white">Current</h3>
                    </div>
                    {/* Create a container for the second info-card's text content */}
                    <div className="about_info-card--text">
                        {/* Add a paragraph element with sample text */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
                {/* Create the third info-card element with a class */}
                <div className="about_info-card">
                    {/* Create the heading for the third info-card */}
                    <div className="about_info-card--heading">
                        {/* Add a number for the third section */}
                        <h3>03</h3>
                        {/* Add a header element for the third section title */}
                        {/* and apply a style class "white" for text color */}
                        <h3 className="white">Outlook</h3>
                    </div>
                    {/* Create a container for the third info-card's text content */}
                    <div className="about_info-card--text">
                        {/* Add a paragraph element with sample text */}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
            </div>
            {/* Add a flex-spacer column to separate content blocks */}
            <div className="flex-spacer-column"></div>
            {/* Create an unordered list to hold user's social media links */}
            <ul>
                {/* Add a list item with an anchor link to the user's Facebook profile */}
                <li><a href="#">Facebook</a></li>
                {/* Add a list item with an anchor link to the user's Twitter profile */}
                <li><a href="#">Twitter</a></li>
                {/* Add a list item with an anchor link to the user's LinkedIn profile */}
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </section>
    )
}

// Export the "About" component as the default export for use in other parts of the application
export default About
