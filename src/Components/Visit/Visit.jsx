import { ChevronRight } from '@material-ui/icons';
import React from 'react';
import {Link} from "react-router-dom"
import "./Visit.scss";


const Visit = () => (
    <div className="visit">
        <div className="visit__container">
            <div className="space"></div>
            <h5>Schedule a Visti at Westminister International School</h5>
            <Link href="#" className="visit__btn">Schedule a Visit <span><ChevronRight /></span></Link>
            <div className="space"></div>
        </div>
    </div>
);


export default Visit;