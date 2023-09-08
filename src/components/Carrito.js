import React, { useContext } from 'react'
import { contexto } from './CartContext'

function Carrito() {
  
  const contextoCarrito = useContext(contexto)

  const {carrito, clearCart,removeCart, montoTotal, cantidadTotal, addCart } = contextoCarrito;

  const eliminarDeUno = (id) => {
    const product = carrito.find((producto) => producto.id === id);
  if (product && product.contador > 1) {
    // Resta 1 al contador si es mayor que 1
    addCart(product, -1);
  } else {
    // Si el contador es 1 o menos, elimina el producto del carrito
    removeCart(id);
  }
  };

  return (
    <>
        <h1>Carrito de Compras</h1>
        {carrito.length === 0 
        ? ( <p>El carrito esta vacio.</p>)
        : (
          <>
            <ul>
            {carrito.map((producto) => (
              <li className='card' key={producto.id}>
                <p className='titulo_card'>Producto: {producto.title}</p>
                <img className='img_card' src={producto.image} alt={producto.title} />
                <p>Cantidad: {producto.contador}</p>
                <p>Precio Total: ${producto.price * producto.contador}</p>
                <button onClick={() => eliminarDeUno(producto.id)}>-</button>
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
        
    </>
  )
}

export default Carrito