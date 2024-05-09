import React from 'react';
import {URL} from "../../../../ServerSettings/serverSettings"


const SignUp = () => {

    const signUp = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (formData.get("password") === formData.get("confirmPassword")){
            console.log("Match")
            let response = await fetch(URL + "/create-client", {
                method: 'POST',
                mode: "no-cors",
                body: formData
            })
            window.location.reload();
        } else {
            alert("Passwords don't match")
        }
    }

    return (
        <div className="login-signup-form__form">
            <form id="registration-form" onSubmit={signUp}>
                <label htmlFor="username" className="login-signup-form__label">Username</label>
                <input type="text" placeholder="Enter Username" name="username" id="username" className="login-signup-form__input" required/>

                <label htmlFor="fullname" className="login-signup-form__label">Full Name</label>
                <input type="text" placeholder="Enter Full name" name="fullname" id="fullname" className="login-signup-form__input" required/>

                <label htmlFor="email" className="login-signup-form__label">Email</label>
                <input type="text" placeholder="Enter email" name="email" id="email" className="login-signup-form__input" required/>

                <label htmlFor="phone" className="login-signup-form__label">Phone</label>
                <input type="text" placeholder="Enter phone" name="phone" id="phone" className="login-signup-form__input" required/>

                <label htmlFor="password" className="login-signup-form__label">Password</label>
                <input type="password" placeholder="Enter password" name="password" id="password" className="login-signup-form__input" required/>

                <label htmlFor="confirmPassword" className="login-signup-form__label">Confirm Password</label>
                <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword" className="login-signup-form__input" required/>

                <button type="submit" className="login-signup-form__submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUp;