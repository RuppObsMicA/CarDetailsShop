import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {

    const setOfCustomerLinks =
    [{
        title: "My offers",
        path: "/customer_offers"
    }, {
        title: "Cart",
        path: "/cart"
    }, {
        title: "Favourite",
        path: "/customer_favourite"
    }, {
        title: "Personal data",
        path: "/customer_personal_data"
    }, {
        title: "Bonuses",
        path: "/customer_bonuses"
    }]

    const customerLinks = setOfCustomerLinks.map((link) => {
        return <Link to={link.path} className="profile-customer__sidebar__link">
                    <div>{link.title}</div>
                </Link>
    })

    return (
        <aside className="profile-customer__sidebar">
            {customerLinks}
        </aside>

    );
};

export default Sidebar;