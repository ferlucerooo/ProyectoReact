import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { contexto } from './CartContext';
import { Link } from 'react-router-dom';

function ItemDetail(props) {

  const [irAlCarrito, setIrAlCarrito] = useState(false);

  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const {addCart} = useContext(contexto)
  const onAdd = (contador)=> {

    setIrAlCarrito(true)

    setCantidadSeleccionada(contador);

    addCart(props.item, contador)

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
              ?(<div>
                  <Link to='/cart' className="boton_add">Terminar compra</Link>
                  <Link to='/' className="boton_add">Seguir comprando</Link>
                </div>
              )
              : (<ItemCount initial={0} stock={10} onAdd={onAdd}/>)
            }
            
            <p>Cantidad seleccionada : {cantidadSeleccionada}</p>
        </article>
    </section>
  )
}

export default ItemDetail