import React, {useState} from 'react';
import SellElement from "./SellElement/SellElement";
import Content from "./Content/Content";
import {URL} from "../../../ServerSettings/serverSettings";
import Product from "./Content/MainSearch/Product/Product";

const MainCatalog = ({setOfProducts}) => {

    const [isContentActive, setIsContentActive] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({name: 'Battery', dataBaseTable: 'batteries'});
    const [products, setProducts] = useState();

    const renderProduct = function (product) {
        setIsContentActive(true);
        setSelectedProduct({name: product.name, dataBaseTable: product.dataBaseTable});

        try {
            let promise = fetch(URL + `/product?product=${product.dataBaseTable}`);
            promise
                .then(response => response.json())
                    .then(products => {
                        console.log(products);
                        setProducts(products.map((product) => {
                            return <Product key={product.id} product={product}/>
                        }))
                    })
                .catch(error => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const productsToRender = setOfProducts.map((product) => {
        return <SellElement product={product} renderProduct={() => renderProduct(product)} key={product.name}/>
    })

    return (
        <div className="catalog">
            <ul className="catalog__elements">
                {productsToRender}
            </ul>
            <Content
                isContentActive={isContentActive}
                setIsContentActive={setIsContentActive}
                selectedProduct={selectedProduct.name}
                products={products}
            />
        </div>
    );
};

export default MainCatalog;