import React from 'react';

const ModalWindowConfirmOrder = ({isModalActive, setIsModalActive}) => {

    return (
        <div className={isModalActive ? "confirm-order-modal-window-container active" : "confirm-order-modal-window-container"}
            onClick={() => setIsModalActive(false)}
        >
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

export default ModalWindowConfirmOrder;