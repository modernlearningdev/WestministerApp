import React from 'react';
import "./Hero.scss";



const Hero = () => (
    <div className="hero">

        <div className="hero__wrapper">
            <h5 className="tagline">
                We are an independent school with small 
                classes, high expectations and a commited
                staff team 
            </h5>
            <a href="#" className="cta">Learn More</a> 
        </div>

        <div className="hero__cta">

                <h3 class="separator">|</h3>

                <ul>
                    <li>Apply</li>
                    <li>Visit</li>
                    <li>Calender</li>
                </ul>

            </div>
    </div>
);

export default Hero;
