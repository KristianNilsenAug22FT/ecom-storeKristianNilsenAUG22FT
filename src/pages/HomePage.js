// Import React and other necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product'; // <-- Import the modified Product component with the link
import { Link } from 'react-router-dom'; // <-- Import Link component from react-router-dom

// Define the HomePage component
const HomePage = () => {
  // Define state variables
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://v2.api.noroff.dev/online-shop');
      setProducts(response.data.data);
      setFilteredProducts(response.data.data); // Initialize filteredProducts with all products
      setLoading(false);
      console.log('List of products:', response.data.data); // Log the list of products

    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  // Function to handle search input
  const handleSearch = (term) => {
    if (term.trim() === '') {
      setFilteredProducts(products); // Reset to display all products
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Render loading indicator if data is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render HomePage content
  return (
    <div>
      <h1>Home Page</h1>
      <SearchBar products={products} onSearch={handleSearch} />
      <div className="product-list">
        {/* Map through filtered products and render Product component for each */}
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Export the HomePage component
export default HomePage;
