import React from 'react';
import './CartStyles.scss';
import { Link } from 'react-router-dom';

import { Sidebar } from '../Profiles/SideBar/Sidebar';
import { ProductInCart } from './ProductInCart/ProductInCart';
import { Loader } from '../../components/CustomComponents/Loader/Loader';
import { Error } from '../../components/CustomComponents/Error/Error';
import { Button } from '../../components/CustomComponents/Button/Button';
import { Notification } from '../../components/CustomComponents/Notification/Notification';
import { useFetchCartData } from './hooks';

export const Cart = () => {
    const { isLoading, isError, error, totalPrice, itemsInCart, isAuth } =
        useFetchCartData();

    return (
        <div className="cart-container">
            {isAuth ? (
                <Sidebar />
            ) : (
                <h2>Please authorize if you want to see your full profile</h2>
            )}
            {isLoading ? (
                <Loader />
            ) : (
                <div className="cart-container__content">
                    <h1 className="cart-container__title">Cart</h1>
                    {!itemsInCart.length && <Notification message="No items in cart" />}
                    {isError && error && <Error message={error.message} />}
                    <div className="cart-container__list-of-products">
                        {itemsInCart.map((item) => (
                            <ProductInCart key={item.id} product={item} />
                        ))}
                    </div>
                    <div className="cart-container__submit-order">
                        <div className="cart-container__general-price">
                            Total price: {totalPrice} $
                        </div>
                        <Link to="checkout">
                            <Button text="Checkout" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};
