import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase.</p>

      <Link to="/">Go back to the frontpage</Link>
    </div>
  );
}

export default CheckoutSuccessPage;
