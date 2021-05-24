import React from 'react';
import "./Blog.scss";


const Blog = () => (
    <div className="blog">

        <h5>News & Blog</h5>

        <div className="container">
           
            
            <div className="controler">
                <div className="next"></div>
                <div className="prev"></div>
            </div>

            <div className="news">
                <div className="card__container">

                    <div className="card"></div>

                    <div className="card"></div>

                    <div className="card"></div>

                    <div className="card"></div>
                    <div className="card"></div>

                    <div className="card"></div>

                    <div className="card"></div>

                    <div className="card"></div>
                    {/* <div className="card"></div> */}
                </div>
            </div>
        </div>

    </div>
);



export default Blog;

