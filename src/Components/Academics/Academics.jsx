import React from "react";
import "./Academics.scss";
import Blob1 from "../../images/1.svg";
import Blob3 from "../../images/3.svg"

import BlogTopImg from "../../images/WIS students35.jpg";
import BlogTopImg2 from "../../images/WIS students41.jpg";
import BlogTopImg3 from "../../images/WIS students30.jpg"
// import Footer from "../Footer/Footer";
import FooterSm from "../FooterSm/FooterSm";


const Academics = () => (
    <div className="academics">
        <h3 className="title underline">Academics</h3>
        <h1 className=" title overview">Academics Overview</h1>

        <p className="description">
            Westminster International School endeavours to be a school of academic excellence through provision of quality education to its learners. The institution comprises of learners of mixed abilities, and our main aim is to mould a learner who can fit in any society. Our teaching and learning methods are in line with the 21𝑠𝑡 century teaching methodologies. Since we have learners of different abilities, every learner is catered for, through a satisfactory teacher-pupil ratio. This is done through remedial lessons for non-academically gifted learners and extension work for gifted learners.
        </p>


        <div className="blob__container">
            <div className="blog__container__left">

                <img src={Blob1} alt="" className="blob__left__back" />
                <img src={BlogTopImg} alt="" className="blob__left__top" />

            </div>

            <div className="blob__container__right">
                <h3 className="title">Form 1 - 2</h3>

                <p className="description">
                    Comprises of a class size of 15 learners per class and a full range of
                    subjects offered. Our subjects at this level are as follows:
                    Mathematics, Biology, Physics and Chemistry, Geography, I.C.T
                    English, French, History, Business Studies, Accounting, Religious
                    studies and Shona.
                    Whilst most schools offer Combined Science at Form 1, the school
                    introduces Pure Sciences at this level. This is done in order to:

                    <ul className="list">
                        <li className="list__item">
                        identify those learners who are gifted in science subjects at a very tender age.
                        </li>

                        <li className="list__item">
                        give a solid foundation to all learners on how to tackle Pure Sciences at a later stage.  
                        </li>
                    </ul>
                </p>

            </div>
        </div>


        {/* another blob container  */}

        <div className="blob__container blob2">
            <div className="blog__container__left">

                <img src={Blob3} alt="" className="blob__left__back" />
                <img src={BlogTopImg2} alt="" className="blob__left__top" />

            </div>

            <div className="blob__container__right">
                <h3 className="title">Form 3 - 4</h3>

                <p className="description">
                Adheres to small class sizes so as to cater for every individual at Form 3 and 4, in preparation of CAIE-IGCSE examinations written by all learners. Through the involvement of the school and the parent/guardian, learners are either given or choose subjects to do at this level based on the following combinations; Arts and Sciences or Arts and Commercials or Sciences and Commercials. At this level, the following subjects are on offer:
Arts and Humanities – English, History, Religious studies, Sociology, Literature in English and French
Commercials – Business Studies, Economics and Accounting
Sciences – Mathematics, Physics, Chemistry, Biology, Geography and Environmental Management I.C.T is compulsory to every learner.
                    
                </p>

            </div>
        </div>

        {/* another blob container */}

        <div className="blob__container last">
            <div className="blog__container__left">

                <img src={Blob1} alt="" className="blob__left__back" />
                <img src={BlogTopImg3} alt="" className="blob__left__top" />

            </div>

            <div className="blob__container__right">
                <h3 className="title">Form 5 - 6</h3>

                <p className="description">
                Three of the subjects taken from one combination are done by learners at this stage which are in line with the global trends and the combinations to choose from are as follows:
                Arts and Humanities – History, Divinity, Sociology and Literature in English
                Commercials – Business Studies, Economics, Accounting, Mathematics, Travel and Tourism
                Sciences – Mathematics, Physics, Chemistry, Biology and Geography
                Computer Science is done as a fourth subject by every learner and is compulsory.
                </p>

            </div>
        </div>

        {/* <FooterSm /> */}
    </div>

    
);

export default Academics;





