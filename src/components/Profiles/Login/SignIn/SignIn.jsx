import React, {useContext} from 'react';
import {AuthContext} from "../../../context/auth-context";
import {URL} from "../../../../ServerSettings/serverSettings"

const SignIn = () => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const login = async (event) =>{
        event.preventDefault();
        let response = await fetch(URL);
        if (response.ok){

        }
        localStorage.setItem('logged', 'true');
        setIsLoggedIn(true);
    }

    return (
        <div className="login-signup-form__form">
            <form onSubmit={login} id="authorization-form">
                <label htmlFor="username" className="login-signup-form__label">Username</label>
                <input type="text" placeholder="Enter Username" id="username" className="login-signup-form__input" required/>

                <label htmlFor="password" className="login-signup-form__label">Password</label>
                <input type="password" placeholder="Enter password" id="password" className="login-signup-form__input" required/>

                <button type="submit" className="login-signup-form__submit">Sign in</button>
                <hr/>
                <h4 className="login-signup-form__forgot-password">Forgot your password?</h4>
            </form>
        </div>
    );
};

export default SignIn;