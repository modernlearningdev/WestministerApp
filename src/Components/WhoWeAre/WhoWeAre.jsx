import React from 'react';
import "./WhoWeAre.scss";

import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import CardImage from "../../images/WIS students29.jpg"

const WhoWeAre = () => (

    <div class="content">
        <div class="space"></div>

        <div class="content__card">
            <div class="card__image"
                style={{"backgroundImage": {CardImage}}}
            ></div>
            <div class="card__cta">
                <p>Who We Are </p>
                <ChevronRightIcon />
            </div>
        </div>

        <div class="content__card">
            <div class="card__image"></div>
            <div class="card__cta">
                <p>Academics </p>
                <ChevronRightIcon />
            </div>
        </div>

        <div class="content__card">
            <div class="card__image"></div>
            <div class="card__cta">
                <p>Community </p>
                <ChevronRightIcon />
            </div>
        </div>
        <div class="space"></div>

    </div>
);


export default WhoWeAre;
