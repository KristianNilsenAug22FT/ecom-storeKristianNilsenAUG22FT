import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Loading = styled.div`
  font-size: 18px;
  color: #333;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #007bff;
  border-radius: 4px;
  transition: border-color 0.3s ease;
  outline: none;

  &:focus {
    border-color: #0056b3;
  }
`;

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://v2.api.noroff.dev/online-shop');
      setProducts(response.data.data);
      setFilteredProducts(response.data.data);
      setLoading(false);
      console.log('List of products:', response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const handleSearch = (term) => {
    if (term.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Container>
      <Title>ecom-store numero uno</Title>
      <SearchContainer>
        <SearchBar products={products} onSearch={handleSearch} />
      </SearchContainer>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <ProductList>
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default HomePage;
