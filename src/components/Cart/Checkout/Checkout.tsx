import React from 'react';
import {modalActions} from "../../../store/modal-slice";
import {useAppDispatch} from "../../../store/hooks";

export const Checkout = () => {
    const dispatch = useAppDispatch();

    const checkout = () => {
        dispatch(modalActions.toggleCheckoutModal());
    }

    return (
        <div className="cart-container__submit-order" onClick={checkout}>
            <div className="cart-container__general-price">634$</div>
            <div className="cart-container__submit">
                <button className="cart-container__submit-button">Checkout</button>
            </div>
        </div>
    );
};