import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ViewProductButton = styled(Link)`
  background-color: #2A2833;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;
  position: absolute;
  min-width: 100px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 50px;
`;


const Product = ({ product }) => {
  const percentageDiscount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

  return (
    <ProductCard>
      {product.price !== product.discountedPrice && (
        <DiscountBadge>{percentageDiscount}% OFF</DiscountBadge>
      )}
      <ImageContainer>
        <ProductImage src={product.image.url} alt={product.image.alt} />
      </ImageContainer>
      <ProductDetails>
        <div>
          <Title>{product.title}</Title>
          <Description>{product.description}</Description>
          {product.price !== product.discountedPrice && (
            <>
              <p>Regular price:<span style={{ textDecoration: 'line-through' }}> ${product.price}</span></p>
              <Price>Price now: ${product.discountedPrice}</Price>
              <p>You save: ${product.price - product.discountedPrice}</p>
            </>
          )}
          {product.price === product.discountedPrice && (
            <Price>Price now: ${product.discountedPrice}</Price>
          )}
        </div>
      </ProductDetails>
      <ViewProductButton to={`/product/${product.id}`} className="view-product-button">
        View Product
      </ViewProductButton>
    </ProductCard>
  );
};



export default Product;
