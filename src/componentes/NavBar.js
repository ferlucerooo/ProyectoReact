import React from 'react'
import CartWidget from './CartWidget'
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav className="nav" defaultActiveKey="/home" as="ul">
      <Nav.Item  as="li">
        <Nav.Link className='links' href="/home">Home</Nav.Link>
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
    </Nav>
  );
}

export default NavBar