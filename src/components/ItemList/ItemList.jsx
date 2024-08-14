import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ productos }) => {
    return (
        <div className="item-list">
            {productos.map(producto => (
                <Item
                    key={producto.id}
                    id={producto.id}
                    nombre={producto.nombre}
                    precio={producto.precio}
                    imagen={producto.imagen}
                    stock={producto.stock}
                />
            ))}
        </div>
    );
};

export default ItemList;



