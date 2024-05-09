import React from 'react';
import bucketImage from "../../../../images/Header/bucket.svg";
import {Link} from "react-router-dom";

const Bucket = () => {
    return (
        <Link to="/cart" className="header__bucket-image">
            <div>
                <img src = {bucketImage} alt="bucket"/>
            </div>
        </Link>
    );
};

export default Bucket;