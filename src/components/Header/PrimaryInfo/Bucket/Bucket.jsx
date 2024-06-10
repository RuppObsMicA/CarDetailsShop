import React from 'react';
import bucketImage from "../../../../images/Header/bucket.svg";
import {Link} from "react-router-dom";
import {getRole} from "../../../JSMethods/JSMethods";

const Bucket = () => {
    let path = "/cart";
    if (localStorage.getItem("logged")){
        path = `/${getRole()}_profile/cart`
    }
    return (
        <Link to={path} className="header__bucket">
            <div>
                <img src = {bucketImage} alt="bucket" className="header__bucket-image"/>
            </div>
        </Link>
    );
};

export default Bucket;