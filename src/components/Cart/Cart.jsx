import React, {useState} from 'react';
import Sidebar from "../Profiles/SideBar/Sidebar";
import "./CartStyles.scss"
import ProductInCart from "./ProductInCart/ProductInCart";
import Checkout from "./Checkout/Checkout";
import ModalWindowConfirmOrder from "./ModalWindowConfirmOrder/ModalWindowConfirmOrder";

const Cart = () => {

    // UseEffect to get products from server
    const [productsInCart, setProductsInCart] = useState();
    const [isModalActive, setIsModalActive] = useState(false);

    const deleteProduct = () => {
        console.log("Delete")
    }

    const increaseCount = () => {

    }

    const decreaseCount = () => {

    }

    const checkout = () => {
        setIsModalActive(true);
    }

    return (
        <div className="cart-container">
            {localStorage.getItem("logged") ? <Sidebar/> : <h2>please authorize if you want to see your full profile</h2>}
            <div className="cart-container__content">
                <h1 className="cart-container__title">Cart</h1>
                <div className="cart-container__list-of-products">
                    <ProductInCart
                        deleteProduct={deleteProduct}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                    />
                    <ProductInCart
                        deleteProduct={deleteProduct}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                    />
                    <ProductInCart
                        deleteProduct={deleteProduct}
                        increaseCount={increaseCount}
                        decreaseCount={decreaseCount}
                    />
                </div>
                <Checkout
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}
                    checkout={checkout}
                />
                <ModalWindowConfirmOrder
                    isModalActive={isModalActive}
                    setIsModalActive={setIsModalActive}
                />
            </div>
        </div>
    );
};

export default Cart;