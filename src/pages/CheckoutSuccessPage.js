import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccessPage = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, []);

  const containerStyle = {
    textAlign: 'center',
    color: '#493A84',
    marginTop: '100px',
  };

  const headingStyle = {
    fontSize: '44px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#493A84',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Order Successful!</h1>
      <p style={paragraphStyle}>Thank you for your purchase.</p>
      <Link to="/" style={linkStyle}>Go back to the frontpage</Link>
    </div>
  );
}

export default CheckoutSuccessPage;
