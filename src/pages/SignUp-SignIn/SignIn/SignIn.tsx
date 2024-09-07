import React from 'react';

import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Input } from '../../../components/CustomComponents/Input/Input';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';
import { useSignIn } from '../hooks';
import { signInFormFields } from './SignInFieldsSettings';

export type ResponseSignInSuccess = {
    role: string;
    token: string;
    id: number;
    fullName: string;
};

export type ResponseSignInFailure = {
    message: string;
};

export type SignInInputs = {
    username: string;
    password: string;
};

export const isResponseSignInFailure = (
    response: ResponseSignInSuccess | ResponseSignInFailure,
): response is ResponseSignInFailure => {
    return 'message' in response;
};

export const SignIn = () => {
    const {
        isPending,
        isError,
        error,
        register,
        handleSubmit,
        errors,
        notificationMessage,
        signIn,
    } = useSignIn();

    if (isPending) {
        return <Loader />;
    }

    return (
        <div className="signin-signup-form__form">
            <form onSubmit={handleSubmit(signIn)} id="authorization-form">
                {isError && error && <Error message={error.message} />}
                {notificationMessage && <Notification message={notificationMessage} />}

                {signInFormFields.map((field) => (
                    <Input
                        key={field.name}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        register={register}
                        validation={field.validation}
                        errors={errors}
                    />
                ))}

                <button type="submit" className="signin-signup-form__submit">
                    Sign in
                </button>
            </form>
        </div>
    );
};
