import batteryImage from './../assets/images/Main/MainCatalog/battery.svg';
import tiresAndWheelsImage from './../assets/images/Main/MainCatalog/tiresAndWheels.svg';
import engineOilImage from './../assets/images/Main/MainCatalog/engineOil.svg';
import autoChemicalGoodsImage from './../assets/images/Main/MainCatalog/autoChemicalGoods.svg';
import toolsImage from './../assets/images/Main/MainCatalog/tools.svg';
import carBodyPartsImage from './../assets/images/Main/MainCatalog/carBodyParts.svg';
import orderPending from '../assets/images/Profiles/OrderPending.svg';
import orderCancelled from '../assets/images/Profiles/OrderCancelled.svg';
import orderDelivered from '../assets/images/Profiles/OrderDelivered.svg';
import orderApproved from '../assets/images/Profiles/OrderApproved.svg';

export const URL = 'http://localhost:3030';

// Orders statuses
export const ORDER_STATUS_PENDING = 'pending';
export const ORDER_STATUS_CANCELLED = 'cancelled';
export const ORDER_STATUS_APPROVED = 'approved';
export const ORDER_STATUS_DELIVERED = 'delivered';

// Product types
export const setOfProductTypes = [
    { name: 'Battery', image: batteryImage, dataBaseTable: 'batteries' },
    {
        name: 'Tires And Wheels',
        image: tiresAndWheelsImage,
        dataBaseTable: 'tires_and_wheels',
    },
    { name: 'Engine Oil', image: engineOilImage, dataBaseTable: 'engine_oil' },
    {
        name: 'Auto chemical goods',
        image: autoChemicalGoodsImage,
        dataBaseTable: 'auto_chemical_goods',
    },
    { name: 'Tools', image: toolsImage, dataBaseTable: 'tools' },
    {
        name: 'Body parts',
        image: carBodyPartsImage,
        dataBaseTable: 'body_parts',
    },
];

export const imagesForOrderStatus: { [key: string]: string } = {
    pending: orderPending,
    cancelled: orderCancelled,
    approved: orderApproved,
    delivered: orderDelivered,
};
