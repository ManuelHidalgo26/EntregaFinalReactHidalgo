import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = (count) => {
        setQuantity(count);
            };

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <ItemCount stock={producto.stock} onAdd={handleAdd} />
        </div>
    );
};

ItemDetail.propTypes = {
    producto: PropTypes.shape({
        imagen: PropTypes.string.isRequired,
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        precio: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default ItemDetail;

