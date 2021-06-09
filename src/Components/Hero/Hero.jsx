import React from 'react';
import "./Hero.scss";
import Separator from "../../images/sep.png";
import {Link} from "react-router-dom";



const Hero = () => (
    <div className="hero">

        <div className="hero__wrapper">
            <h5 className="tagline">
                We are an independent school with small 
                classes, high expectations and a commited
                staff team 
            </h5>
            <Link href="#" className="cta">Learn More</Link> 
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
