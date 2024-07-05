import React, {useState} from 'react';
import "../ProfileStyles.scss"
import {URL} from "../../../utils/constants"

import {Sidebar} from "../SideBar/Sidebar";

const chance = require('chance');

const setOfProductAttributesAndAttributes = [
    {productType: 'batteries', productAttribute: "power"},
    {productType: 'tires_and_wheels', productAttribute: "size"},
    {productType: 'engine_oil', productAttribute: "viscosity"},
    {productType: 'auto_chemical_goods', productAttribute: "volume"},
    {productType: 'tools', productAttribute: "length"},
    {productType: 'body_parts', productAttribute: "size"},
]

type Product = {
    productType: string;
    productAttribute: string;
}

export const AdminProfile = () => {

    const [selectedProduct, setSelectedProduct] = useState<Product>(setOfProductAttributesAndAttributes[0]);

    const handleProductTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newProductType: string = event.target.value;
        const newSelectedProduct = setOfProductAttributesAndAttributes.find((elem: Product) => elem.productType === newProductType);

        if (newSelectedProduct) {
            setSelectedProduct(newSelectedProduct);
        }
    }

    const generateRandomProductNumber = () => { // generate a unique ID for a product, need to check if unique
        const getNumber = () => {
            return String(chance.integer({min: 0, max: 999}));
        }

        return `${getNumber()}-${getNumber()}-${getNumber()}`
    }

    // create a separate file with async methods related to products, auth and etc
    async function sendNewProduct(event: React.FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("number", generateRandomProductNumber());
        console.log(formData);


        let response = await fetch(URL + "/create-new-product", {
            method: 'POST',
            body: formData
        })

        response = await response.json();
        alert(response);
    }


    return (
        <div className="profile-admin">
            <Sidebar/>
            {/*Can create a custom FORM, INPUT components with necessary props*/}
            <div>
                <form id="createNewProductForm" onSubmit={sendNewProduct}>
                    <div>
                        <label htmlFor="type">Choose a product type:</label>
                        <select name="type" onChange={handleProductTypeChange} value={selectedProduct.productType}
                                required>
                            {/*can render it dynamically using map method*/}
                            <option value="batteries">Batteries</option>
                            <option value="tires_and_wheels">Tires and Wheels</option>
                            <option value="engine_oil">Engine Oil</option>
                            <option value="auto_chemical_goods">Auto chemical goods</option>
                            <option value="tools">Tools</option>
                            <option value="body_parts">Body parts</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="name">Product title:</label>
                        <input type="text" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="image">Product image:</label>
                        <input type="file" name="image" accept="image/*" required/>
                    </div>
                    <div>
                        <label htmlFor="price">Product price:</label>
                        <input type="number" name="price" step="0.01" required/>
                    </div>
                    <div>
                        <label
                            htmlFor={selectedProduct.productAttribute}>Product {selectedProduct.productAttribute}:</label>
                        <input type="number" name={selectedProduct.productAttribute} required/>
                    </div>
                    <div>
                        <label htmlFor="description">Product description:</label>
                        <input type="text" name="description" required/>
                    </div>
                    <div>
                        <label htmlFor="brands">Brands:</label>
                        <input type="text" name="brands" required/>
                    </div>
                    <div>
                        <button type="submit">Отправить</button>
                    </div>

                </form>
            </div>


        </div>
    );
};