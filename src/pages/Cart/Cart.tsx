import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import './CartStyles.scss';
import { Link } from 'react-router-dom';

import { Sidebar } from '../Profiles/SideBar/Sidebar';
import { ProductInCart } from './ProductInCart/ProductInCart';
import { Loader } from '../../components/CustomComponents/Loader/Loader';
import { Error } from '../../components/CustomComponents/Error/Error';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCartData } from '../../utils/FetchMethods/Cart/cart';
import { cartActions, type CartItem } from '../../store/cart-slice';
import { getCart } from '../../utils/localStorage';
import { Button } from '../../components/CustomComponents/Button/Button';
import { orderedProducts } from '../../store/orderedProducts-slice';
import { Notification } from '../../components/CustomComponents/Notification/Notification';

export const Cart = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const userId = useAppSelector((state) => state.auth.id);

    const dispatch = useAppDispatch();
    const [localCartItems, setLocalCartItems] = useState<CartItem[]>([]);

    const { isPending, isError, error, data } = useQuery({
        // Fix it to send a request only when a user is authorized
        queryKey: ['fetchCartData'],
        queryFn: () => fetchCartData(userId.toString()),
    });

    useEffect(() => {
        dispatch(orderedProducts.cleanProducts());
        if (!isAuth) {
            const localCart = getCart();
            if (localCart) {
                setLocalCartItems(localCart);
                dispatch(cartActions.replaceCart(localCart));
            }
        } else if (data) {
            setLocalCartItems(data);
            dispatch(cartActions.replaceCart(data));
        }
    }, [isAuth, data]);

    const itemsInCart = useAppSelector((state) => state.cart.items);
    const totalPrice = itemsInCart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
    );

    return (
        <div className="cart-container">
            {isAuth ? (
                <Sidebar />
            ) : (
                <h2>Please authorize if you want to see your full profile</h2>
            )}
            {isPending ? (
                <Loader />
            ) : (
                <div className="cart-container__content">
                    <h1 className="cart-container__title">Cart</h1>
                    {!itemsInCart.length && <Notification message="No items in cart" />}
                    {isError && <Error message={error.message} />}
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
