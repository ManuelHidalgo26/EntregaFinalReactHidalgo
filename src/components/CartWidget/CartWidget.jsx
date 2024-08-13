import './CartWidget.css';
import { HiShoppingCart } from "react-icons/hi";
import React, { useState, useEffect } from 'react';


const CartWidget = ({ cart = [] }) => {
    const totalItems = cart.length;

    return (
        <div className='nav-cart'>
            <p>{totalItems}</p>
            <HiShoppingCart />
        </div>
    );
};

export default CartWidget;
