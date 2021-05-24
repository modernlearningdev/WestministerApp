import React from 'react';
import "./Hero.scss";
import Separator from "../images/sep.png"



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

                <div class="separator">
                    <img src={Separator} alt="" srcset="" />
                </div>

                <ul>
                    <li>Apply</li>
                    <li>Visit</li>
                    <li>Calender</li>
                </ul>

            </div>
    </div>
);

export default Hero;
