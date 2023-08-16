import React from 'react'
import Presentacional from './Presentacional'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'





function ItemDetailContainer(props) {

  const onAdd = (quantity) =>{
    console.log(`compraste ${quantity} unidades`);
  }

  const {id} = useParams();   // Usa el ID para obtener los detalles del artículo y mostrarlos
 /*  if (!props.data || props.data.length === 0) {
    return <p>Cargando...</p>; // O cualquier otro mensaje de carga
  } */
  /* const detalleFind = props.id.find(item => item.id === id); */
  return (
    <>
      <section> 
        {/* {detalleFind ? (
          <article >
            <Presentacional id={[detalleFind]}/>
            <p >{detalleFind.description}</p>
            <ItemCount />
          </article>
        ) :(
          <p>No se encuentra disponible</p>
          
        )}
           */}
          
            <article className='card'  >
              <h2 className='titulo_card'>{item.title}</h2>
              <p className='precio_card'>${item.price}</p>
              <img className='img_card' src={item.image} alt={item.title} />
            <p >asdsa</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
          </article>
      </section> 
      
    
    </>
  )
}



export default ItemDetailContainer