import { Button } from '@material-ui/core';
import React from 'react'
import "./FormPersonalDetails.scss";



const FormPersonalDetails = ({prevStep, nextStep, values, handleChange}) => (

    <div className="form__container1">

            <div className="row1">

                <div className="row__left1">
                    <label className="label1">Present/Last School Attended</label>
                    <input type="text" onChange={handleChange("firstname")} value={values.firstname} className="form__input1" />
                </div>

                <div className="row__right1">
                    <label className="label1">Date of admission</label>
                    <input type="text" onChange={handleChange("lastname")} value={values.lastname} className="form__input1" />
                </div>

            </div>

            
           

            

            <div className="ctl__button">
                <Button variant="contained" onClick={() => prevStep()} color="primary">Back</Button>
                <Button variant="contained" onClick={() => nextStep()} color="primary">Next</Button>
            </div>

        </div>



)


export default FormPersonalDetails