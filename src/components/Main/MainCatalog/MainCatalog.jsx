import React, {useState} from 'react';
import SellElement from "./SellElement/SellElement";
import Content from "../Content/Content";

const MainCatalog = ({setOfProducts}) => {

    const [isContentActive, setIsContentActive] = useState(false);

    const renderProduct = function (product) {
        setIsContentActive(true);
        return <Content
            isContentActive={isContentActive}
            setIsContentActive={setIsContentActive}
            product={product}
        />
    }

    const productsToRender = setOfProducts.map((product) => {
        return <SellElement product={product} renderProduct={renderProduct} key={product.name}/>
    })

    return (
        <div className="catalog">
            <div className="catalog__elements">
                {productsToRender}
            </div>
            <Content isContentActive={isContentActive} setIsContentActive={setIsContentActive}/>
        </div>
    );
};

export default MainCatalog;