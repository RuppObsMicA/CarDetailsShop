import React from 'react';

type SignInSignUpHeaderProps = {
    toggleSignInSignUp: string;
    setToggleSignInSignUp: (value: string) => void;
};

export const SignInSignUpHeader = ({
    toggleSignInSignUp,
    setToggleSignInSignUp,
}: SignInSignUpHeaderProps) => {
    const handleClick = (typeOfChosenWindow: string) => {
        setToggleSignInSignUp(typeOfChosenWindow);
    };

    return (
        <div className="signin-signup-form__links">
            <ul className="signin-signup-form__navigation">
                <li
                    className={
                        toggleSignInSignUp === 'signIn'
                            ? 'signin-signup-form__link signin-signup-form__signin-link signin-signup-form__link_active'
                            : 'signin-signup-form__link signin-signup-form__signin-link'
                    }
                    onClick={() => handleClick('signIn')}
                >
                    Sign in
                </li>
                <li
                    className={
                        toggleSignInSignUp === 'signUp'
                            ? 'signin-signup-form__link signin-signup-form__signup-link signin-signup-form__link_active'
                            : 'signin-signup-form__link signin-signup-form__signup-link'
                    }
                    onClick={() => handleClick('signUp')}
                >
                    Sign up
                </li>
            </ul>
        </div>
    );
};
