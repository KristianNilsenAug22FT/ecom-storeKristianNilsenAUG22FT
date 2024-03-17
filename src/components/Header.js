import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
