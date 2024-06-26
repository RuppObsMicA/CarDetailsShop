import React, { useRef, useState} from 'react';
import SignUpModalWindow from "./SignUpModalWindow/SignUpModalWindow";
import SignInModalWindow from "./SignInModalWindow/SignInModalWindow";
import SignInSignUpHeader from "./SinInSignUpHeader/SignInSignUpHeader";
import "./SignUp-signIn-modal-window.scss"

const SignUpSignInModalWindow = ({modalActive, setModalActive}) => {

    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className={modalActive ? "signUp-signIn-modal-window active" : "signUp-signIn-modal-window"}
             onClick={() => setModalActive(false)}>
            <div className="signin-signup-form" onClick={e => e.stopPropagation()}>
                <SignInSignUpHeader
                    isSignIn={isSignIn}
                    setIsSignIn = {setIsSignIn}
                />
                {isSignIn === true
                    ? <SignInModalWindow/>
                    : <SignUpModalWindow/>
                }
            </div>
        </div>

    );
};

export default SignUpSignInModalWindow;