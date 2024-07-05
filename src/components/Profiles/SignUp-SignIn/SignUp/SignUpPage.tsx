import React, {useState} from "react";
import {fetchSignUp} from "../../../../utils/fetchMethods";
import {Error} from "../../../CustomComponents/Error/Error";
import {SubmitHandler, useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {Loader} from "../../../CustomComponents/Loader/Loader";
import {Notification} from "../../../CustomComponents/Notification/Notification";
import {Input} from "../../../CustomComponents/Input/Input";
import {getSignUpFieldsSettings} from "./SignUpFieldsSettings";
import bcrypt from 'bcryptjs';

export type SignUpInputs = {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export type ResponseSignUp = {
    message: string;
}

export const SignUpPage = () => {

    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<SignUpInputs>();
    const [notificationMessage, setNotificationMessage] = useState("");

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: (data: SignUpInputs) => {
            return fetchSignUp(data);
        }
    });

    const signUp: SubmitHandler<SignUpInputs> = async (data: SignUpInputs) => {

        const salt = bcrypt.genSaltSync(10); // might be in a separate place
        data.password = bcrypt.hashSync(data.password, salt);

        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);
                if (responseData.message === 'Registration finished successfully, you can sign in'){
                    reset();
                }
            }
        });
    };

    if (isPending) {
        return <Loader/>;
    }

    const signUpFormFields = getSignUpFieldsSettings(watch);

    return (
        <div className="signin-signup-form__form">
            <form id="registration-form" onSubmit={handleSubmit(signUp)}>
                {notificationMessage && <Notification message={notificationMessage}/>}
                {isError && <Error message={error.message}/>}

                {signUpFormFields.map((field) => (
                    <Input
                        key={field.label}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                        type={field.type}
                        register={register}
                        validation={field.validation}
                        errors={errors}
                    />
                ))}

                <button type="submit" className="signin-signup-form__submit">Sign up</button>
            </form>
        </div>
    );
};