import React, { useContext, useState } from 'react';
import { CartProvider } from '../../Context/CartContext/CartProvider';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
    const [orderId, setOrderId] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckout = (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('No hay productos en el carrito');
            return;
        }

        
        const order = {
            buyer,
            items: cart,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };

        
        console.log('Orden generada:', order);
        setOrderId('12345ABC'); 
        alert('Compra realizada con éxito. Gracias por tu compra!');
        
        cart.forEach(item => removeFromCart(item.id));
        navigate('/');
    };

    return (
        <div>
            <h2>Checkout</h2>
            {orderId ? (
                <h3>Gracias por tu compra. Tu número de orden es: {orderId}</h3>
            ) : (
                <>
                    <h3>Resumen de tu carrito:</h3>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>
                                {item.name} x {item.quantity} - ${item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
                    <form onSubmit={handleCheckout}>
                        <div>
                            <label>Nombre:</label>
                            <input
                                type="text"
                                name="name"
                                value={buyer.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={buyer.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Teléfono:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={buyer.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit">Confirmar Compra</button>
                    </form>
                </>
            )}
        </div>
    );
};
