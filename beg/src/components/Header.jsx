import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css';
function Header({cart}) {
  return (
    <div className="navbar">
        <div className="logo">Shopping cart</div>
        <ul>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/cart" className="nav-link"><span className="cart-count">{cart.length}</span>View cart</Link>
        </ul>
    </div>
  )
}

export default Header