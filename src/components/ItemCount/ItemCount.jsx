import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const addToCart = () => {
        onAdd(count);
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button className="add-to-cart" onClick={addToCart} disabled={stock === 0}>
                Agregar al carrito
            </button>
            {stock === 0 && <p>Sin stock disponible</p>}
        </div>
    );
};

export default ItemCount;




