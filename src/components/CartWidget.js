import React from 'react'
import { NavLink } from 'react-router-dom'

function CartWidget() {
  return (
    <>
        <NavLink className="boton-carrito links" to="./carrito">
          <i className="bi bi-cart-fill"></i> Carrito <span id="numerito" className="numerito">0</span>
        </NavLink>
    </>
    
  )
}

export default CartWidget