import React from 'react'
import CartWidget from './CartWidget'
import {NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink className='links' to="/category/electronics">Electronica</NavLink>
      <NavLink className='links' to="/category/jewelery">Joyas</NavLink>
      <NavLink className='links' to="/category/clothing">Ropa </NavLink>
      <CartWidget />
    </nav>
  );
}
    
export default NavBar