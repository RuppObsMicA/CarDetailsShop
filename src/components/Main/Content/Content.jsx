import React, {useEffect, useState} from 'react';
import arrowCatalogImage from "../../../images/Main/ArrowCatalog.svg"

const Content = ({setOfProducts}) => {

    const [isContentHidden, setIsContentHidden] = useState(true);

    const setOfStates = setOfProducts.map((elem) => {
        return elem.isHidden;
    });

    console.log(setOfStates);

    useEffect(() => {
        let counter = 0;
        console.log("Use Effect");
        setOfStates.forEach((elem) => {
            counter++;
            if (elem === false){
                setIsContentHidden(false);
                counter--;
            }
            if (counter === 6){
                setIsContentHidden(true);
            }
        })
    }, [setOfStates])


    return (
        <div className="main__content" hidden={isContentHidden}>
            <div className="main__content__search-menu">
                <div className="main__content__search-menu__side-menu">
                    <div className="main__content__search-menu__side-menu__header">
                        <button>Catalog</button>
                        <button>Brands</button>
                    </div>
                    <div className="main__content__search-menu__side-menu__product">
                        <p>Batteries</p>
                    </div>
                </div>
                <div className="main__content__search-menu__main-search">
                    <h4>Catalog <img src={arrowCatalogImage} alt="Arrow"/> Batteries</h4>
                    <h2>Batteries</h2>
                    <div className="main__content__search-menu__main-search__search-dropdown">
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                    </div>
                </div>
            </div>
            <div className="main__content__catalog">

            </div>
        </div>
    );
};

export default Content;