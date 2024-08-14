import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, nombre, precio, imagen, stock }) => {
    return (
        <div className="item-card">
            <Link to={`/item/${id}`}>
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
                <p>Precio: ${precio}</p>
                <p>Stock: {stock}</p>
            </Link>
        </div>
    );
};

export default Item;

