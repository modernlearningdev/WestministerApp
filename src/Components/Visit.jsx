import { ChevronRight } from '@material-ui/icons';
import React from 'react';
import "./Visit.scss";


const Visit = () => (
    <div className="visit">
        <div className="visit__container">
            <div className="space"></div>
            <h5>Schedule a Visti at Westminister International School</h5>
            <a href="#" className="visit__btn">Schedule a Visit <span><ChevronRight /></span></a>
            <div className="space"></div>
        </div>
    </div>
);


export default Visit;