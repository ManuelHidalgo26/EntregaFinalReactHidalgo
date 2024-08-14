import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (quantity) => {
  
    console.log(`Añadido ${quantity} al carrito`);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
