import React from 'react';

import { VinBrandSearch } from './VinBrandSearch/VinBrandSearch';
import { VinBrandInput } from './VinBrandInput/VinBrandInput';

export const SmartSearch = () => {
    return (
        <div className="smart-search">
            <VinBrandSearch />
            <VinBrandInput />
        </div>
    );
};
