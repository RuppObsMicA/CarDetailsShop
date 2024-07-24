import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import { useAppDispatch } from '../../../store/hooks';
import { fetchSignIn } from '../../../utils/FetchMethods/Authorization/authorization';
import { authActions } from '../../../store/auth-slice';
import { Loader } from '../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../components/CustomComponents/Error/Error';
import { Input } from '../../../components/CustomComponents/Input/Input';
import { Notification } from '../../../components/CustomComponents/Notification/Notification';

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

const isResponseSignInFailure = (
    response: ResponseSignInSuccess | ResponseSignInFailure,
): response is ResponseSignInFailure => {
    return 'message' in response;
};

const signInFormFields = [
    {
        label: 'Username',
        name: 'username',
        type: 'text',
        placeholder: 'Enter Username',
        validation: {
            required: 'This is a required field',
        },
    },
    {
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter password',
        validation: {
            required: 'This is a required field',
        },
    },
];

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputs>();
    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        // replace with useQuery
        mutationFn: (data: SignInInputs) => {
            return fetchSignIn(data);
        },
    });

    if (isPending) {
        return <Loader />;
    }

    const signIn: SubmitHandler<SignInInputs> = async (data) => {
        mutate(data, {
            onSuccess: (responseData) => {
                if (responseData && !isResponseSignInFailure(responseData)) {
                    dispatch(
                        authActions.login({
                            token: responseData.token,
                            role: responseData.role,
                            id: responseData.id,
                            fullName: responseData.fullName,
                        }),
                    );
                } else {
                    setNotificationMessage(responseData.message);
                }
            },
            onError: (error) => {
                setNotificationMessage(
                    'An error occurred during signIn. Please try again later.',
                );
            },
        });
    };

    return (
        <div className="signin-signup-form__form">
            <form onSubmit={handleSubmit(signIn)} id="authorization-form">
                {isError && <Error message={error.message} />}
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
