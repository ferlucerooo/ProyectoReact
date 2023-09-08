import React, { useContext } from 'react'
import { contexto } from './CartContext'

function Carrito() {
  
  const contextoCarrito = useContext(contexto)

  const {carrito, clearCart,removeCart, montoTotal, cantidadTotal } = contextoCarrito;


  return (
    <>
        <h1>Carrito de Compras</h1>
        <ul>
          {carrito.map((producto) => (
            <li className='card' key={producto.id}>
              <p className='titulo_card'>Producto: {producto.title}</p>
              <img className='img_card' src={producto.image} alt={producto.title} />
              <p>Cantidad: {producto.contador}</p>
              <p>Precio Total: ${producto.price * producto.contador}</p>
              <button onClick={() => removeCart(producto.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      <p>Total a pagar: ${montoTotal}</p>
      <p>Cantidad Total de productos: {cantidadTotal}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </>
  )
}

export default Carrito