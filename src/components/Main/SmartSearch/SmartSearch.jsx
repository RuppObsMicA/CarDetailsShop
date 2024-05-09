import React from 'react';
import VinBrandSearch from "./VinBrandSearch/VinBrandSearch";
import VinBrandInput from "./VinBrandInput/VinBrandInput";

const SmartSearch = () => {
    return (
        <div className="main__smart-search">
            <VinBrandSearch/>
            <VinBrandInput/>
        </div>
    );
};

export default SmartSearch;