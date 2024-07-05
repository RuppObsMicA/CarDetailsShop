import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../store/hooks";
import {RootState} from "../../../../store/store";

// Pictures
import bucketImage from "../../../../images/Header/bucket.svg";

export const Bucket = () => {

    const role = useAppSelector((state:RootState) => state.auth.role);

    let path = "/cart";
    // if (localStorage.getItem("logged")){
    //     path = `/${role}_profile/cart`
    // }
    return (
        <Link to={path} className="header__bucket">
            <div>
                <img src = {bucketImage} alt="bucket" className="header__bucket-image"/>
            </div>
        </Link>
    );
};