import React from 'react';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext/CartProvider'; 
import CartDetail from '../CartDetail/CartDetail'; 

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    
    const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 0), 0);
    
    
    const totalPrice = cart.reduce((acc, item) => acc + (item.precio * (item.quantity || 0)), 0);

    return (
        <div>
            {cart.length === 0 ? (
                <div>
                    <h1>No hay productos en el carrito</h1>
                    <button onClick={() => navigate('/')}>Volver al catálogo</button>
                </div>
            ) : (
                <>
                    <h2>Tu carrito</h2>
                    <CartDetail cart={cart} removeFromCart={removeFromCart} />
                    <p>Total de items: {totalItems}</p>
                    <p>Total a pagar: ${totalPrice.toFixed(2)}</p> 
                    <button onClick={clearCart}>Limpiar carrito</button>
                    <button onClick={() => navigate('/checkout')}>Proceder al pago</button>
                </>
            )}
        </div>
    );
};

export default Cart;