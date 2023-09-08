import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item';
import { db } from '../firebase';
import { getDocs , collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';



function ItemList() {

    const [data, setData] = useState ([])  // solo pasa 1 vez
/*     const resultado = useParams();
  
  
  useEffect(()=>{

    const productosCollection = collection(db, "productos");

    const laConsulta = getDocs(productosCollection);
    console.log(laConsulta);




    laConsulta
  .then((resultado)=>{
    console.log(resultado.docs[0].id);
    console.log(resultado.docs[0].data());
  })
  .catch((error)=>{
    console.log("error");
  })

  })
     */
    console.log(data);
    useEffect(()=>{
        getProductos(setData)
    },[])    // aca hacemos el pedido a la api

    const getProductos = () =>{

        const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setData(json))
            console.log(resultado_del_fetch);
    }

       //vista
  return (
    <>
      <Item data = {data}/>
    </>
  )
  
    }





export default ItemList