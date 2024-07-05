import React, {ReactNode, useState} from 'react';
import { ProductType } from "./SellElement/ProductType";
import {Content} from "./Content/Content";
import {URL} from "../../../utils/constants";
import {Product} from "./Content/MainSearch/Product/Product";

export type Product = {
    name: string;
    dataBaseTable: string;
    image: string;
}

type MainCatalogProps = {
    setOfProducts: Product[];
}

type SelectedProduct = Omit<Product, 'image'>;


export type FetchedProduct = {
    id: number;
    name: string;
    price: number;
    power: number;
    pictureURL: string;
    productNumber: string;
    brands: string;
    description: string;
}


export const MainCatalog = ({setOfProducts}: MainCatalogProps) => {

    const [isContentActive, setIsContentActive] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({name: 'Battery', dataBaseTable: 'batteries'});
    const [products, setProducts] = useState();

    const renderProduct = (product: Product) => {
        setIsContentActive(true);
        setSelectedProduct({name: product.name, dataBaseTable: product.dataBaseTable});

        try {
            let promise = fetch(URL + `/product?product=${product.dataBaseTable}`);
            promise
                .then(response => response.json())
                    .then(products => {
                        console.log(products);
                        setProducts(products.map((product: FetchedProduct) => {
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

    const productsToRender = setOfProducts.map((product: Product) => {
        return <ProductType key={product.name} product={product} renderProduct={() => renderProduct(product)} />
    })

    return (
        <div className="catalog">
            <ul className="catalog__elements">
                {productsToRender}
            </ul>
            <Content
                isContentActive={isContentActive}
                setIsContentActive={setIsContentActive}
                selectedProduct={selectedProduct}
                products={products}
            />
        </div>
    );
};