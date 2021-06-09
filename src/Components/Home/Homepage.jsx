import React from 'react';
import Hero from '../Hero/Hero';
import Separator from '../Separator/Separator';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import WhoWeAreBrief from '../WhoWeAreBrief/WhoWeAreBrief';
import Blog from "../Blog/Blog";
import Visit from "../Visit/Visit";
import Footer from '../Footer/Footer';

const styles = {
    margin: 0,
    padding: 0
}

const Homepage = () => (
    <div className="homepage"  style={{...styles}}>

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


