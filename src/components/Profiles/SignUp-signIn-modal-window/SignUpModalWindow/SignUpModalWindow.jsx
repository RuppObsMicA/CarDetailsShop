import React from "react";
import {URL} from "../../../../ServerSettings/serverSettings";
import {redirect} from "react-router-dom";
import {type} from "imask";


const SignUpModalWindow = () => {

    const signUp = async function (event){
        event.preventDefault();
        const formData = new FormData(event.target);
        if (formData.get("password") === formData.get("confirmPassword")) {
            console.log("Match");

            let response = await fetch(`${URL}/signup`, {
                method: "POST",
                body: formData
            });

            response = await response.json();
            console.log(response);
            console.log("Match");
            // redirect("/");
        } else {
            alert("Passwords don't match");
        }
    };

    return (
        <div className="signin-signup-form__form">
            <form id="registration-form" onSubmit={signUp}>
                <label htmlFor="username" className="signin-signup-form__label">Username</label>
                <input type="text" placeholder="Enter Username" name="username" id="username"
                       className="signin-signup-form__input" required/>

                <label htmlFor="fullname" className="signin-signup-form__label">Full Name</label>
                <input type="text" placeholder="Enter Full name" name="fullname" id="fullname"
                       className="signin-signup-form__input" required/>

                <label htmlFor="email" className="signin-signup-form__label">Email</label>
                <input type="text" placeholder="Enter email" name="email" id="email"
                       className="signin-signup-form__input" required/>

                <label htmlFor="phone" className="signin-signup-form__label">Phone</label>
                <input type="text" placeholder="Enter phone" name="phone" id="phone"
                       className="signin-signup-form__input" required/>

                <label htmlFor="password" className="signin-signup-form__label">Password</label>
                <input type="password" placeholder="Enter password" name="password" id="password"
                       className="signin-signup-form__input" required/>

                <label htmlFor="confirmPassword" className="signin-signup-form__label">Confirm Password</label>
                <input type="password" placeholder="Confirm password" name="confirmPassword" id="confirmPassword"
                       className="signin-signup-form__input" required/>

                <button type="submit" className="signin-signup-form__submit">Sign up</button>
            </form>
        </div>
    );
};

export default SignUpModalWindow;