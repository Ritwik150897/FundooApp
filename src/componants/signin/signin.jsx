import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css';
import { login } from "../../services/userService";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin() {

    const [userInput, setUserInput] = React.useState({ email: "", password: "" })
    const [rejexObj, setRejexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })
    const takeUsername = (event) => {
        // setUserInput({
        //     email: event.target.value
        // }) 

        setUserInput(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takePassword = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const submit = () => {
        let emailTest = emailRegex.test(userInput.email)
        let passwordTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRejexObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter correct email"
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
                passwordHelper: "Enter correct Password"
            }))
        }
        else if (passwordTest === true) {
            setRejexObj(prevState => ({
                ...prevState,
                passwordBorder: false,
                passwordHelper: ""
            }))
        }

        console.log(userInput)

        if(emailTest === true && passwordTest === true){
            login(userInput).then((response) => {
                console.log(response); 
                localStorage.setItem("token",response.data.id)
            }).catch((error) => {console.log(error)})

            console.log("login successful")
        }
    }

    return (
        <div className="MainContainer1">
            <div className="Box1">
                <div className="Logo1">
                    <img id="Logo1" src="/googleLogo.png" alt="Logo" />
                </div>

                <div className="Heading1">
                    <span id="SignIn">Sign in</span>
                    <span id="Use">Use your Google Account</span>
                </div>

                <div className="UsernameContainer">
                    <div className="UserBox">
                        <TextField fullWidth id="fullWidth" label="Email or Phone" variant="outlined" onChange={takeUsername} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                    </div>
                </div>

                <div className="ForgotUsername">
                    <Button variant="text" id='BlueText'>Forgot email?</Button>
                </div>

                <div className="PasswordContainer">
                    <div className="UserBox">
                        <TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                    </div>
                </div>

                <div className="ForgotUsername">
                    <Button variant="text" id='BlueText'>Forgot Password?</Button>
                </div>

                <div className="Text">
                    <span id="NotText">Not your computer? Use Guest mode to sign in privately.</span>
                </div>

                <div className="LearnMoreText">
                    <Button variant="text" id='BlueText'>Learn More</Button>
                </div>

                <div className="BoxBottom1">
                    <div className="AddAccount">
                        <Button variant="text" id='BlueText'>Create Account</Button>
                    </div>
                    <div className="Next">
                        <Button variant="contained" onClick={submit}>Next</Button>
                    </div>
                </div>
            </div>
            <div className="BottomText1">
                <div className="Languages">
                    <span id="BottomText">English (United States)</span>
                </div>
                <div className="Menu1">
                    <span id="BottomText">Help</span>
                    <span id="BottomText">Privacy</span>
                    <span id="BottomText">Terms</span>
                </div>
            </div>
        </div>
    )
}

export default Signin;