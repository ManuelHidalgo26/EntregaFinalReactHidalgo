import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoriaId } = useParams();
    const greeting = "¡Bienvenido a Gran Burga!";

    useEffect(() => {
        setLoading(true);
    
        const db = getFirestore();
    
        console.log("categoriaId:", categoriaId); // Verifica qué valor está tomando categoriaId
    
        const myProducts = categoriaId
            ? query(collection(db, "item"), where("categoria", "==", categoriaId))
            : collection(db, "item");
    
        getDocs(myProducts)
            .then((res) => {
                const newProducts = res.docs.map((doc) => {
                    const data = doc.data();
                    console.log("Producto encontrado:", data); // Muestra cada producto obtenido
                    return { id: doc.id, ...data };
                });
                setProductos(newProducts);
            })
            .catch((error) => {
                console.log("Error searching items", error);
                setError(error); 
            })
            .finally(() => setLoading(false));
    }, [categoriaId]);
    if (loading) {
        return <div><Spinner /></div>;
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




