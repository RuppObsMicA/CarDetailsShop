import React from 'react';
import contactsImage from '../../../../images/Header/contacts.svg';

const Contacts = () => {
    return (
        <div className="header__contacts">
            <img src = {contactsImage} alt="contacts" className="header__contacts-image"/>
        </div>
    );
};

export default Contacts;