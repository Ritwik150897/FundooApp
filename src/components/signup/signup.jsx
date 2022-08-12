import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './signup.css';
import { signup } from '../../services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

function Signup() {

    const [userInput, setUserInput] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        //confirmPassword: ""
        service: "advance"
    })

    const [rejexObj, setRejexObj] = React.useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
        emailBorder: false,
        emailHelper: "",
        passwordBorder: false,
        passwordHelper: "",
        confirmPasswordBorder: false,
        confirmPasswordHelper: ""
    })

    const takeFirstName = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
        //console.log(event.target.value)
    }

    const takeLastName = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
        //console.log(event.target.value)
    }

    const takeUsername = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        //console.log(event.target.value)
    }

    const takePassword = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        //console.log(event.target.value)
    }

    const takeConfirmPassword = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            confirmPassword: event.target.value
        }))
        //console.log(event.target.value)
    }

    const submit = () => {

        let firstNameTest = firstNameRegex.test(userInput.firstName)
        let lastNameTest = lastNameRegex.test(userInput.lastName)
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)
        let confirmPasswordTest = passwordRegex.test(userInput.confirmPassword)

        if (firstNameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                firstNameBorder: true,
                firstNameHelper: "Enter first name"
            }))
        }
        else if (firstNameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ""
            }))
        }

        if (lastNameTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: "Enter last name"
            }))
        }
        else if (lastNameTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                lastNameBorder: false,
                lastNameHelper: ""
            }))
        }

        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Choose a gmail address"
            }))
        }
        else if (emailTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (passwordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: true,
                passwordHelper: "Enter a Password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        if (confirmPasswordTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                confirmPasswordBorder: true,
                confirmPasswordHelper: "confirm Password"
            }))
        }
        else if (confirmPasswordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                confirmPasswordBorder: false,
                confirmPasswordHelper: ""
            }))
        }

        if (emailTest === true && 
            passwordTest === true && 
            confirmPasswordTest === true && 
            firstNameTest === true && 
            lastNameTest === true) {
            signup(userInput).then((response) => {
                console.log(response);
            }).catch((error) => { console.log(error) })

            console.log("Signup successful")
        }
    }


    return (
        <div>
            <div className="MainContainer">

                <div className="Box">
                    <div className="Section1">
                        <div className="Logo">
                            <img src='/googleLogo.png' id='Logo' alt="Logo" />
                        </div>
                        <div className="Heading">
                            <span id='Heading'>Create your Google Account</span>
                        </div>
                        <div className="NameBox">
                            <TextField label="First name" id="outlined-size-small-1" size="small" onChange={takeFirstName} error={rejexObj.firstNameBorder} helperText={rejexObj.firstNameHelper} />
                            <TextField label="Last name" id="outlined-size-small-1" size="small" onChange={takeLastName} error={rejexObj.lastNameBorder} helperText={rejexObj.lastNameHelper} />
                        </div>
                        <div className="UsernameBox">
                            <TextField fullWidth label="Username" id="outlined-size-small" size="small" onChange={takeUsername} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                            <span id='SmallText'>Your can use letters, numbers and periods</span>
                        </div>
                        <div className="BlueText1">
                            <Button variant="text" id='BlueText'>Use my current email address instead</Button>
                        </div>
                        <div className="PassowrdBox">
                            <div className="PasswordFields">
                                <TextField label="Password" id="outlined-size-small-1" type="password" size="small" onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                                <TextField label="Confirm" id="outlined-size-small-1" type="password" size="small" onChange={takeConfirmPassword} error={rejexObj.confirmPasswordBorder} helperText={rejexObj.confirmPasswordHelper} />
                            </div>
                            <span id='SmallText'>Use 8 or more characters with a mix of letters, numbers and symbols</span>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Show password" />
                            </FormGroup>
                        </div>
                        <div className="BottomBox">
                            <div className="SignIn">
                                <Button variant="text" id='BlueText'>Sign in instead</Button>
                            </div>
                            <div className="Next">
                                <Button variant="contained" size="large" onClick={submit}>Next</Button>
                            </div>
                        </div>
                    </div>
                    <div className="Section2">
                        <div className="Section2-Img">
                            <img src='/Signup.svg' id='Section2-Img' alt="shield" />
                        </div>
                        <div className="Section2-Text">
                            <span>One account. All of Google working for you.</span>
                        </div>
                    </div>
                </div>

                <div className="BottomText">
                    <div className="Languages">
                        <span id="BottomText">English (United States)</span>
                    </div>
                    <div className="Menu">
                        <span id="BottomText">Help</span>
                        <span id="BottomText">Privacy</span>
                        <span id="BottomText">Terms</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Signup
