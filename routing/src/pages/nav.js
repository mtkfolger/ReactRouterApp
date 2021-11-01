import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom'
import Coffee from "../../src/coffee.png";


const navStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Nav() {
  return (
    <nav>
      <img className="logo" src={Coffee} alt="coffee-logo"></img>
      <h1 className="header">Poured || Coffee & Goods</h1>
      <ul className="nav-links">
          <Link className="home-link" style={navStyle} to="/"> <li>Home</li> </Link>
          <Link className="about-link" style={navStyle} to="/about"> <li>About</li> </Link>
          <Link className="shop-link" style={navStyle} to="/shop"> <li>Shop</li> </Link>
          <Link className="shop-link" style={navStyle} to="/shop"> <li>Cart</li> </Link>
      </ul>
    </nav>
  );
}

export default Nav;
