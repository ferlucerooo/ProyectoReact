import React from 'react'
import CartWidget from './CartWidget'
import {NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink className='links' to="/cat/1">Electronica (electronics)</NavLink>
      <NavLink className='links' to="/cat/2">Joyas (jewelery)</NavLink>
      <NavLink className='links' to="/cat/3">Ropa de hombre(men's clothing) </NavLink>
      <NavLink className='links' to="/cat/4">Ropa de mujer(women's clothing) </NavLink>
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
    


    {/* <Nav className="nav" defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link className='links active'  to="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='links' eventKey="link-1">Store</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='links' eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item className='links' as="li">
        <CartWidget/>
      </Nav.Item>
    </Nav> */}
export default NavBar