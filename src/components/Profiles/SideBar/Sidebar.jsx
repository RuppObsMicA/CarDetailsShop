import React from 'react';
import {Link} from "react-router-dom";
import {getRole} from "../../JSMethods/JSMethods";

const Sidebar = () => {

    const setOfCustomerLinks =
    [{
        title: "My orders",
        path: `/${getRole()}_profile/orders`
    }, {
        title: "Cart",
        path: `/${getRole()}_profile/cart`
    }, {
        title: "Favourite",
        path: `/${getRole()}_profile/favourite`
    }, {
        title: "Personal data",
        path: `/${getRole()}_profile/personal_data`
    }, {
        title: "Bonuses",
        path: `/${getRole()}_profile/bonuses`
    }]

    const customerLinks = setOfCustomerLinks.map((link) => {
        return <Link to={link.path} className="sidebar__link" key={link.title}>
                    <div className="sidebar__title">{link.title}</div>
                </Link>
    })

    return (
        <aside className="sidebar">
            {customerLinks}
        </aside>

    );
};

export default Sidebar;