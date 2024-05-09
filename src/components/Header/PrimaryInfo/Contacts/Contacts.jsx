import React from 'react';
import contactsImage from '../../../../images/Header/contacts.svg';

const Contacts = () => {
    return (
        <div className="header__contacts-image">
            <img src = {contactsImage} alt="contacts"/>
        </div>
    );
};

export default Contacts;