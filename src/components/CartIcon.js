import React from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../img/cart.svg'; // Import the cart.svg file

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon">
      <Link to="/checkout">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={CartSvg} alt="Cart" style={{ width: '24px', height: '24px' }} />
          {itemCount > 0 && (
            <div style={{ position: 'absolute', bottom: '-4px', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', textAlign: 'center', lineHeight: '20px', fontSize: '12px' }}>
              {itemCount}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CartIcon;
