import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import Carrito from './Carrito'


function Main() {
  return (
    <main className='main'>
      <h2> Stock de la tienda</h2>
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/category/:id' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/cart' element={<Carrito/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
  </main>
  )
}

export default Main