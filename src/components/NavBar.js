import React from 'react'
import CartWidget from './CartWidget'
import {NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink className='links' to="/category/1">Electronica</NavLink>
      <NavLink className='links' to="/category/2">Joyas</NavLink>
      <NavLink className='links' to="/category/3">Ropa </NavLink>
      <CartWidget/>
    </nav>
  );
}

//con Link no recarga la app
    /* <nav>
      <Link to="/productos">Productos</Link>
      <a href="/carrito">Carrito</a>
      <a href="/sadsad">asdsadsa</a>
    </nav> */
    
export default NavBar