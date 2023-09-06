import React from "react";
import { useState, useContext } from "react";

import "./signup.css";
import logoImg from '../../images/Frame 1000004410.png';

import { API } from "../../../service/api";
import { DataContext } from '../../../context/DataProvider';

import { useNavigate } from "react-router-dom";


const signupInitialValues = {
    name:"",
    email: "",
    mobile:"",
    password:""
}

const loginInitialValues = {
    email: "",
    password:""
}


const Login = ({isUserAuthenticated}) => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');


    const navigate = useNavigate();
    const {setAccount} = useContext(DataContext);


    function onInputChange(event) {
        setSignup({ ...signup, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }

    function onValueChange(event){
        setLogin({...login, [event.target.name]: event.target.value});
    }
    
    function toggleSignup(){
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }


    const signupUser = async() => {
        let response = await API.userSignup(signup);
        if (response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleSignup('login');
        }
        else{
            setError('Something went wrong! Please try again later');
        }
    }


    const loginUser = async() => {
        let response = await API.userLogin(login);

        if(response.isSuccess){
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

            setAccount({name: response.data.name, email: response.data.email});

            isUserAuthenticated(true);
            setLogin(loginInitialValues);
            navigate("/");
        }
        else {
            setError('Something went wrong! Please try again.')
        }
    }

    return (
            <div className="loginContainer">
                <img className="logo-img" src={logoImg} alt="Edfling" />
                {
                    account==='login' ?
                    <>
                        <input type="text" onChange={(event) => onValueChange(event)} name="email" value={login.email} placeholder="Email" required />
                        <input type="password" onChange={(event) => onValueChange(event)} name="password" value={login.password} placeholder="Password" required />
                        <button className="signup-btn" type="submit" onClick={loginUser}>Log In</button>
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Create an account!</button>
                    </>
                    :
                    <>
                        <input type="text" onChange={(event) => onInputChange(event)} name="name"  placeholder="Name" autoComplete="off" required />
                        <input type="email" onChange={(event) => onInputChange(event)} name="email"  placeholder="Email" autoComplete="off" required />
                        <input type="text" onChange={(event) => onInputChange(event)} name="mobile"  placeholder="Mobile" autoComplete="off" required />
                        <input type="password" onChange={(event) => onInputChange(event)} name="password"  placeholder="Password" autoComplete="off" required />
                        <button className="signup-btn" type="submit" onClick={signupUser}>Sign Up</button>
                        { error && <p style={{color: 'red'}}>{error}</p> }
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Already have an account!</button>
                    </>
                }
            </div>
    )
}

export default Login;