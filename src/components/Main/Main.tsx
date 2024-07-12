import React from 'react';

// Components
import { ListOfProductTypes } from './ListOfProductTypes/ListOfProductTypes';
import { Advertizing } from './Advertizing/Advertizing';
import { SmartSearch } from './SmartSearch/SmartSearch';
import { Partners } from './Partners/Partners';
import { Feedback } from './Feedback/Feedback';
import { Benefits } from './Benefits/Benefits';

// Styles
import './MainStyles.scss';

export const Main = () => {
    return (
        <div className="main">
            <ListOfProductTypes />
            <Advertizing />
            <SmartSearch />
            <Partners />
            <Feedback />
            <Benefits />
        </div>
    );
};
