import React from 'react';
import "./About.scss";
import CardImage from "../../images/31.jpg"


const About = () => (
    <div className="about">
        
        <div className="container">
            <div className="about__title">
                <h5>About Us</h5>
            </div>
            <div className="about__description">
                <h2>Why Choose Us</h2>
            </div>

            <div className="about__card__container">
                <div className="card">
                    <div className="card__image">
                        <img src={CardImage} alt="" srcset="" />
                    </div>

                    <div className="card__details">
                        <h3 className="title">Our Vision</h3>

                        <p>
                        Our Education Liberates 
                        the mind, the heart and
                        the hand t hrough unleashing 
                        a hidden gem in each individual
                         academically, artistically, 
                         creatively and in sport, for 
                         the student to become a dependable 
                         and fruitful member of the Zimbabwean
                          community and beyond
                        </p>
                    </div>
                </div>


                <div className="card">
                    

                    <div className="card__details">
                        <h3 className="title">Our Mission</h3>

                        <p>
                        Our Education Liberates 
                        the mind, the heart and
                        the hand t hrough unleashing 
                        a hidden gem in each individual
                         academically, artistically, 
                         creatively and in sport, for 
                         the student to become a dependable 
                         and fruitful member of the Zimbabwean
                          community and beyond
                        </p>
                    </div>

                    <div className="card__image">
                        <img src={CardImage} alt="" srcset="" />
                    </div>
                </div>


                <div className="card">
                    <div className="card__image">
                        <img src={CardImage} alt="" srcset="" />
                    </div>

                    <div className="card__details">
                        <h3 className="title underline">Our Values</h3>

                        <ul className="value__list">
                            <li>Excellence</li>
                            <li>Courage</li>
                            <li>Teamwork</li>
                            <li>Motication</li>
                            <li>Transparrency</li>
                            <li>Spirituality</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
);

export default About ;

