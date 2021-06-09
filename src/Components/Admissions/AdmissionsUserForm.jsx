// import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import FormPersonalDetails from '../StepForm/FormPersonalDetails';
import FormUserDetails from '../StepForm/FormUserDetails';



const UserForm = () => {

    const [input, SetInput] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        sex: "",
        nationality: "",
        phoneNumber: "",
        denomination: "",
        language: "",
        presentSchool: "",
        presentForm: "",
        dateOfAdmission: "",
        intendedFormOfAdmission: "",

    });



    const [step, setStep] = useState(1);
    const { firstname, lastname, dob, sex, nationality, phoneNumber, denomination, language, presentSchool, presentForm, dateOfAdmission, intendedFormOfAdmission } = input;

    const values = { firstname, lastname, dob, sex, nationality, phoneNumber, denomination, language, presentSchool, presentForm, dateOfAdmission, intendedFormOfAdmission };




    const nextStep = () => {

        const _step = step;
        setStep(_step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    const handleChange = (input) => e => {
        SetInput({ [input]: e.target.value })
        console.log(e.target.value)
    }

    return (

        <div>

            {
               
                step === 1 ? (
                    <FormUserDetails nextStep={nextStep} values={values} handleChange={handleChange} />
                ) : step === 2 ? (<FormPersonalDetails nextStep={nextStep} prevStep={prevStep} values={values} handleChange={handleChange} />): (null)

                
                
            }

            
            

        </div >


    )

}



export default UserForm;