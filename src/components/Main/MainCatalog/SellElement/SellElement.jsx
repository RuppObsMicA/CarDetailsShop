import React, {useState} from 'react';
const SellElement = ({product}) => {

    const {image, name, isHidden, setIsHidden} = product;
    // const {image, name} = product;
    // console.log(name);
    // console.log(setIsHidden)

    const url = "http://localhost:3030/";
    async function getProductDataFromDB (product){
        let response = await fetch(url);
        console.log(product);

        if (response.ok) {
            let targetData = await response.json();
            console.log(targetData);
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
        renderContent(product);
    }

    function renderContent(product){
        isHidden
            ? setIsHidden(false) : setIsHidden(true)
    }

    return (
        <div onClick={() => getProductDataFromDB(name)}>
            <img src={image} alt={name}/>
            <div>{name}</div>
        </div>
    );
};

export default SellElement;