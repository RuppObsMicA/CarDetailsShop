import React from 'react';

import { Error } from '../../../components/CustomComponents/Error/Error';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { Input } from '../../../components/CustomComponents/Input/Input';
import { getSignUpFieldsSettings } from './SignUpFieldsSettings';
import { useSignUp } from '../hooks';

export type SignUpInputs = {
    username: string;
    fullname: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
};

export type DefaultResponseMessage = {
    message: string;
};

export const SignUp = () => {
    const {
        isPending,
        isError,
        error,
        notificationMessage,
        register,
        handleSubmit,
        watch,
        errors,
        signUpSubmit,
    } = useSignUp();

    if (isPending) {
        return <Loader />;
    }

    const signUpFormFields = getSignUpFieldsSettings(watch);

    return (
        <div className="signin-signup-form__form">
            <form id="registration-form" onSubmit={handleSubmit(signUpSubmit)}>
                {notificationMessage && <Notification message={notificationMessage} />}
                {isError && error && <Error message={error.message} />}

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

                <button type="submit" className="signin-signup-form__submit">
                    Sign up
                </button>
            </form>
        </div>
    );
};
