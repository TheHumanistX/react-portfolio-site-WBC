import React from 'react'
import Headshot from '../assets/headshot.jpeg'

const About = () => {
  return (
    <section id="about" class="about center">
            <img src={Headshot} alt="Profile Headshot"
                class="headshot" />
            <h2 class="bold uppercase">Jane Doe</h2>
            <div class="about_info">
                <div class="about_info-card">
                    <div class="about_info-card--heading">
                        <h3>01</h3>
                        <h3 class="white">Background</h3>
                    </div>
                    <div class="about_info-card--text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
                <div class="about_info-card">
                    <div class="about_info-card--heading">
                        <h3>02</h3>
                        <h3 class="white">Current</h3>
                    </div>
                    <div class="about_info-card--text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
                <div class="about_info-card">
                    <div class="about_info-card--heading">
                        <h3>03</h3>
                        <h3 class="white">Outlook</h3>
                    </div>
                    <div class="about_info-card--text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit varius auctor tellus, massa eu tempus
                            ante imperdiet aliquet curae velit porta vitae, tristique torquent nisi iaculis magnis ut
                            rhoncus semper nisl.
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex-spacer-column"></div>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
            </ul>
        </section>
  )
}

export default About
