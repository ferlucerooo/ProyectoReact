import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../firebase';
import { collection, doc, getDoc } from 'firebase/firestore';




function ItemDetailContainer() {

      const [item, setItem] = useState();

      const { id } = useParams();

    
      useEffect(() => {

        const productosCollection = collection(db, "productos");

        const refDocumento = doc(productosCollection, id);

        const peticion = getDoc(refDocumento);

        peticion  
          .then((res)=>{ 
            setItem(res.data())
          })
          .catch((error)=>{
            console.log("error en la peticion del detalle", error);
          })

      }, [id]);

      if (!item){
        return <h3>Cargando...</h3>;
      }


  return (
    <>
      <ItemDetail item={item}/>
    </>
  )
}



export default ItemDetailContainer