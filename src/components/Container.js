import React from 'react'
import Presentacional from './Presentacional'
import { useEffect, useState } from 'react'
import ItemDetailContainer from './ItemDetailContainer'

function Container() {

    const [data, setData] = useState ([])  // solo pasa 1 vez
    /* const resultado = useParams() */ // 
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
      <Presentacional data = {data}/>
      {/* <ItemDetailContainer dataid = {data}/> */}
    </>
  )
  
    }


 


export default Container