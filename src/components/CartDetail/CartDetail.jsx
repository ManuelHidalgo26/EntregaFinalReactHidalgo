import React from 'react';

const CartDetail = ({ cart, removeFromCart }) => {
    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CartDetail;