import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './signup.css';
import { signup } from '../../services/userService';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;

// const useStyle = makeStyles({

//     MainContainer: {
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center"
//     },

//     Box1: {
//         width: "50%",
//         height: "80%",
//         border: "1px solid lightgrey",
//         borderRadius: "5px",
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "center"
//     },

//     Section1: {
//         width: '50%',
//         height: '90%',
//         display: 'flex',
//         flexDirection: 'column'
//     },

//     Logo: {
//         width: '30%',
//         height: '10%',
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'flex-start',
//         "& #Logo": {
//             width: '80px',
//             height: '25px'
//         }
//     },

//     Heading: {
//         width: '100%',
//         height: '12%',
//         display: 'flex',
//         alignItems: 'flex-start',
//         "& #Heading": {
//             fontSize: '20px'
//         }
//     },

//     NameBox: {
//         width: '100%',
//         height: '10%',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         justifyContent: 'space-between',
//         "& #outlined-size-small-1": {
//             width: '160px'
//         }
//     },

//     UsernameBox: {
//         width: '100%',
//         height: '20%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         paddingTop: '5px',
//         "& #SmallText": {
//             paddingTop: '10px',
//             paddingLeft: '10px',
//             fontSize: '12px',
//             color: '#5f6368'
//         }
//     },

//     BlueText1: {
//         width: '80%',
//         height: '10%',
//         display: 'flex',
//         alignItems: 'flex-start',
//         "& #BlueText": {
//             fontSize: '13px',
//             textTransform: 'capitalize',
//             fontWeight: 'bolder'
//         }
//     },
    
//     PasswordBox: {
//         width: '100%;',
//         height: '25%;',
//         display: 'flex;',
//         flexDirection: 'column;',
//         alignItems: 'flex-start;',
//         justifyContent: 'space-between'
//     },

//     PasswordFields: {
//         width: '100%',
//         height: '33.2%',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         justifyContent: 'space-between',
//     },

//     BottomBox: {
//         width: '100%',
//         height: '20%',
//         display: 'flex',
//         alignItems: 'flex-start'
//     },
    
//     SignIn: {
//         width: '40%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'flex-start'
//     },
    
//     Next: {
//         width: '60%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'flex-end',
//         alignItems: 'center'
//     },
    
//     Section2: {
//         width: '35%',
//         height: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         paddingLeft: '50px'
//     },
    
//     Section2Img: {
//         width: '100%',
//         height: '75%',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         "& #Section2-Img": {
//                 width: '200px',
//                 height: '500px'
//         }
//     },

//     Section2Text: {
//         width: '80%',
//         height: '25%',
//         fontWeight: 'lighter',
//     },
    
//     BottomText: {
//         width: '50%',
//         height: '5%',
//         display: 'flex',
//         flexDirection: 'row',
//     },
    
//     Languages: {
//         width: '70%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'flex-start',
//         alignItems: 'center'
//     },
    
//     Menu: {
//         width: '30%',
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',

//         "& #Section2-Img": {
//             fontSize: '12px',
//         }
//     },

//     ['@media only screen and (min-width :360px) and (max-width :480px)']:{
//         Box: {
//             width: '80%',
//             height: '90%',
//             border: 'none',
//             alignItems: 'flex-start',
//             justifyContent: 'flex-start'
//         },
    
//         Section1: {
//             width: '50%',
//             height: '90%',
//             display: 'flex',
//             flexDirection: 'column'
//         },
    
//         Logo: {
//             width:'80%',
//             marginLeft: '15px',
//             marginBottom: '20px'
//         },
    
//         Heading: {
//             width: '100%',
//             height: '10%',
//             textAlign: 'left',
//             marginLeft: '15px',
//             "& #Heading":{
//                 fontSize: '15px'
//             }
//         },
    
//         NameBox: {
//             width: '100%',
//             height: '10%',
//             display: 'flex',
//             flexDirection: 'column',
//             marginTop: '20px',
//             marginLeft: '15px',
//             "& #outlined-size-small-1":{
//                 width: '230px',
//                 height: '1ch',
//                 marginBottom: '20px'
//             }
//         },
    
//         UsernameBox: {
//             width: '259px',
//             height: '20%',
//             marginTop: '35px',
//             marginLeft: '15px',
//             "& #SmallText":{
//                 width: '259px',
//                 paddingTop: '50px',
//                 marginLeft: '15px',
//                 textAlign: 'left',
//             }
//         },
    
//         BlueText1: {
//             width: '259px',
//             height: '10%',
//             marginLeft: '15px',
//             "& #BlueText": {
//                 textAlign: 'left',
//                 fontSize: '12px',
//             }
//         },
    
