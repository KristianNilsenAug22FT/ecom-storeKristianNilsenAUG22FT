import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = ({ addToCart }) => { // Destructure addToCart from props
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://v2.api.noroff.dev/online-shop/${productId}`);
        const productData = response.data.data;
        console.log('Product Data:', productData);
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
    <div>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image.url} alt={product.image.alt} />
          <p>{product.description}</p>
          <p>Regular price:<span style={{ textDecoration: 'line-through' }}> ${product.price}</span></p>
          <p>Price now: ${product.discountedPrice}</p>
          <p>You save: ${product.price-product.discountedPrice}</p>
          <h3>Reviews</h3>
          <ul>
            {product.reviews.map(review => (
              <li key={review.id}>
                <p>{review.description}</p>
                <p>Rating: {review.rating}</p>
                <p>By: {review.username}</p>
              </li>
            ))}
          </ul>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
