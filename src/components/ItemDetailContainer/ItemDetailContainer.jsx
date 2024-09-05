import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useCart } from '../../Context/CartContext/CartProvider'; // Importa desde CartContext
import Spinner from '../Spinner/Spinner'; 
import './ItemDetailContainer.css';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const { addToCart } = useCart();

    useEffect(() => {
        const db = getFirestore();

        const newDoc = doc(db, "item", id);

        getDoc(newDoc)
            .then(res => {
                if (res.exists()) {
                    const data = res.data();
                    const newProduct = { id: res.id, ...data }; 
                    setProducto(newProduct);
                } else {
                    setError(new Error('Producto no encontrado'));
                }
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="item-detail-container">
            {producto ? <ItemDetail producto={producto} onAddToCart={addToCart} /> : <div>Producto no encontrado</div>}
        </div>
    );
};

export default ItemDetailContainer;


