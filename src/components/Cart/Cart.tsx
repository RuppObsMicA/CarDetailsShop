import React from 'react';

// Components
import {Sidebar} from "../Profiles/SideBar/Sidebar";
import {ProductInCart} from "./ProductInCart/ProductInCart";
import {Checkout} from "./Checkout/Checkout";
import {ModalWindowConfirmOrder} from "./ModalWindowConfirmOrder/ModalWindowConfirmOrder";

// Styles
import "./CartStyles.scss"

// Redux toolkit hooks
import {useAppSelector} from "../../store/hooks";
import {RootState} from "../../store/store";

export const Cart = () => {

    // UseEffect to get products from server
    const isModalCheckoutOpen = useAppSelector((state:RootState) => state.modal.isModalCheckoutOpen);



    return (
        <div className="cart-container">
            {localStorage.getItem("logged") ? <Sidebar/> :
                <h2>please authorize if you want to see your full profile</h2>}
            <div className="cart-container__content">
                <h1 className="cart-container__title">Cart</h1>
                <div className="cart-container__list-of-products">
                    <ProductInCart/>
                    <ProductInCart/>
                    <ProductInCart/>
                </div>
                <Checkout/>
                {isModalCheckoutOpen && <ModalWindowConfirmOrder/>}
            </div>
        </div>
    );
};