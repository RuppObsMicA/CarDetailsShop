import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchUserDataById } from '../../../../api/FetchMethods/Profiles/PersonalData/personalData';
import { useAppSelector } from '../../../../store/hooks';
import { Loader } from '../../../../components/CustomComponents/Loader/Loader';
import { Error } from '../../../../components/CustomComponents/Error/Error';
import { PersonalDataEdit } from './PersonalDataEdit';
import { PersonalDataInfo } from './PersonalDataInfo';

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
    const userId = useAppSelector((state) => state.auth.id);
    const [userData, setUserData] = useState<UserData>();
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const { isPending, isError, error, data } = useQuery({
        queryKey: ['fetchUserData'],
        queryFn: () => fetchUserDataById(userId),
    });

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    }, [userId, data]);

    if (isPending) {
        return <Loader />;
    }

    const handleEditModeChange = () => {
        setIsEditMode((prevState) => !prevState);
    };

    console.log(userData);

    return (
        <div>
            <h1>Personal Data</h1>
            {isError && <Error message={error.message} />}
            {isEditMode && userData && <PersonalDataEdit user={userData} />}
            {!isEditMode && userData && (
                <PersonalDataInfo user={userData} onClick={handleEditModeChange} />
            )}
        </div>
    );
};
