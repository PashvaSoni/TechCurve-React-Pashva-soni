import React, { useState } from 'react'
import GeneralInput from './GeneralInput';

function validateString(str1, minLength, maxLength) {
    console.log(str1.length)
    if (str1.length > minLength && str1.length < maxLength) {
        return false;
    }
    else { return true }
}
const UserForm = () => {
    const [userDetails, setDetails] = useState({
        username: "Pashva",
        age: 24,
        gender: "male",
        citizen: true,
        password: "",
    });
    const [error, setError] = useState(false);
    const [display, setDisplay] = useState(false);
    console.log(userDetails)

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setDisplay(true)
    }
    const onChangeUsernameFunc = (e) => {
        let username = e.target.value;
        setError(validateString(username, 3, 15))
        let newUserDetails = { ...userDetails, username: username }
        setDetails(newUserDetails)


    }
    const onChangeAgeFunc = (e) => {
        let age = e.target.value;
        let newUserDetails = { ...userDetails, age: age }
        setDetails(newUserDetails)

    }
    const onChangeGenderFunc = (e) => {
        let gender = e.target.value;
        let newUserDetails = { ...userDetails, gender: gender }
        setDetails(newUserDetails)
    }

    const onChangeCitizenFunc = (e) => {
        let citizen = e.target.value;
        let newUserDetails = { ...userDetails, citizen: citizen }
        setDetails(newUserDetails)
    }
    const onChangePasswordFunc = (e) => {
        let password = e.target.value;
        let newUserDetails = { ...userDetails, password: password }
        setDetails(newUserDetails)
    }

    const onChangeLanguageFunc = (e) => {
        let language = e.target.value;
        console.log(e.target.checked)
        let newUserDetails = { ...userDetails, language: language }
        setDetails(newUserDetails)
    }
    return (
        <div className='userFormContainer'>
            <h1>User Details</h1>
            <form onSubmit={onHandleSubmit} >
                <div className='formElementContainer'>
                    <GeneralInput error={error} errorMessage={"Username should be between 3 to 15 character "} customChangeFunction={onChangeUsernameFunc} inputValue={userDetails.username} required={true} inputTitle={"User Name"} inputName={"username"} holder={"Enter Name"} inputType={'text'} />
                    <GeneralInput customChangeFunction={onChangeAgeFunc} inputValue={userDetails.age} inputTitle={"User Age"} inputName={"age"} inputType={'number'} holder={"Enter Age"} />
                    <GeneralInput customChangeFunction={onChangeGenderFunc} options={["male", "female", "other"]} inputValue={userDetails.gender} inputTitle={"User Gender"} inputName={"gender"} inputType={'select'} />
                    <label>
                        Indian Citizen :
                        <GeneralInput customChangeFunction={onChangeCitizenFunc} inputValue={"yes"} inputTitle={"Yes"} inputName={"citizen"} inputType={'radio'} default={true} />
                        <GeneralInput customChangeFunction={onChangeCitizenFunc} inputValue={"no"} inputTitle={"No"} inputName={"citizen"} inputType={'radio'} />
                    </label>
                    <GeneralInput customChangeFunction={onChangePasswordFunc} inputValue={userDetails.password} required={true} inputTitle={"User Password"} inputName={"password"} holder={"Enter Password"} inputType={'password'} />
                    <label>
                        Language :
                        <br />
                        <GeneralInput customChangeFunction={onChangeLanguageFunc} inputName={'English'} inputTitle={"English"} inputValue={"English"} inputType={'checkbox'} default={true} />
                        <br />
                        <GeneralInput customChangeFunction={onChangeLanguageFunc} inputName={'Gujarati'} inputTitle={"Gujarati"} inputValue={"Gujarati"} inputType={'checkbox'} />
                        <br />
                        <GeneralInput customChangeFunction={onChangeLanguageFunc} inputName={'Hindi'} inputTitle={"Hindi"} inputValue={"Hindi"} inputType={'checkbox'} />
                    </label>

                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
            {display?<p>
                {JSON.stringify(userDetails)}
            </p>:<></>}
        </div>
    )
}

export default UserForm