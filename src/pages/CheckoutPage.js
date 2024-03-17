import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = ({ products, removeFromCart }) => {
  // Function to calculate total price
  const getTotal = () => {
    if (!products || products.length === 0) return 0; // Return 0 if products is undefined or empty
    return products.reduce((total, product) => total + product.discountedPrice, 0);
  };

  return (
    <div>
      <h1>Checkout</h1>
      {products && products.length > 0 ? (
        <div>
          <h2>Cart Items</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <span>{product.title}</span>
                <span>${product.discountedPrice}</span>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div>
            <h2>Total</h2>
            <p>${getTotal()}</p>
          </div>
          <Link to="/checkout-success">
            <button>Checkout</button>
          </Link>
        </div>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default CheckoutPage;
