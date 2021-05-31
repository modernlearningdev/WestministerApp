import { Button } from '@material-ui/core';
import React from 'react';
import "./Admissions.scss";
import UserForm from "./AdmissionsUserForm";


const Admissions = () => (
    <div className="admissions">
        <div className="container">

            <div className="contents">
                <div className="contents__left">
                    <img src="./images/31.jpg" alt="" srcset="" />
                </div>

                <div className="contents__right">
                    <h3 className="title">Enrollment</h3>
                    <h5 className="description">
                        please note: Enrollment is striclty on 
                        merit basis after an evaluation test or interview
                    </h5>

                    <UserForm />
                </div>
            </div>
        </div>
    </div>
);


export default Admissions;