import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../../../components/CustomComponents/Input/Input';
import { Button } from '../../../../components/CustomComponents/Button/Button';
import { useAppSelector } from '../../../../store/hooks';
import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../../components/CustomComponents/Notification/Notification';
import { updatePassword } from '../../../../api/FetchMethods/Profiles/PersonalData/personalData';
import { useUpdatePassword } from '../../hooks';

function getChangePasswordFieldsSettings(watch: any) {
    return [
        {
            label: 'Old password',
            name: 'oldPassword',
            type: 'password',
            placeholder: 'Enter your password',
            validation: {
                required: 'This is a required field',
                minLength: { value: 6, message: 'Min length is 6' },
            },
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter new password',
            validation: {
                required: 'This is a required field',
                minLength: { value: 6, message: 'Min length is 6' },
            },
        },
        {
            label: 'Confirm Password',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm new password',
            validation: {
                required: 'This is a required field',
                validate: (value: string) =>
                    value === watch('password') || "Passwords don't match",
            },
        },
    ];
}

export type ChangePasswordForm = {
    oldPassword: string;
    password: string;
    newPassword: string;
};

export type ResponseChangePassword = {
    message: string;
};

export const ChangePassword = () => {
    const {
        isPending,
        isError,
        error,
        updatePasswordSubmit,
        register,
        errors,
        watch,
        handleSubmit,
        notificationMessage,
    } = useUpdatePassword();

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    if (isPending) {
        return <Loader />;
    }

    const changePasswordFields = getChangePasswordFieldsSettings(watch);

    return (
        <div>
            {isError && error && <Error message={error.message} />}
            {notificationMessage && <Notification message={notificationMessage} />}
            <form onSubmit={handleSubmit(updatePasswordSubmit)}>
                {changePasswordFields.map((field) => (
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
                <Button text="Change password" type="submit" />
                <Button text="Back" type="button" onClick={goBack} />
            </form>
        </div>
    );
};
