import { Button } from '@material-ui/core';
import React from 'react';
import "./Admissions.scss";


const Admissions = () => (
    <div className="admissions">
        <div className="container">

            <div className="contents">
                <div className="contents__left">
                    sider here
                </div>

                <div className="contents__right">
                    <h3 className="title">Enrollment</h3>
                    <h5 className="description">
                        please note: Enrollment is striclty on 
                        merit basis after an evaluation test or interview
                    </h5>

                    <div className="form__container">


                        <div className="row">

                            <div className="row__left">
                                <label className="label">Firstname</label>
                                <input type="text" className="form__input" />
                            </div>

                            <div className="row__right">
                                <label className="label">Lastname</label>
                                <input type="text" className="form__input" />
                            </div>

                        </div>

                        <div className="row">

                            <div className="row__left">
                                <label className="label">D.O.B</label>
                                <input type="text" className="form__input" />
                            </div>

                            <div className="row__right">
                                <label className="label">Sex</label>
                                <input type="text" className="form__input" />
                            </div>
                            
                        </div>

                        <div className="row">

                            <div className="row__left">
                                <label className="label">Nationality</label>
                                <input type="text" className="form__input" />
                            </div>

                            <div className="row__right">
                                <label className="label">Guardian Phone Number</label>
                                <input type="text" className="form__input" />
                            </div>
                            
                        </div>

                        <div className="row">

                            <div className="row__left">
                                <label className="label">Denomination</label>
                                <input type="text" className="form__input" />
                            </div>

                            <div className="row__right">
                                <label className="label">Home Language</label>
                                <input type="text" className="form__input" />
                            </div>
                            
                        </div>

                        <div className="next__button">
                        <Button variant="contained" color="primary">Next</Button>
    
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default Admissions;