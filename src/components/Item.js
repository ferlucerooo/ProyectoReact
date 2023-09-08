import React from 'react'
import { Link } from 'react-router-dom'


function Item(props) {
  return (
    <section className='section_card'> 
        {props.data.length === 0 ? <p>Cargando...</p> :props.data.map((item, i)=>{
            return(
              
                <article className='card' key={i} >
                    <h2 className='titulo_card'>{item.title}</h2>
                    <p className='precio_card'>${item.price}</p>
                    <img className='img_card' src={item.image} alt={item.title} />
                    <Link className='link_det' to={`/item/${item.id}`}>Detalles</Link>
                </article>
            )
        })}
    </section>
  )
}

export default Item