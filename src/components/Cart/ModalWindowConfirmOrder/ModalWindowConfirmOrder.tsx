import React from 'react';
import {useAppDispatch} from "../../../store/hooks";
import {modalActions} from "../../../store/modal-slice";

export const ModalWindowConfirmOrder = () => {

    const dispatch = useAppDispatch();

    const handleCheckoutClick = () => {
        dispatch(modalActions.toggleCheckoutModal());
    }

    return (
        <div onClick={handleCheckoutClick}>
            <div className="confirm-order-modal-window" onClick={(e) => e.stopPropagation()}>
                <form id="create-order-form">
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                </form>
            </div>
        </div>
    );
};