//         PasswordFields: {
//             width: '259px',
//             flexDirection: 'column',
//             marginLeft: '15px',
//         },
    
//         PasswordBox: {
//             "& checkBox1": {
//                 width: '300px',
//                 marginLeft: '15px',
//                 textAlign: 'left',
//             }
//         },
    
//         BottomBox: {
//             marginTop: '70px',
//         },
    
//         SignIn: {
//             marginLeft: '15px',
//             position: 'relative',
//             bottom: '30px',
//         },
    
//         Next: {
//             paddingLeft: '130px',
//             position: 'relative',
//             bottom: '30px',
//         },
    
//         Section2: {
//             display: 'none',
//         },
    
//         BottomText: {
//             width: '80%',
//             "& #BottomText": {
//                 fontSize: '12px'
//             }
//         },

//         Menu: {
//             width: '50%',
//         },
//     }
// })

function Signup() {

   // const classes = useStyle()

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
        <Box>
            <Box className=
            // {classes.MainContainer}
            "MainContainer">

                <div className=
                //{classes.Box1}
                "Box1"
                >
                    <Box className="Section1"
                    //{classes.Section1}
                    >
                        <Box className= "Logo"
                        //{classes.Logo}
                        >
                            <img src='/googleLogo.png' id='Logo' alt="Logo" />
                        </Box>
                        <Box className= "Heading"
                        //{classes.Heading}
                        >
                            <span id='Heading'>Create your Google Account</span>
                        </Box>
                        <Box className= "NameBox"
                        //{classes.NameBox}
                        >
                            <TextField label="First name" id="outlined-size-small-1" size="small" onChange={takeFirstName} error={rejexObj.firstNameBorder} helperText={rejexObj.firstNameHelper} />
                            <TextField label="Last name" id="outlined-size-small-1" size="small" onChange={takeLastName} error={rejexObj.lastNameBorder} helperText={rejexObj.lastNameHelper} />
                        </Box>
                        <Box className= "UsernameBox"
                        //{classes.UsernameBox}
                        >
                            <TextField fullWidth label="Username" id="outlined-size-small-1" size="small" onChange={takeUsername} error={rejexObj.emailBorder} helperText={rejexObj.emailHelper} />
                            <span id='SmallText'>Your can use letters, numbers and periods</span>
                        </Box>
                        <Box className= "BlueText1"
                        //{classes.BlueText1}
                        >
                            <Button variant="text" id='BlueText'>Use my current email address instead</Button>
                        </Box>
                        <Box className= "PasswordBox"
                        //{classes.PasswordBox}
                        >
                            <Box className=
                            "PasswordFields"
                            //{classes.PasswordFields}
                            >
                                <TextField label="Password" id="outlined-size-small-1" type="password" size="small" onChange={takePassword} error={rejexObj.passwordBorder} helperText={rejexObj.passwordHelper} />
                                <TextField label="Confirm" id="outlined-size-small-1" type="password" size="small" onChange={takeConfirmPassword} error={rejexObj.confirmPasswordBorder} helperText={rejexObj.confirmPasswordHelper} />
                            </Box>
                            <span id='SmallText'>Use 8 or more characters with a mix of letters, numbers and symbols</span>
                            <FormGroup id='checkBox1'>
                                <FormControlLabel control={<Checkbox />} label="Show password" />
                            </FormGroup>
                        </Box>
                        <Box className= "BottomBox"
                        //{classes.BottomBox}
                        >
                            <Box className= "SignIn"
                            //{classes.SignIn}
                            >
                                <Button variant="text" id='BlueText'>Sign in instead</Button>
                            </Box>
                            <Box className= "Next"
                           // {classes.Next}
                            >
                                <Button variant="contained" size="large" onClick={submit}>Next</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className= "Section2"
                    //{classes.Section2}
                    >
                        <Box className= "Section2Img"
                        //{classes.Section2Img}
                        >
                            <img src='/Signup.svg' id='Section2-Img' alt="shield" />
                        </Box>
                        <Box className= "Section2Text"
                        //{classes.Section2Text}
                        >
                            <span>One account. All of Google working for you.</span>
                        </Box>
                    </Box>
                </div>

                <Box className= "BottomText"
                //{classes.BottomText}
                >
                    <Box className= "Languages"
                    //{classes.Languages}
                    >

                        <span id="BottomText">English (United States)</span>
                    </Box>
                    <Box className= "Menu"
                    //{classes.Menu}
                    >
                        <span id="BottomText">Help</span>
                        <span id="BottomText">Privacy</span>
                        <span id="BottomText">Terms</span>
                    </Box>
                </Box>

            </Box>

        </Box>
    )
}

export default Signup
