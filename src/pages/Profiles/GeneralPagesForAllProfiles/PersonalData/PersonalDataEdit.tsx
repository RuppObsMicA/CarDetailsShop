import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { type UserData } from './PersonalData';
import { Button } from '../../../../components/CustomComponents/Button/Button';
import { Input } from '../../../../components/CustomComponents/Input/Input';
import { type SignUpInputs } from '../../../SignUp-SignIn/SignUp/SignUp';
import { getChangePersonalDataFieldsSettings } from './PersonalDataFormFields';
import { fetchUpdatePersonalData } from '../../../../utils/FetchMethods/Profiles/PersonalData/personalData';
import { useAppSelector } from '../../../../store/hooks';
import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../../components/CustomComponents/Notification/Notification';

type PersonalDataEditProps = {
    user: UserData;
};

export type ChangePersonalDataForm = Omit<SignUpInputs, 'confirmPassword'>;

export type ResponseChangePersonalData = {
    message: string;
};

export const PersonalDataEdit = ({ user }: PersonalDataEditProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ChangePersonalDataForm>();

    const userId = useAppSelector((state) => state.auth.id);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [formData, setFormData] = useState<ChangePersonalDataForm>({
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        password: '',
    });

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: (data: ChangePersonalDataForm) => {
            return fetchUpdatePersonalData(data, userId);
        },
    });

    const updateData: SubmitHandler<ChangePersonalDataForm> = async (
        data: ChangePersonalDataForm,
    ) => {
        mutate(data, {
            onSuccess: (responseData) => {
                setNotificationMessage(responseData.message);
                if (responseData.message === 'Your profile was updated successfully') {
                    reset();
                }
            },
        });
    };

    const updatePersonalDataFields = getChangePersonalDataFieldsSettings();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (isPending) {
        return <Loader />;
    }

    return (
        <div>
            {isError && <Error message={error.message} />}
            {notificationMessage && <Notification message={notificationMessage} />}
            <form onSubmit={handleSubmit(updateData)}>
                {updatePersonalDataFields.map((field) => (
                    <Input
                        key={field.label}
                        label={field.label}
                        name={field.name}
                        placeholder={field.placeholder}
                        type={field.type}
                        register={register}
                        validation={field.validation}
                        errors={errors}
                        value={formData[field.name as keyof ChangePersonalDataForm]}
                        onChange={handleInputChange}
                    />
                ))}

                <Button text="Confirm" type="submit" />
                <Link to="change_password">
                    <Button text="Change password" type="button" />
                </Link>
            </form>
        </div>
    );
};
