import React from 'react';
import './Item.css';

const Item = ({ nombre, precio, descripcion, imagen, categoria, stock }) => {
    if (!nombre || !precio || !descripcion || !imagen || !categoria || stock === undefined) {
        return <p>El ítem no está disponible</p>;
    }

    return (
        <div className="item">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
            <button>Añadir al carrito</button>
        </div>
    );
};

export default Item;
