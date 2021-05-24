import { ChevronRight, Facebook, Instagram, Phone, Twitter } from '@material-ui/icons';
import React from 'react';
import "./Footer.scss";
import Logo from "../images/logo.png";

const Footer = () => (
    <div className="footer">
        <div className="footer__container">

            <div className="left__container">

                <div className="image__logo">
                    <img src={Logo} alt="" srcset="" />
                </div>

                <div className="wrapper">
                    <h5>369 Pomona Easst, Borrowdale</h5>
                    <h5>Harare, Zimbabwe</h5>
                    <h6>Directions <ChevronRight /> </h6>
                </div>
                

            </div>

            <div className="right__container">

                <div className="left">
                    <ul>
                        <li>About WIS</li>
                        <li>Admissions</li>
                        <li>Academics</li>
                        <li>Resources</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="center">
                    <ul>
                        <li>Calenders & Schedules</li>
                        <li><Phone/>  +26378824073</li>
                        <li><Phone/>  +26378824073</li>
                        <li><Phone/>  +26378824073</li>
                    </ul>
                </div>
                <div className="right">
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>

            </div>
        </div>
    </div>
);


export default Footer;

