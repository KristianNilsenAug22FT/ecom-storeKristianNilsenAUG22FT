import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const CheckoutSuccessPage = ({ clearCart }) => {
  useEffect(() => {
    clearCart(); // Call clearCart function to clear the cart when component mounts
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase.</p>
      {/* Add link to go back to the store */}
      <Link to="/">Go back to the frontpage</Link>
    </div>
  );
}

export default CheckoutSuccessPage;
