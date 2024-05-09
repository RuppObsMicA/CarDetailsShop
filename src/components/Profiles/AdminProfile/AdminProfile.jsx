import React from 'react';
import "../ProfileStyles.scss"
import {URL} from "../../../ServerSettings/serverSettings"
const AdminProfile = () => {

    async function sendNewProduct(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        // formData.set('productTitle', formData.get('productTitle'));
        // formData.set('productPrice', formData.get('productPrice'));
        let response = await fetch(URL,{
            method: 'POST',
            mode: "no-cors",
            body: formData
        })

        // let result = await response.json();
    }


    return (
        <div className="profile-admin">
            <form id="createNewProductForm" onSubmit={sendNewProduct}>
                <input type="text" required name="productTitle"/>
                <input type="text" required name="productPrice"/>
                <input type="text" required name="productImage"/>
                <input type="text" required name="productType"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdminProfile;