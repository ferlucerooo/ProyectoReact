import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail(props) {
  return (
    <section className='section_card_det'>
        <article className='card_det' >
            <h2 className='titulo_card_det'>{props.item.title}</h2>
            <p className='precio_card_det'>${props.item.price}</p>
            <img className='img_card_det' src={props.item.image} alt={props.item.title} />
            <p className='description_det'>{props.item.description}</p>
            <ItemCount initial={1} stock={10} /* onAdd={function} *//>
        </article>
    </section>
  )
}

export default ItemDetail