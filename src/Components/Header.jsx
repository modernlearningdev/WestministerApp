import React from 'react';
import "./Header.scss";
import {Menu} from '@material-ui/icons';

import Logo from "../images/logo.png";


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

        {/* <div className="menuicon">
            <Menu />
        </div> */}
        



        {/* header menu links  */}
        <div className="header__menu">
            <ul>
                <li>About WIS</li>
                <li>Admissions</li>
                <li>Academics</li>
                <li>Resources</li>
                <li>Contact</li>
                <li className="signin">Sign In</li>
            </ul>
        </div>
    </div>
);

export default Header