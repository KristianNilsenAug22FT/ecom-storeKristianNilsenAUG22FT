import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileNavToggle = styled.div`
  display: block;
  color: white;
  padding: 14px 16px;
  cursor: pointer;
`;

const Navbar = styled.nav`
  background-color: #333;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  height: ${(props) => (props.$showMenu ? '158px' : '56px')};
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  margin-bottom: 50px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 10px;
  }

  li a {
    color: white;
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    ul {
      display: none;
    }
  }

  @media screen and (min-width: 601px) {
    ${MobileNavToggle} {
      display: none;
    }
  }
`;

const DropdownContent = styled.div.attrs(props => ({
  $showmenu: props.$showMenu ? 'true' : 'false'
}))`
  display: ${(props) => (props.$showMenu ? 'block' : 'none')};
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
  padding: 10px;

  a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
  }
`;

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeDropdown = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <Navbar $showMenu={showMenu}>
        <ul>
          <li><Link to="/" onClick={closeDropdown}>Home</Link></li>
          <li><Link to="/contact" onClick={closeDropdown}>Contact</Link></li>
          <li><Link to="/checkout" onClick={closeDropdown}>Checkout</Link></li>
        </ul>
        <MobileNavToggle onClick={toggleMenu}>☰</MobileNavToggle>
        <DropdownContent $showMenu={showMenu}>
          <Link to="/" onClick={closeDropdown}>Home</Link>
          <Link to="/contact" onClick={closeDropdown}>Contact</Link>
          <Link to="/checkout" onClick={closeDropdown}>Checkout</Link>
        </DropdownContent>
      </Navbar>
    </header>
  );
}

export default Header;
