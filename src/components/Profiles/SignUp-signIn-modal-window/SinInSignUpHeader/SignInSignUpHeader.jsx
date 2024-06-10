import React from 'react';

const SignInSignUpHeader = ({isSignIn, setIsSignIn}) => {

    const handleClick = (typeOfChosenWindow) => {
       typeOfChosenWindow === "signIn" ? setIsSignIn(true) :  setIsSignIn(false);
    }

    return (
        <div className="signin-signup-form__links">
            <ul className="signin-signup-form__navigation">
                <li className={isSignIn
                    ? "signin-signup-form__link signin-signup-form__signin-link signin-signup-form__link_active"
                    : "signin-signup-form__link signin-signup-form__signin-link"
                }
                    onClick={() => handleClick("signIn")}>Sign in
                </li>
                <li className={!isSignIn
                    ? "signin-signup-form__link signin-signup-form__signup-link signin-signup-form__link_active"
                    : "signin-signup-form__link signin-signup-form__signup-link"
                }
                    onClick={() => handleClick("signUp")} >Sign up
                </li>
            </ul>
        </div>
    );
};

export default SignInSignUpHeader;