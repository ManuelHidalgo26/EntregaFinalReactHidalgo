import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoriaId } = useParams();
    const greeting = "¡Bienvenido a Gran Burga!";

    useEffect(() => {
        fetch('/productos.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                return response.json();
            })
            .then(data => {
                if (categoriaId) {
                    const filteredProducts = data.filter(producto => producto.categoria === categoriaId);
                    setProductos(filteredProducts);
                } else {
                    setProductos(data);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [categoriaId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="item-list-container">
            <h1 className='presentacion'>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    );
}

export default ItemListContainer;


