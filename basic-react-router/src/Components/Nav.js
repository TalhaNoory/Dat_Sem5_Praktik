import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {

  const navStyle = {
    color: 'black'
  }

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/'><li>Home</li></Link>
        <Link style={navStyle} to='/about'><li>About Pokemons</li></Link>
        <Link style={navStyle} to='/shop'><li>Shop Pokemons</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;