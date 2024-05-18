import React, {useContext} from 'react';
import {AuthContext} from "../../../context/auth-context";
import {URL} from "../../../../ServerSettings/serverSettings"

const SignInModalWindow = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const signin = async (event) =>{
        // event.preventDefault();
        // let response = await fetch(URL);
        // if (response.ok){
        //
        // }
        localStorage.setItem('logged', 'true');
        setIsLoggedIn(true);
    }

    return (
        <div className="signin-signup-form__form">
            <form onSubmit={signin} id="authorization-form">
                <label htmlFor="username" className="signin-signup-form__label">Username</label>
                <input type="text" placeholder="Enter Username" id="username" className="signin-signup-form__input" required/>

                <label htmlFor="password" className="signin-signup-form__label">Password</label>
                <input type="password" placeholder="Enter password" id="password" className="signin-signup-form__input" required/>

                <div className="signin-signup-form__forgot-pass-and-remember-me">
                    <span className="signin-signup-form__forgot-password">Forgot your password?</span>
                    <div className="signin-signup-form__remember-me">
                        <input type="checkbox" name="remember-me"/>
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="signin-signup-form__submit">Sign in</button>
            </form>
        </div>
    );
};

export default SignInModalWindow;