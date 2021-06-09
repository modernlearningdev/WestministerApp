import React from 'react';
import './WhoWeAreBrief.scss';
import {Link} from "react-router-dom"

const WhoWeAreBrief = () => (
    <div class="whoweare__brief">
        <div class="image__card">
            {/* <!-- dfdf --> */}
        </div>

        <div class="description">
            <h4>Who We Are</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti veritatis neque explicabo sapiente alias? Neque, veritatis ipsam expedita itaque illum illo aspernatur quidem voluptate nesciunt amet eius doloremque molestiae provident.</p>
            <Link to="#" class="about__cta">About WIS</Link>
        </div>
    </div>
);

export default WhoWeAreBrief;

