import React from 'react';
import './Notification.scss';

type NotificationProps = {
    message: string;
};

export const Notification = ({ message }: NotificationProps) => {
    return (
        <div className="custom-notification">
            <p>{message}</p>
        </div>
    );
};
