import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ productos }) => {
    if (!Array.isArray(productos)) {
        return null;
    }

    return (
        <div className="item-list">
            {productos.map(producto => (
                <div key={producto.id} className="item">
                    <Link to={`/item/${producto.id}`}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ItemList;

