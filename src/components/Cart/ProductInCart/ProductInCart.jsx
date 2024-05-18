import React from 'react';
import productImage from "../../../images/Profiles/ProductSample.svg"
import cartBucket from "../../../images/Profiles/cart-bucket.svg"

const ProductInCart = ({deleteProduct, increaseCount, decreaseCount}) => {
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

            <div className="cart-container__remove" onClick={deleteProduct}>
                {/*Add Id as an argument*/}
                <img src={cartBucket} alt="bucket"/>
            </div>
        </div>
    );
};

export default ProductInCart;