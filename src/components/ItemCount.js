import { useEffect, useState } from "react";

import React from 'react'



function ItemCount({initial, stock, /* onAdd */}) {


    let [contador, setContador] = useState(parseInt(initial));

const suma = () =>{
    setContador(contador + 1);
}
const restar = () =>{
    setContador (contador -1);
}
useEffect(()=> {
  setContador(parseInt(initial));
},[initial])


  return (
    <>
    <div className='contador'>
      <button disabled={contador <=1} className="boton_contador" onClick={restar}>-</button>
      <p>{contador}</p>
      <button disabled={contador >=stock } className="boton_contador" onClick={suma}>+</button>
    </div>
    <p className="stock">Stock: 10</p>
    <button disabled={stock <= 0 } className="boton_add"  /* onClick={() => onAdd(contador)} */>Agregar al carrito</button>
    </>
  )
}

export default ItemCount