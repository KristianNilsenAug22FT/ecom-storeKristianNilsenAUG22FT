// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage'; 
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import Layout from './components/Layout'; // Import Layout component
import CartIcon from './components/CartIcon'; // Import CartIcon component

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]); // Clear the cart
  };

  return (
    <div className="App">
      <Router>
        <Layout>
          <CartIcon itemCount={cart.length} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
            <Route 
              path="/checkout" 
              element={<CheckoutPage products={cart} removeFromCart={removeFromCart} />} 
            />
<Route 
  path="/checkout-success" 
  element={<CheckoutSuccessPage clearCart={clearCart} />} 
/>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
