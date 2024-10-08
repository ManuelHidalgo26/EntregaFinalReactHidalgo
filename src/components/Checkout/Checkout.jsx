import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext/CartProvider'; 
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export const Checkout = () => {
    const { cart, removeFromCart } = useCart();
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert('No hay productos en el carrito');
            return;
        }

        setLoading(true); 

        const order = {
            buyer,
            items: cart,
            total: cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0),
        };

        try {
            // Guardar la orden en Firestore
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id); 
            alert('Compra realizada con éxito. Gracias por tu compra!');
            
            // Limpiar el carrito
            cart.forEach(item => removeFromCart(item.id));
            navigate('/');
        } catch (error) {
            console.error("Error al crear la orden:", error);
            alert("Hubo un problema al procesar tu compra. Intenta nuevamente.");
        } finally {
            setLoading(false); 
        }
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
                                {item.nombre} x {item.quantity} - ${item.precio * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h4>Total: ${cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0)}</h4>
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
                        <button type="submit" disabled={loading}>Confirmar Compra</button> 
                    </form>
                </>
            )}
        </div>
    );
};
export default Checkout;