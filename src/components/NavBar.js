import React from 'react'
import CartWidget from './CartWidget'
import {NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink className='links' to="/category/1">Electronica (electronics)</NavLink>
      <NavLink className='links' to="/category/2">Joyas (jewelery)</NavLink>
      <NavLink className='links' to="/category/3">Ropa de hombre(men's clothing) </NavLink>
      <NavLink className='links' to="/category/4">Ropa de mujer(women's clothing) </NavLink>
      <CartWidget/>
    </nav>
  );
}

//con Link no recarga la app
    {/* <nav>
      <Link to="/productos">Productos</Link>
      <a href="/carrito">Carrito</a>
      <a href="/sadsad">asdsadsa</a>
    </nav> */}
    
export default NavBar