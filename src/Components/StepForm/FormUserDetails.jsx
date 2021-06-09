import { Button } from '@material-ui/core';
import React from 'react'
import "./FormUserDetails.scss";



const FormUserDetails = ({nextStep, values, handleChange}) => {

    return (
        <div className="form__container">

            <div className="row">

                <div className="row__left">
                    <label className="label">Firstname</label>
                    <input type="text" onChange={handleChange("firstname")} value={values.firstname} className="form__input" />
                </div>

                <div className="row__right">
                    <label className="label">Lastname</label>
                    <input type="text" onChange={handleChange("lastname")} value={values.lastname} className="form__input" />
                </div>

            </div>

            <div className="row">

                <div className="row__left">
                    <label className="label">D.O.B</label>
                    <input type="text" onChange={handleChange("dob")} value={values.dob} className="form__input" />
                </div>

                <div className="row__right">
                    <label className="label">Sex</label>
                    <input type="text" onChange={handleChange("sex")} value={values.sex} className="form__input" />
                </div>

            </div>

            <div className="row">

                <div className="row__left">
                    <label className="label">Nationality</label>
                    <input type="text" onChange={handleChange("nationality")} value={values.nationality}  className="form__input" />
                </div>

                <div className="row__right">
                    <label className="label">Guardian Phone Number</label>
                    <input type="text" onChange={handleChange("phoneNumber")} value={values.phoneNumber}  className="form__input" />
                </div>

            </div>

            <div className="row">

                <div className="row__left">
                    <label className="label">Denomination</label>
                    <input type="text" onChange={handleChange("denomination")} value={values.denomination} className="form__input" />
                </div>

                <div className="row__right">
                    <label className="label">Home Language</label>
                    <input type="text" onChange={handleChange("language")} value={values.language} className="form__input" />
                </div>

            </div>

            <div className="next__button">
                <Button variant="contained" onClick={() => nextStep()} color="primary">Next</Button>
            </div>

        </div>
    )
}


export default FormUserDetails;
