import React from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// import { react_app_mapbox_token } from "../util/util";
import "./ContactUs.scss";

import Map from './Map';




const ContactUs = () => {



    //     Latitude: -17.820646 / S 17° 49' 14.325''
    // Longitude: 30.999092 / E 30° 59' 56.731''

    return (

        <>
            <div className="contactus">

            </div>

            <div className="bg">

                <div className="title__wrapper">
                    <h3>Get In Touch</h3>
                    <p>We would Linek to here from you </p>
                </div>

                <div className="contact__form">

                    <div className="map__wrapper">
                        <Map />
                    </div>

                    <div className="form__container">

                        <div className="row">
                            <label htmlFor="" className="label">Firstname</label>
                            <input type="text" placeholder="fistname" />
                        </div>

                        <div className="row">
                            <label htmlFor="" className="label">Email</label>
                            <input type="text" placeholder="fistname" />
                        </div>

                        <div className="row">
                            <label htmlFor="" className="label">Message</label>
                            <input type="text" placeholder="fistname" />
                        </div>

                    </div>


                </div>


            </div>

        </>
    )


};

export default ContactUs;



