import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from './CartContext'

function CartWidget() {

  const contextoWidget = useContext(contexto)

  return (
    <>
      {contextoWidget.cantidadTotal > 0 &&(
        <NavLink className="boton-carrito links" to="./cart">
          <i className="bi bi-cart-fill"></i> Carrito<span  className="numerito">{contextoWidget.cantidadTotal}</span>
        </NavLink>
        )}
    </>
    
  )
}

export default CartWidget