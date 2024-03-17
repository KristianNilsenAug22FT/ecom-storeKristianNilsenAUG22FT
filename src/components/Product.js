import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  // Calculate percentage discount
  const percentageDiscount = Math.round(((product.price - product.discountedPrice) / product.price) * 100);

  return (
    <div className="product" style={{ position: 'relative' }}>
      {product.price !== product.discountedPrice && ( // Conditionally render the discount badge
        <div
          className="discount-badge"
          style={{
            width: '90px',
            backgroundColor: 'green',
            color: 'white',
            padding: '5px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
            zIndex: '1',
            transition: 'transform 0.3s',
            textAlign: 'center',
            position: 'absolute',
            top: '5px',
            right: '5px',
          }}
        >
          {percentageDiscount}% OFF
        </div>
      )}
      <img src={product.image.url} alt={product.image.alt} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {product.price !== product.discountedPrice && ( // Conditionally render "Regular price" and "You save" sections
        <>
          <p>Regular price:<span style={{ textDecoration: 'line-through' }}> ${product.price}</span></p>
          <p>Price now: ${product.discountedPrice}</p>
          <p>You save: ${product.price - product.discountedPrice}</p>
        </>
      )}
      {product.price === product.discountedPrice && ( // Conditionally render "Price now" section
        <p>Price now: ${product.discountedPrice}</p>
      )}
      <Link to={`/product/${product.id}`} className="view-product-button">
        View Product
      </Link>
    </div>
  );
};

export default Product;
