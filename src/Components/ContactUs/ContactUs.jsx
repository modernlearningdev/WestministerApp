import { Button } from '@material-ui/core';
import React from 'react';
import "./ContactUs.scss";
import Logo from "../../images/logo.png";

import Map from '../Map/Map';




const ContactUs = () => {



    return (

        <>
            <div className="contactus">
                <div className="title__wrapper">
                    <div>
                        <h3>Get In Touch</h3>
                        <p>We would Like to here from you </p>
                    </div>

                    <div className="logo__container">
                        <img src={Logo} alt="WIS" srcset="" />
                    </div>

                </div>


            </div>


            <div className="bg">



                <div className="contact__form">

                    <div className="map__wrapper">
                        <Map />
                    </div>

                    <div className="form__container">

                        <div className="row">
                            <label htmlFor="" className="label">Firstname</label>
                            <input type="text" className="form__input" placeholder="Fistname" />
                        </div>

                        <div className="row">
                            <label htmlFor="" className="label">Email</label>
                            <input type="text" className="form__input" placeholder="Email" />
                        </div>

                        <div className="row">
                            <label htmlFor="" className="label">Message</label>
                            <textarea type="text" className="form__input message" rows="4" cols="50" placeholder="Message ..." />
                        </div>

                        <Button color="primary" className="submit__button" size="large" variant="outlined">Submit</Button>

                    </div>


                </div>


            </div>

        </>
    )


};

export default ContactUs;



