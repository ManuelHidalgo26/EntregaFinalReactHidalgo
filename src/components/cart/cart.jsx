import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); 
    return (
        <div>
            {cart.length === 0 ? (
                <h1>No hay productos en el carrito</h1>
            ) : (
                <>
                    <h2>Tu carrito</h2>
                    <CartDetail cart={cart} removeFromCart={removeFromCart} />
                    <div>
                        <p>Total de items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
                        <button>Proceder al pago</button>
                        <button onClick={() => navigate('/checkout')}>Proceder al pago</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
