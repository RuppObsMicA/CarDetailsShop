import React from 'react';
const productImage = require ("../../../images/Profiles/ProductSample.svg")
const cartBucket = require ("../../../images/Profiles/cart-bucket.svg")


export const ProductInCart = () => {

    const increaseCount = () => {

    }

    const decreaseCount = () => {

    }

    return (
        <div className="cart-container__product-in-cart">
            <div className="cart-container__checkbox">
                <input type="checkbox"/>
            </div>

            <div className="cart-container__product-info">
                <img src={productImage} alt="product" className="cart-container__image"/>
                <div className="cart-container__description">
                    <div>Палатка</div>
                    <div>Atemi RR09553 RR09553</div>
                    <div>Палатка Altai 3 CX</div>
                </div>
            </div>

            <div className="cart-container__counter">
                <button onClick={increaseCount}>+</button>
                <div className="cart-container__count">1</div>
                <button onClick={decreaseCount}>-</button>
            </div>

            <div className="cart-container__stock">
                <h2>In stock</h2>
            </div>

            <div className="cart-container__price-and-bonus">
                <h2>234$</h2>
                <h2>+2 bonuses</h2>
            </div>

            <div className="cart-container__remove" onClick={decreaseCount}>
                {/*Add Id as an argument*/}
                <img src={cartBucket} alt="bucket"/>
            </div>
        </div>
    );
};