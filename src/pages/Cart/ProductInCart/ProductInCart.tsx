import React, { useState } from 'react';

import { useDebounce } from '../hooks';
import { CartItem } from '../../../store/cart-slice';
import { orderedProducts } from '../../../store/orderedProducts-slice';
import { useChangeQuantity } from '../hooks';

export type ProductInCartProps = {
    product: CartItem;
};

export const ProductInCart = ({ product }: ProductInCartProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const { increaseCount, decreaseCount, dispatch } = useChangeQuantity({ product });
    const { name, quantity, description, pictureURL, price } = product;

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
                <img src={pictureURL} alt="product" className="cart-container__image" />
                <div className="cart-container__description">
                    <div>{name}</div>
                    <div>{description}</div>
                </div>
            </div>

            <div className="cart-container__counter">
                <button onClick={useDebounce(decreaseCount, 300)}>-</button>
                <div className="cart-container__count">{quantity}</div>
                <button onClick={useDebounce(increaseCount, 300)}>+</button>
            </div>

            <div className="cart-container__price-and-bonus">
                <h2>{price} $</h2>
            </div>
        </div>
    );
};
