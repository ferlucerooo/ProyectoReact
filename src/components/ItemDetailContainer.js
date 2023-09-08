import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'




function ItemDetailContainer() {

      const [item, setItem] = useState();

      const { id } = useParams();
    
      useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => setItem(data))
          .catch(error => console.error('Error al adquirir detao del fetch', error));
      }, [id]);

      if (!item){
        return <p>Cargando...</p>;
      }


  return (
    <>
      <ItemDetail item={item}/>
    </>
  )
}



export default ItemDetailContainer