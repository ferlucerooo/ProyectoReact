import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { getDocs , collection } from 'firebase/firestore';



function ItemList() {

    const [data, setData] = useState ([]);  

    const {id} = useParams();  

    const [loading, setLoading] = useState(true);
    
    
  
  
  useEffect(()=>{

    const productosCollection = collection(db, "productos");

    const peticion = getDocs(productosCollection);

    peticion
        .then((resultado)=>{
          const aux = resultado.docs.map((doc)=>{
            const producto =doc.data();
            producto.id = doc.id
            return producto
          })
          const filterData = id 
          ? aux.filter((producto)=> producto.category === id)
          : aux;
          setData(filterData)
          setLoading(false)
        })
        .catch((error)=>{
          console.log("Error en la peticion",error);
        })

  })

  return (
    <>
      {loading 
      ? <h2>Cargando...</h2>
      : <Item data = {data} />
      } 
    </>
  )
  
    }


export default ItemList