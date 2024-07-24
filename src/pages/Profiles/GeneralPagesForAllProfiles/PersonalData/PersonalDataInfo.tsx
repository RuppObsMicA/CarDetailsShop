import React from 'react';

import { UserData } from './PersonalData';
import { Button } from '../../../../components/CustomComponents/Button/Button';
import { formatDate } from '../../../../utils/jsMethods';

type PersonalDataEditProps = {
    user: UserData;
    onClick: () => void;
};

export const PersonalDataInfo = ({ user, onClick }: PersonalDataEditProps) => {
    const { username, fullname, email, phone, registrationDate } = user;
    const formattedDate = formatDate(registrationDate.toString());

    return (
        <div>
            <div>
                <p>Username: {username}</p>
                <p>Full Name: {fullname}</p>
                <p>Registration Date: {formattedDate}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <Button text="Edit" type="button" onClick={onClick} />
            </div>
        </div>
    );
};
