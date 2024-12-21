import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      
      
      <div className='nav'>
      <div>
      <img
          src="/images/5b8c59419c86627dac6721ace8813f2e-removebg-preview.png"
          height={50}
          width={50}
          alt="Paradise Nursery Logo"
        />
      </div>
      <div>
      <h1>Paradise Nursery</h1>
      <p>Where green meets serenity</p>
      </div>
      </div>
      <div >
        <h3 style={{fontSize: 25}}>Plants</h3>
      </div>
      <div className='link'>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
