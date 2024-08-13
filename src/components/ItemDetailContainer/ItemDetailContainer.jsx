import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/productos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                return response.json();
            })
            .then(data => {
                const producto = data.find(p => p.id === Number(id));
                setProducto(producto);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="item-detail-container">
            {producto ? (
                <ItemDetail producto={producto} />
            ) : (
                <div>Producto no encontrado</div>
            )}
        </div>
    );
};

export default ItemDetailContainer;




