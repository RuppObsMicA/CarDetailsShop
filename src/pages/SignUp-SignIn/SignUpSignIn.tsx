import React, { useState } from 'react';

import { SignUp } from './SignUp/SignUp';
import { SignIn } from './SignIn/SignIn';
import { SignInSignUpHeader } from './SinInSignUpHeader/SignInSignUpHeader';

import './SignUp-signIn.scss';

export const SignUpSignIn = () => {
    const [toggleSignInSignUp, setToggleSignInSignUp] = useState('signIn');

    return (
        <div className="signUp-signIn">
            <div className="signin-signup-form">
                <SignInSignUpHeader
                    toggleSignInSignUp={toggleSignInSignUp}
                    setToggleSignInSignUp={setToggleSignInSignUp}
                />
                {toggleSignInSignUp === 'signIn' ? <SignIn /> : <SignUp />}
            </div>
        </div>
    );
};
