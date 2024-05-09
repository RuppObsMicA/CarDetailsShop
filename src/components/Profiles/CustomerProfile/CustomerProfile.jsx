import React, {useEffect, useRef, useState} from 'react';
import Offer from "./Offer/Offer";
import {Link} from "react-router-dom";
import arrowBackward from "../../../images/Profiles/ArrowBackward.svg"
import arrowForward from "../../../images/Profiles/ArrowForward.svg"

const CustomerProfile =  () => {

    const [offers, setOffers] = useState();

    const url = "http://localhost:3030";

    useEffect(() => {
        async function fetchData(){
            let response = await fetch(url);
            response = await response.json();
            setOffers(response.map((offer) => {
                return <Offer offer = {offer} />
            }))
        }
        fetchData();
    }, [])



    // console.log(offers)


    return (
        <div className="profile-customer">
            <aside className="profile-customer__sidebar"> // Make a reused component
                <Link to="/customer_offers" className="profile-customer__sidebar__link">
                    <div>My offers</div>
                </Link>
                <Link to="/customer_cart" className="profile-customer__sidebar__link">
                    <div>Cart</div>
                </Link>
                <Link to="/customer_favourite" className="profile-customer__sidebar__link">
                    <div>Favourite</div>
                </Link>
                <Link to="/customer_personal_data" className="profile-customer__sidebar__link">
                    <div>Personal data</div>
                </Link>
                <Link to="/customer_bonuses" className="profile-customer__sidebar__link">
                    <div>Bonuses</div>
                </Link>
            </aside>
            <div className="profile-customer__offers-history">
                <h1>Orders history</h1>
                <div className="profile-customer__offers-history__offers" >
                    {offers}
                </div>
                <div className="profile-customer__offers-history__navigation">
                    <img src={arrowBackward} alt="arrowBackward"/>
                    <img src={arrowForward} alt="arrowForward"/>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;