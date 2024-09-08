import React from 'react';

// Pictures
import contactsImage from '../../../../assets/images/Header/contacts.svg';

export const Contacts = () => {
    return (
        <div className="header__contacts">
            <img src={contactsImage} alt="contacts" className="header__contacts-image" />
        </div>
    );
};
