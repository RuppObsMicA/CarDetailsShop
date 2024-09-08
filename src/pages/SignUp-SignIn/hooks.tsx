import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';

import { signIn, signUp } from '../../api/FetchMethods/Authorization/authorization';
import { SignUpInputs } from './SignUp/SignUp';
import { useAppDispatch } from '../../store/hooks';
import { authActions } from '../../store/auth-slice';
import { isResponseSignInFailure, SignInInputs } from './SignIn/SignIn';

export const useSignIn = () => {
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInInputs>();

    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: SignInInputs) => {
            return signIn(data);
        },
    });

    const signInSubmit: SubmitHandler<SignInInputs> = async (data) => {
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
            onError: () => {
                setNotificationMessage(
                    'An error occurred during signIn. Please try again later.',
                );
            },
        });
    };

    return {
        isPending,
        isError,
        error,
        register,
        handleSubmit,
        errors,
        notificationMessage,
        signInSubmit,
    };
};

export const useSignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<SignUpInputs>();

    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: SignUpInputs) => {
            return signUp(data);
        },
    });

    const signUpSubmit: SubmitHandler<SignUpInputs> = async (data: SignUpInputs) => {
        const salt = bcrypt.genSaltSync(10); // might be in a separate place
        data.password = bcrypt.hashSync(data.password, salt);

        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);
                if (
                    responseData.message ===
                    'Registration finished successfully, you can sign in'
                ) {
                    reset();
                }
            },
        });
    };

    return {
        isPending,
        isError,
        error,
        notificationMessage,
        register,
        handleSubmit,
        watch,
        errors,
        signUpSubmit,
    };
};
