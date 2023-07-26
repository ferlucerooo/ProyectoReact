import React from 'react'

function CartWidget() {
  return (
    <>
        <a className="boton-carrito links" href="./carrito.html">
          <i className="bi bi-cart-fill"></i> Carrito <span id="numerito" className="numerito">0</span>
        </a>
    </>
    
  )
}

export default CartWidget