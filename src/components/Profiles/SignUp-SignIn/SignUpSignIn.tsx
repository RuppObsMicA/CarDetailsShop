import React, {useState} from 'react';

//Components
import {SignUpPage} from "./SignUp/SignUpPage";
import {SignInPage} from "./SignIn/SignInPage";
import {SignInSignUpHeader} from "./SinInSignUpHeader/SignInSignUpHeader";

// Styles
import "./SignUp-signIn.scss"


export const SignUpSignIn = () => {

    const [toggleSignInSignUp, setToggleSignInSignUp] = useState('signIn');

    return (
        <div className='signUp-signIn'>
            <div className="signin-signup-form" onClick={e => e.stopPropagation()}>
                <SignInSignUpHeader
                    toggleSignInSignUp={toggleSignInSignUp}
                    setToggleSignInSignUp = {setToggleSignInSignUp}
                />
                {toggleSignInSignUp === 'signIn'
                    ? <SignInPage/>
                    : <SignUpPage/>
                }
            </div>
        </div>
    );
};