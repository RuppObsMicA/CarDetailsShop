import React from 'react';

const Offer = ({offer}) => {
    return (
        <div className="profile-customer__offers-history__offers__offer">
            <h2>№ {offer.id}</h2>
            <h6>{offer.date}</h6>
            <h6>{offer.price}</h6>
            <h6>{offer.price}</h6>
            <h3>{offer.status}</h3>
        </div>
    );
};

export default Offer;