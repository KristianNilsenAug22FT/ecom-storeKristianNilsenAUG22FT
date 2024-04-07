import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 600px; /* Set the maximum width */
  margin: 0 auto; /* Center the container horizontally */
`;

const Title = styled.h1`
  font-size: 44px;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
  color: #493A84;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const CartItemsContainer = styled.div`
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    flex: 1;
  }

  button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #c82333;
    }
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalLabel = styled.h2`
  flex: 1;
`;

const TotalAmount = styled.p`
  font-weight: bold;
  text-decoration: underline;
`;

const CheckoutButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const EmptyCartMessage = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 24px;
`;

const CheckoutPage = ({ products, removeFromCart }) => {
  // Function to calculate total price
  const getTotal = () => {
    if (!products || products.length === 0) return 0;
    return products.reduce((total, product) => total + product.discountedPrice, 0);
  };

  return (
    <Container>
      <Title>Checkout</Title>
      {products && products.length > 0 ? (
        <div>
          <CartItemsContainer>
            <h2>Cart Items</h2>
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <CartItem>
                    <span>{product.title}</span>
                    <span>${product.discountedPrice}</span>
                    <button onClick={() => removeFromCart(product.id)}>Remove</button>
                  </CartItem>
                </li>
              ))}
            </ul>
          </CartItemsContainer>
          <TotalContainer>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>${getTotal()}</TotalAmount>
          </TotalContainer>
          <Link to="/checkout-success">
            <CheckoutButton>Checkout</CheckoutButton>
          </Link>
        </div>
      ) : (
        <EmptyCartMessage>Cart is empty</EmptyCartMessage>
      )}
    </Container>
  );
};

export default CheckoutPage;
