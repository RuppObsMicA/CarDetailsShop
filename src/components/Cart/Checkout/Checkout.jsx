import React from 'react';

const Checkout = ({checkout}) => {

    return (
        <div className="cart-container__submit-order" onClick={checkout}>
            <div className="cart-container__general-price">634$</div>
            <div className="cart-container__submit">
                <button className="cart-container__submit-button">Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;