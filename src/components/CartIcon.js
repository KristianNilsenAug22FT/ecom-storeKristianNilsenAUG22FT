import React from 'react';
import { Link } from 'react-router-dom';
import CartSvg from '../img/cart.svg';

const CartIcon = ({ itemCount }) => {
  return (
    <div className="cart-icon-container" style={{ position: 'absolute', top: '64px', right: '20px', padding: '10px' }}>
      <Link to="/checkout">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={CartSvg} alt="Cart" style={{ width: '40px', height: '40px' }} />
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
