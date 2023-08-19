import React from 'react'
import ItemList from './ItemList';
let nombre = "Fernando";
function ItemListContainer(props) {
    
  return (
    <>
        <p className='mensaje'>{props.greeting} {nombre}!</p>
        <ItemList/>
    </>
  )
}

export default ItemListContainer