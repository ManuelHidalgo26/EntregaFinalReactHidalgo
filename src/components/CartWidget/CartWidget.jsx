import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import { useCart } from '../../Context/CartContext/CartProvider'; 

const CartWidget = () => {
    const { cart } = useCart(); 
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); 

    return (
        <div className='nav-cart'>
            <HiShoppingCart />
            {totalItems > 0 && <span>{totalItems}</span>} 
        </div>
    );
};

export default CartWidget;