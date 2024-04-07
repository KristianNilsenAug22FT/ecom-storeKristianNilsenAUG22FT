import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Price = styled.p`
  margin-bottom: 10px;
`;

const ReviewsBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
`;

const ReviewItem = styled.div`
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #2A2833;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled component for h2 element
const ProductDetailsTitle = styled.h2`
  color: #493A84; /* Set the color */
  font-size: 44px;
`;

const ProductPage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://v2.api.noroff.dev/online-shop/${productId}`);
        const productData = response.data.data;

        setProduct(productData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      alert('Product added to cart!');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>Product Details:</Title>
      {product && (
        <ProductDetails>
          {/* Apply the styled component here */}
          <ProductDetailsTitle>{product.title}</ProductDetailsTitle>
          <ProductImage src={product.image.url} alt={product.image.alt} />
          <p>{product.description}</p>
          <Price>
            Regular price: <span style={{ textDecoration: 'line-through' }}>${product.price}</span>
          </Price>
          <Price>Price now: ${product.discountedPrice}</Price>
          <Price>You save: ${product.price - product.discountedPrice}</Price>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
          <h3>Reviews</h3>
          <ReviewsBox>
            {product.reviews.map(review => (
              <ReviewItem key={review.id}>
                <p>{review.description}</p>
                <p>Rating: {review.rating}</p>
                <p>By: {review.username}</p>
              </ReviewItem>
            ))}
          </ReviewsBox>
        </ProductDetails>
      )}
    </Container>
  );
};

export default ProductPage;
