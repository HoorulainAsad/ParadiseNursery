import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import ProductListing from './components/ProductListing.js';
import CartPage from './components/CartPage.js';
import Navbar from './components/NavBar.js';

function App() {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  // Update cart (increase/decrease quantity)
  const updateCart = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={<ProductListing cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
