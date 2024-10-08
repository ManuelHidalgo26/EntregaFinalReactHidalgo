import React from 'react';

const CartDetail = ({ cart, removeFromCart }) => {
    if (!cart || cart.length === 0) {
        return <p>No hay productos en el carrito.</p>; 
    }

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h3>{item.nombre}</h3> 
                    <p>Cantidad: {item.quantity || 0}</p> 
                    <p>Precio: ${item.precio ? item.precio.toFixed(2) : '0.00'}</p> 
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    );
};

export default CartDetail;