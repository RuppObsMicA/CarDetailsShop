import React, {useState} from 'react';
import "../ProfileStyles.scss"
import {URL} from "../../../ServerSettings/serverSettings"
import Chance from 'chance';
import Sidebar from "../SideBar/Sidebar";
const AdminProfile = () => {

    const chance = new Chance();
    const [productType, setProductType] = useState("batteries");
    const [productAttribute, setProductAttribute] = useState("power");

    const setOfProductAttributes = {
        batteries: "power",
        tires_and_wheels: "size",
        engine_oil: "viscosity",
        auto_chemical_goods: "volume",
        tools: "length",
        body_parts: "size",
    }

    const handleChange = (e) => {
        const newProductType = e.target.value;
        setProductType(newProductType);
        setProductAttribute(setOfProductAttributes[newProductType]);
    }

    const generateRandomProductNumber = () => {
        const getNumber = () => {
           return String(chance.integer({min: 0, max: 999}));
        }

        return `${getNumber()}-${getNumber()}-${getNumber()}`
    }

    async function sendNewProduct(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("number", generateRandomProductNumber());
        console.log(formData);


        let response = await fetch(URL + "/create-new-product",{
            method: 'POST',
            body: formData
        })

        response = await response.json();
        alert(response);
    }


    return (
        <div className="profile-admin">
            <Sidebar/>

            <div>
                <form id="createNewProductForm" onSubmit={sendNewProduct}>
                    <div>
                        <label htmlFor="type">Choose a product type:</label>
                        <select name="type" onChange={handleChange} value={productType} required>
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
                        <input type="text"  name="name" required />
                    </div>
                    <div>
                        <label htmlFor="image">Product image:</label>
                        <input type="file"  name="image" accept="image/*" required />
                    </div>
                    <div>
                        <label htmlFor="price">Product price:</label>
                        <input type="number" name="price" step="0.01" required />
                    </div>
                    <div>
                        <label htmlFor={productAttribute}>Product {productAttribute}:</label>
                        <input type="number" name={productAttribute} required />
                    </div>
                    <div>
                        <label htmlFor="description">Product description:</label>
                        <input type="text"  name="description" required />
                    </div>
                    <div>
                        <label htmlFor="brands">Brands:</label>
                        <input type="text" name="brands" required />
                    </div>
                    <div>
                        <button type="submit">Отправить</button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default AdminProfile;