import React from 'react'
let nombre = prompt("Cual es tu nombre?");
function ItemListContainer(props) {
    
  return (
    <>
        <p>{props.greeting} {nombre}!</p>
    </>
  )
}

export default ItemListContainer