import React, {useRef} from 'react';

const SignInSignUpHeader = ({setIsSignIn}) => {

    const signInRef = useRef();
    const signUpRef = useRef();


    const signIn = () =>{
        console.log(signInRef.current);
        if (!signInRef.current.classList.contains("signin-signup-form__link_active")){
            signInRef.current.classList.add("signin-signup-form__link_active");
            signInRef.current.classList.remove("signin-signup-form__link_inactive");
            signUpRef.current.classList.add("signin-signup-form__link_inactive");
            signUpRef.current.classList.remove("signin-signup-form__link_active");
            setIsSignIn(true);
        }
    }

    const signUp = () =>{
        console.log(signUpRef.current);
        if (!signUpRef.current.classList.contains("signin-signup-form__link_active")){
            signUpRef.current.classList.add("signin-signup-form__link_active");
            signUpRef.current.classList.remove("signin-signup-form__link_inactive");
            signInRef.current.classList.add("signin-signup-form__link_inactive");
            signInRef.current.classList.remove("signin-signup-form__link_active");
            setIsSignIn(false);
        }
    }

    return (
        <div className="signin-signup-form__links">
            <ul className="signin-signup-form__navigation">
                <li className="signin-signup-form__link signin-signup-form__signin-link signin-signup-form__link_active"
                    ref={signInRef}
                    onClick={signIn}>Sign in
                </li>
                <li className="signin-signup-form__link signin-signup-form__signup-link signin-signup-form__link_inactive"
                    ref={signUpRef}
                    onClick={signUp}>Sign up
                </li>
            </ul>
        </div>
    );
};

export default SignInSignUpHeader;