import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../../../components/CustomComponents/Input/Input';
import { Button } from '../../../../components/CustomComponents/Button/Button';
import { useAppSelector } from '../../../../store/hooks';
import { fetchUpdatePassword } from '../../../../utils/FetchMethods/Profiles/PersonalData/personalData';
import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../../components/CustomComponents/Notification/Notification';

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
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<ChangePasswordForm>();

    const userId = useAppSelector((state) => state.auth.id);
    const [notificationMessage, setNotificationMessage] = useState('');

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: ChangePasswordForm) => {
            return fetchUpdatePassword(data, userId);
        },
    });

    const updatePassword: SubmitHandler<ChangePasswordForm> = async (
        data: ChangePasswordForm,
    ) => {
        const salt = bcrypt.genSaltSync(10); // might be in a separate place
        data.password = bcrypt.hashSync(data.password, salt);

        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);

                if (responseData.message === 'Your password was updated successfully') {
                    reset();
                }
            },
        });
    };

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
            {isError && <Error message={error.message} />}
            {notificationMessage && <Notification message={notificationMessage} />}
            <form onSubmit={handleSubmit(updatePassword)}>
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
