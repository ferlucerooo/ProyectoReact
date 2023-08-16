import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function Presentacional(props) {
  return (
    <section className='section_card'> 
        {props.data.length === 0 ? <p>cargando</p> :props.data.map((item, i)=>{
            return(
                <article className='card' key={i} >
                    <h2 className='titulo_card'>{item.title}</h2>
                    <p className='precio_card'>${item.price}</p>
                    <img className='img_card' src={item.image} alt={item.title} />
                    <Link to={`/detalles/${item.id}`}>Detalles</Link>
                    <ItemCount initial={1} stock={10} /* onAdd={onAdd} */ />
                    
                </article>
            )
        })}
    </section>
  )
}

export default Presentacional