import React, { useState } from 'react';

import { CartItem, updateDatabaseCart } from '../../../store/cart-slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { orderedProducts } from '../../../store/orderedProducts-slice';

type ProductInCartProps = {
    product: CartItem;
};

export const ProductInCart = ({ product }: ProductInCartProps) => {
    const userId = useAppSelector((state) => state.auth.id);
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    const { name, quantity, description, pictureURL, price } = product;
    const dispatch = useAppDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const increaseCount = () => {
        dispatch(
            updateDatabaseCart({
                cartItem: product,
                userId,
                isAuth,
                isIncrease: true,
            }),
        );
    };

    const decreaseCount = () => {
        dispatch(
            updateDatabaseCart({
                cartItem: product,
                userId,
                isAuth,
                isIncrease: false,
            }),
        );
    };

    const handleSelectProduct = () => {
        if (isChecked) {
            dispatch(orderedProducts.removeProductFromOrder(product.id));
        } else {
            dispatch(orderedProducts.addProductToOrder(product));
        }
        setIsChecked(!isChecked);
    };

    return (
        <div className="cart-container__product-in-cart">
            <div className="cart-container__checkbox">
                <input
                    type="checkbox"
                    onChange={handleSelectProduct}
                    checked={isChecked}
                />
            </div>

            <div className="cart-container__product-info">
                <img
                    src={pictureURL}
                    alt="product"
                    className="cart-container__image"
                />
                <div className="cart-container__description">
                    <div>{name}</div>
                    <div>{description}</div>
                </div>
            </div>

            <div className="cart-container__counter">
                <button onClick={increaseCount}>+</button>
                <div className="cart-container__count">{quantity}</div>
                <button onClick={decreaseCount}>-</button>
            </div>

            <div className="cart-container__price-and-bonus">
                <h2>{price} $</h2>
            </div>
        </div>
    );
};
