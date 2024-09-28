import React from 'react';
import { Link } from 'react-router-dom';

import { type UserData } from './PersonalData';
import { Button } from '../../../../components/CustomComponents/Button/Button';
import { Input } from '../../../../components/CustomComponents/Input/Input';
import { type SignUpInputs } from '../../../SignUp-SignIn/SignUp/SignUp';
import { getChangePersonalDataFieldsSettings } from './PersonalDataFormFields';
import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { Notification } from '../../../../components/CustomComponents/Notification/Notification';
import { useUpdatePersonalData } from '../../hooks';

export type PersonalDataEditProps = {
    user: UserData;
};

export type ChangePersonalDataForm = Omit<SignUpInputs, 'confirmPassword'>;

export type ResponseChangePersonalData = {
    message: string;
};

export const PersonalDataEdit = ({ user }: PersonalDataEditProps) => {
    const updatePersonalDataFields = getChangePersonalDataFieldsSettings();

    const {
        isPending,
        isError,
        error,
        register,
        handleSubmit,
        errors,
        notificationMessage,
        formData,
        setFormData,
        updateData,
    } = useUpdatePersonalData({ user });

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
            {isError && error && <Error message={error.message} />}
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
