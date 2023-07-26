import React from 'react'
let nombre = "Fernando";
function ItemListContainer(props) {
    
  return (
    <>
        <p className='mensaje'>{props.greeting} {nombre}!</p>
    </>
  )
}

export default ItemListContainer