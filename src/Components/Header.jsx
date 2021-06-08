import React from 'react';
import "./Header.scss";
// import {Menu} from '@material-ui/icons';

import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <div className="header__logo">
        
            <div className="header__logo__img">
                <img src={Logo} alt="" srcset="" />
            </div>


            <div className="header__logo_school">
                <h4>Westminister Internationa School</h4>
                <h6>A Leading and Liberating Education</h6>
            </div>  
        </div>

        <div className="header__menu">
            <ul>
          
                <li className="link"><Link to="/about">About WIS</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="#">Resources</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="signin">Sign In</li>

            </ul>
        </div>
    </div>
);

export default Header