import React, {useContext, useRef, useState} from 'react';
import {AuthContext} from "../../context/auth-context";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const signInRef = useRef();
    const signUpRef = useRef();



    const signIn = () =>{
        console.log(signInRef.current);
        if (!signInRef.current.classList.contains("login-signup-form__link_active")){
            signInRef.current.classList.add("login-signup-form__link_active");
            signInRef.current.classList.remove("login-signup-form__link_inactive");
            signUpRef.current.classList.add("login-signup-form__link_inactive");
            signUpRef.current.classList.remove("login-signup-form__link_active");
            setIsSignIn(true);
        }
    }

    const signUp = () =>{
        console.log(signUpRef.current);
        if (!signUpRef.current.classList.contains("login-signup-form__link_active")){
            signUpRef.current.classList.add("login-signup-form__link_active");
            signUpRef.current.classList.remove("login-signup-form__link_inactive");
            signInRef.current.classList.add("login-signup-form__link_inactive");
            signInRef.current.classList.remove("login-signup-form__link_active");
            setIsSignIn(false);
        }
    }

    return (
        <div className="login-signup-form">
            <div className="login-signup-form__links">
                <ul className="login-signup-form__navigation">
                    <li className="login-signup-form__link login-signup-form__link_active"
                        ref={signInRef}
                        onClick={signIn}>Sign in
                    </li>
                    <li className="login-signup-form__link login-signup-form__link_inactive"
                        ref={signUpRef}
                        onClick={signUp}>Sign up
                    </li>
                </ul>
            </div>
            {isSignIn === true
                ? <SignIn/>
                : <SignUp/>
            }
        </div>
    );
};

export default Login;