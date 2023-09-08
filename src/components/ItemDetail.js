import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { contexto } from './CartContext';
import { Link } from 'react-router-dom';

function ItemDetail(props) {

  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const contextoDetail = useContext(contexto)

  const onAdd = (contador)=> {

    setIrAlCarrito(true)

    setCantidadSeleccionada(contador);

    contextoDetail.addCart(props.item, contador);


    /* setCantidadSeleccionada(contador);


    const precioTotal = props.item.price * contador;

    contextoDetail.carrito.push({

      item: props.item,
      cantidad: contador,
      precioTotal: precioTotal,

    })

    contextoDetail.montoTotal += precioTotal;
    contextoDetail.cantidadTotal += contador;
 */
  }

  return (
    <section className='section_card_det'>
        <article className='card_det' >
            <h2 className='titulo_card_det'>{props.item.title}</h2>
            <p className='precio_card_det'>${props.item.price}</p>
            <img className='img_card_det' src={props.item.image} alt={props.item.title} />
            <p className='description_det'>{props.item.description}</p>
            {
              irAlCarrito 
              ? <Link to='/cart' className="boton_add">Terminar compra </Link>/* , <Link to='/' className="boton_add">Seguir comprando</Link> */
              : <ItemCount initial={0} stock={10} onAdd={onAdd}/>
            }
            
            <p>cantidad seleccionada : {cantidadSeleccionada}</p>
        </article>
    </section>
  )
}

export default ItemDetail