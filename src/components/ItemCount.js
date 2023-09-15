import { useEffect, useState, useContext} from "react";
import React from 'react'
import { contexto } from "./CartContext";



function ItemCount({initial, stock, onAdd}) {
 

    let [contador, setContador] = useState(parseInt(initial))

  const ContextoActual =  useContext(contexto)
 console.log(ContextoActual);

const suma = () =>{
    setContador(contador + 1);
}
const restar = () =>{
    setContador (contador -1);
}
useEffect(()=> {
  setContador(parseInt(initial));
},[initial])


const syncContador = ()=> {
  onAdd(contador)
  
}




  return (
    <>
    <div className='contador'>
      <button disabled={contador <=1} className="boton_contador" onClick={restar}>-</button>
      <p>{contador}</p>
      <button disabled={contador >=stock } className="boton_contador" onClick={suma}>+</button>
    </div>
    <p className="stock">Stock: {stock}</p>
    <button disabled={stock <= 0 } className="boton_add"  onClick={syncContador}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount