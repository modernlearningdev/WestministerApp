import React from 'react';
import Hero from './Hero';
import Separator from './Separator';
import WhoWeAre from './WhoWeAre';
import WhoWeAreBrief from './WhoWeAreBrief';
import Blog from "./Blog";
import Visit from "./Visit";
import Footer from './Footer';


const Homepage = () => (
    <div className="homepage">

        <div className="bg_effect">
            <Hero />
            <WhoWeAre />
            <WhoWeAreBrief />
        </div>

        <Separator />

        <Blog />


        <Visit />

        <Footer />

    </div>
);


export default Homepage;


