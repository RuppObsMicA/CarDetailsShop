import React, {useEffect, useRef, useState} from 'react';
import Offer from "./Order/Order";
import {Link} from "react-router-dom";
import arrowBackward from "../../../images/Profiles/ArrowBackward.svg"
import arrowForward from "../../../images/Profiles/ArrowForward.svg"
import {URL} from "../../../ServerSettings/serverSettings";
import Sidebar from "../SideBar/Sidebar";

const CustomerProfile =  () => {

    const [orders, setOrders] = useState();

    async function fetchData(){
        let response = await fetch(URL + "/get-all-orders");
        response = await response.json();
        console.log(response);
        setOrders(response.map((order) => {
            return <Offer order = {order} />
        }))
    }
    useEffect(() => {
        // fetchData();
    }, [])


    return (
        <div className="profile-customer">
            <Sidebar/>
            <div className="profile-customer__orders-history">
                <h1>Orders history</h1>
                <div className="profile-customer__orders-history__offers" >
                    {orders}
                </div>
                <div className="profile-customer__orders-history__navigation">
                    <img src={arrowBackward} alt="arrowBackward"/>
                    <img src={arrowForward} alt="arrowForward"/>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;