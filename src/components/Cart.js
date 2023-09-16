import React, { useContext } from 'react'
import { contexto } from './CartContext'
import { Link } from 'react-router-dom';

function Cart() {
  
  const contextoCarrito = useContext(contexto)

  const {carrito, clearCart, montoTotal, cantidadTotal} = contextoCarrito;

  const eliminarProducto = (id) => {
    contextoCarrito.removeCart(id); 
  };

  return (
    <>
        <h1>Carrito de Compras</h1>
        {carrito.length === 0 
        ? ( <div>
              <p>El carrito esta vacio.</p>
              <Link to='/' className="boton_add">Volver a la tienda </Link>
            </div> )
            
        : (
          <>
            <ul>
            {carrito.map((producto, i) => (
              <li className='card' key={i}>
                <p className='titulo_card'>Producto: {producto.title}</p>
                <img className='img_card' src={producto.image} alt={producto.title} />
                <p>Cantidad: {producto.contador}</p>
                <p>Precio Total: ${producto.price * producto.contador}</p>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
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

export default Cart