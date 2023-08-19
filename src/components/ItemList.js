import React from 'react'
import Presentacional from './Item'
import { useEffect, useState } from 'react'
import Item from './Item';

function ItemList() {

    const [data, setData] = useState ([])  // solo pasa 1 vez

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