import React from 'react';
import './LoaderStyles.scss';

export const Loader = () => {
    return (
        <div className="custom-loader">
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    );
};
