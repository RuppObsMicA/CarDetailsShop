import React from 'react';

import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { PersonalDataEdit } from './PersonalDataEdit';
import { PersonalDataInfo } from './PersonalDataInfo';
import { useFetchPersonalData } from '../../hooks';

export type UserData = {
    id: number;
    username: string;
    fullname: string;
    registrationDate: Date;
    email: string;
    phone: string;
    [key: string]: any;
};

export const PersonalData = () => {
    const { userData, isEditMode, handleEditModeChange, isPending, isError, error } =
        useFetchPersonalData();

    console.log(userData);

    if (isPending) {
        return <Loader />;
    }

    return (
        <div>
            <h1>Personal Data</h1>
            {isError && error && <Error message={error.message} />}
            {isEditMode && userData && <PersonalDataEdit user={userData} />}
            {!isEditMode && userData && (
                <PersonalDataInfo user={userData} onClick={handleEditModeChange} />
            )}
        </div>
    );
};
