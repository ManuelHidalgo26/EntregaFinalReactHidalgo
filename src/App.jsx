import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';
import { CartProvider } from './Context/CartContext/CartProvider';
import { ThemeProvider } from './Context/ThemeContext/ThemeProvider'
import { db } from './main';
import { getFirestore, collection, getDocs, snapshotEqual, doc } from 'firebase/firestore';
import Cart from './components/cart/cart';
import CartDetail from './components/CartDetail/CartDetail';
import { Checkout } from './components/Checkout/Checkout';

const App = () => {

    const [product,setproduct] = useState ([]);
    
    useEffect(() => {
        const db = getFirestore();

        const itemCollection = collection( db, "item")

        getDocs(itemCollection).then((snapshot) => {
            setproduct (snapshot.docs.map((doc) => (
                { id: doc.id, ...doc.data() }
            )))
        })
    }, []);
console.log(product);
    return (
        <ThemeProvider>
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='*' element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
        </ThemeProvider>
    );
}

export default App;

